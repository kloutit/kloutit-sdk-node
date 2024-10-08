### Sample body for Travel Airline sector

This is a sample KloutitCaseBody for Travel Airline sector with all the parameters it admits.

```javascript
import {
  KloutitCaseBody,
  KloutitOrganizationType,
  KloutitChargebackReason,
  Currencies,
} from "kloutit-sdk";

const kloutitCaseBody = new KloutitCaseBody({
  organizationId,
  organizationType: KloutitOrganizationType.TRAVEL_AIRLINE,
  expedientNumber: "EXPNODE0001",
  notificationDate: new Date("2024-09-22T11:31:22.347Z"),
  deadline: new Date("2027-09-22T11:31:22.347Z"),
  disputeAmount: { currency: Currencies.EUR, value: 10 },
  chargebackReason: KloutitChargebackReason.PRODUCT_SERVICE_NOT_RECEIVED,
  transactionDate: new Date("2024-09-22T11:31:22.347Z"),
  panNumber: "PAN000001",
  transactionId: "TR0000001",
  bankName: "Sample bank",
  is3DSPurchase: true,
  purchaseDate: new Date("2024-09-22T11:31:22.347Z"),
  purchaseAmount: { currency: Currencies.EUR, value: 10 },

  service: "Sample service",
  isChargeRefundable: true,
  departureDate: "2024-09-22T11:31:22.347Z",
  arrivalDate: "2024-09-22T11:31:22.347Z",
  departureAirport: "Sample airport",
  arrivalAirport: "Sample airport",
  rate: "Sample rate",
  checkinConfirmation: true,
  destinationCountry: "Spain",

  customerName: "Node SDK sample",
  customerEmail: "kloutit-node@example.com",
  contactDate: new Date("2024-09-22T11:31:22.347Z"),
  customerPhone: "612345678",
  additionalInfo: "Some optional additional info",
});
```
