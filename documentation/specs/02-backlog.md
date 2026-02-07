# Backlog (MVP)

## P0
- Data model: Merchant, ChannelConfig, Customer, Conversation, Cart, OrderDraft, Payment, AuditLog
- Woo connector: auth, fetch categories/products, create order
- WhatsApp webhook receiver + message sender
- Conversation state machine (browse → cart → checkout)
- Returning customer: reorder last Woo order
- Payment plugin: Transbank Webpay Plus + external-link
- Observability: structured logs + per-conversation trace id

## P1
- Catalog search
- Coupons
- Shipping rules by comuna
- Shopify connector
