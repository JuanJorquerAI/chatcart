import { Controller, Get, Post, Query, Req } from '@nestjs/common';
import type { Request } from 'express';
import { PrismaService } from '../prisma/prisma.service';

@Controller('webhooks/whatsapp')
export class WhatsAppWebhookController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  async verify(
    @Query('hub.mode') mode?: string,
    @Query('hub.verify_token') token?: string,
    @Query('hub.challenge') challenge?: string,
  ) {
    if (!challenge) return { ok: false };
    const expected = process.env.WHATSAPP_VERIFY_TOKEN;
    if (mode === 'subscribe' && expected && token === expected) {
      await this.prisma.auditEvent.create({
        data: { type: 'whatsapp.webhook.verify.ok', payload: { mode } },
      });
      return challenge;
    }
    await this.prisma.auditEvent.create({
      data: { type: 'whatsapp.webhook.verify.failed', payload: { mode } },
    });
    return { ok: false };
  }

  @Post()
  async receive(@Req() req: Request) {
    // TODO: verify X-Hub-Signature-256 (app secret)
    // TODO: parse message payload, route to conversation engine
    await this.prisma.auditEvent.create({
      data: {
        type: 'whatsapp.webhook.event',
        payload: req.body as any,
      },
    });
    return { ok: true };
  }
}
