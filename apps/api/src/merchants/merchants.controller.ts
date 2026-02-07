import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

type CreateMerchantBody = { name?: string };

type UpsertWooBody = {
  storeUrl?: string;
  consumerKey?: string;
  consumerSecret?: string;
};

type UpsertWhatsAppBody = {
  verifyToken?: string;
  phoneNumberId?: string;
  wabaId?: string;
};

@Controller('merchants')
export class MerchantsController {
  constructor(private readonly prisma: PrismaService) {}

  @Post()
  async create(@Body() body: CreateMerchantBody) {
    const name = (body.name || '').trim() || 'Mi tienda';
    const merchant = await this.prisma.merchant.create({ data: { name } });
    await this.prisma.auditEvent.create({
      data: { merchantId: merchant.id, type: 'merchant.created', payload: { name } },
    });
    return { ok: true, merchant };
  }

  @Get(':id/status')
  async status(@Param('id') id: string) {
    const merchant = await this.prisma.merchant.findUnique({
      where: { id },
      include: { woo: true, whatsapp: true },
    });
    if (!merchant) throw new BadRequestException('Merchant not found');

    return {
      ok: true,
      merchant: { id: merchant.id, name: merchant.name },
      woo: {
        configured: !!merchant.woo,
        ok: false,
        details: merchant.woo ? { storeUrl: merchant.woo.storeUrl } : null,
      },
      whatsapp: {
        configured: !!merchant.whatsapp,
        ok: !!merchant.whatsapp?.verifyToken,
        details: merchant.whatsapp
          ? {
              phoneNumberId: merchant.whatsapp.phoneNumberId || null,
              wabaId: merchant.whatsapp.wabaId || null,
            }
          : null,
      },
    };
  }

  @Put(':id/woo')
  async upsertWoo(@Param('id') id: string, @Body() body: UpsertWooBody) {
    const storeUrl = (body.storeUrl || '').trim();
    const consumerKey = (body.consumerKey || '').trim();
    const consumerSecret = (body.consumerSecret || '').trim();

    if (!storeUrl || !consumerKey || !consumerSecret) {
      throw new BadRequestException('Missing fields');
    }

    const merchant = await this.prisma.merchant.findUnique({ where: { id } });
    if (!merchant) throw new BadRequestException('Merchant not found');

    const woo = await this.prisma.wooConfig.upsert({
      where: { merchantId: id },
      create: { merchantId: id, storeUrl, consumerKey, consumerSecret },
      update: { storeUrl, consumerKey, consumerSecret },
    });

    await this.prisma.auditEvent.create({
      data: {
        merchantId: id,
        type: 'woo.updated',
        payload: { storeUrl },
      },
    });

    return { ok: true, woo: { merchantId: woo.merchantId, storeUrl: woo.storeUrl } };
  }

  @Post(':id/woo/test')
  async testWoo(@Param('id') id: string) {
    const woo = await this.prisma.wooConfig.findUnique({ where: { merchantId: id } });
    if (!woo) throw new BadRequestException('Woo not configured');

    const base = woo.storeUrl.replace(/\/+$/, '');
    const url = `${base}/wp-json/wc/v3/system_status`;

    const auth = Buffer.from(`${woo.consumerKey}:${woo.consumerSecret}`).toString('base64');
    const res = await fetch(url, {
      headers: {
        Authorization: `Basic ${auth}`,
        Accept: 'application/json',
      },
    });

    const text = await res.text();

    await this.prisma.auditEvent.create({
      data: {
        merchantId: id,
        type: 'woo.test',
        payload: { url, status: res.status },
      },
    });

    if (!res.ok) {
      throw new BadRequestException({ ok: false, status: res.status, body: text.slice(0, 500) });
    }

    return { ok: true, status: res.status };
  }

  @Put(':id/whatsapp')
  async upsertWhatsApp(@Param('id') id: string, @Body() body: UpsertWhatsAppBody) {
    const verifyToken = (body.verifyToken || '').trim();
    if (!verifyToken) throw new BadRequestException('verifyToken required');

    const merchant = await this.prisma.merchant.findUnique({ where: { id } });
    if (!merchant) throw new BadRequestException('Merchant not found');

    const whatsapp = await this.prisma.whatsAppConfig.upsert({
      where: { merchantId: id },
      create: {
        merchantId: id,
        verifyToken,
        phoneNumberId: body.phoneNumberId?.trim() || null,
        wabaId: body.wabaId?.trim() || null,
      },
      update: {
        verifyToken,
        phoneNumberId: body.phoneNumberId?.trim() || null,
        wabaId: body.wabaId?.trim() || null,
      },
    });

    await this.prisma.auditEvent.create({
      data: {
        merchantId: id,
        type: 'whatsapp.updated',
        payload: { phoneNumberId: whatsapp.phoneNumberId, wabaId: whatsapp.wabaId },
      },
    });

    return {
      ok: true,
      whatsapp: {
        merchantId: whatsapp.merchantId,
        verifyToken: true,
        phoneNumberId: whatsapp.phoneNumberId,
        wabaId: whatsapp.wabaId,
      },
    };
  }
}
