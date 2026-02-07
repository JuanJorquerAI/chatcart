import { Controller, Get, Post, Query, Req } from '@nestjs/common';
import type { Request } from 'express';

@Controller('webhooks/whatsapp')
export class WhatsAppWebhookController {
  @Get()
  verify(
    @Query('hub.mode') mode?: string,
    @Query('hub.verify_token') token?: string,
    @Query('hub.challenge') challenge?: string,
  ) {
    if (!challenge) return { ok: false };
    const expected = process.env.WHATSAPP_VERIFY_TOKEN;
    if (mode === 'subscribe' && expected && token === expected) {
      return challenge;
    }
    return { ok: false };
  }

  @Post()
  receive(@Req() _req: Request) {
    // TODO: verify X-Hub-Signature-256 (app secret)
    // TODO: parse message payload, route to conversation engine
    return { ok: true };
  }
}
