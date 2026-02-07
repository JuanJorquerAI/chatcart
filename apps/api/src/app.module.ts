import { Module } from '@nestjs/common';
import { HealthController } from './health.controller';
import { WhatsAppWebhookController } from './whatsapp/whatsapp-webhook.controller';

@Module({
  imports: [],
  controllers: [HealthController, WhatsAppWebhookController],
  providers: [],
})
export class AppModule {}
