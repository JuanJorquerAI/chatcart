# PRD — WhatsApp Commerce (Woo → WhatsApp)

## 1) Problem
WhatsApp is the dominant purchase/coordination channel in Chile, but most stores sell via:
- web checkout (high friction on mobile)
- humans answering WhatsApp manually

## 2) MVP promise
"Your store sells on WhatsApp with stock + prices from WooCommerce, and returning customers can reorder in seconds."

## 3) Primary flows
### 3.1 Merchant onboarding
- Create merchant
- Connect WooCommerce (baseUrl + consumerKey/consumerSecret)
- Configure WhatsApp provider credentials (WABA / provider)
- Configure payments (Transbank / Flow / MercadoPago / Khipu / external-link)

### 3.2 Customer new
- Greet → opt-in notice
- Browse categories/products
- Add/remove items
- Checkout → payment
- Order created in Woo

### 3.3 Customer returning
- "Reorder last order" (confirm address/payment)
- Quick add from "frequent items"

### 3.4 Post-sale
- Order status
- Tracking link

## 4) Multi-tenant requirements
- Strict data isolation by merchantId
- Rate limits per merchant
- Audit log per conversation + action

## 5) KPIs
- chat→checkout conversion
- reorder rate
- time-to-purchase
- % orders synced successfully
