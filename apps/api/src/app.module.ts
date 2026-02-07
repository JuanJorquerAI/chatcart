import { Module } from '@nestjs/common';
import { HealthController } from './health.controller';
import { PrismaModule } from './prisma/prisma.module';
import { MerchantsController } from './merchants/merchants.controller';
import { WhatsAppWebhookController } from './whatsapp/whatsapp-webhook.controller';

@Module({
  imports: [PrismaModule],
  controllers: [HealthController, MerchantsController, WhatsAppWebhookController],
  providers: [],
})
export class AppModule {}
