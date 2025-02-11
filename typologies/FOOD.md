### Sample Case model for Food sector

This is a sample UpdateCaseParams for Food sector with all the parameters it admits.

```javascript
import {
  UpdateCaseParams,
  KloutitOrganizationType,
  KloutitChargebackReason,
  Currencies,
} from "kloutit-sdk";

const kloutitCase: UpdateCaseParams = {
  sector: KloutitOrganizationType.FOOD,
  filialIdentifier: 'B12345678', // If you do not have filials in your organization, leave this field empty
  transactionDate: new Date(),
  bankName: "Sample bank",
  cardBrand: "Sample card brand",
  last4Digits: "1234",
  is3DSPurchase: true,
  purchaseDate: new Date(),
  purchaseAmount: { currency: Currencies.EUR, value: 10 },
  isChargeRefundable: true,
  customerName: "Node SDK sample",
  customerEmail: "kloutit-node@example.com",
  customerPhone: "612345678",
  additionalInfo: "Some optional additional info",
  communications: [
    {
      sender: 'Sender name',
      content: 'Communication content',
      date: new Date(),
    }
  ],

  product: "Sample product",
  shippingCity: "Barcelona",
  shippingProvince: "Barcelona",
  shippingPostalCode: "08000",
  deliveryConfirmation: true,
  shippingDate: new Date(),
  deliveryDate: new Date(),
  deliveryCompany: "Sample company",
};
```
