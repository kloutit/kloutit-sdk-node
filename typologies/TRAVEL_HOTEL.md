### Sample Case model for Travel Hotel sector

This is a sample UpdateCaseParams for Travel Hotel sector with all the parameters it admits.

```javascript
import {
  UpdateCaseParams,
  KloutitOrganizationType,
  KloutitChargebackReason,
  Currencies,
} from "@kloutit/kloutit-sdk";

const kloutitCase: UpdateCaseParams = {
  sector: KloutitOrganizationType.TRAVEL_HOTEL,
  filialIdentifier: "B12345678", // If you do not have filials in your organization, leave this field empty
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
      sender: "Sender name",
      content: "Communication content",
      date: new Date(),
    },
  ],

  termsUrl: 'https://kloutit.com/terms-and-conditions',
  service: "Sample service",
  checkinDate: "2024-09-22T11:31:22.347Z",
  checkoutDate: "2024-09-22T11:31:22.347Z",
  hotelName: "Sample hotel",
  rate: "Sample rate",
  checkinConfirmation: true,
  destinationCountry: "Spain",
};
```
