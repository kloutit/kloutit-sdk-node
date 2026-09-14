### Sample Case model for Renting Vehicle sector

This is a sample UpdateCaseParams for Renting Vehicle sector with all the parameters it admits.

```javascript
import {
  UpdateCaseParams,
  CaseSectorEnum,
  Currencies,
} from '@kloutit/kloutit-sdk';

const kloutitCase: UpdateCaseParams = {
  sector: CaseSectorEnum.RENTING_VEHICLE,
  filialIdentifier: 'B12345678', // If you do not have filials in your organization, leave this field empty
  transactionDate: new Date().toISOString(), // UTC date
  bankName: 'Sample bank',
  cardBrand: 'Sample card brand',
  last4Digits: '1234',
  is3DSPurchase: true,
  purchaseDate: new Date().toISOString(), // UTC date
  purchaseAmount: { currency: Currencies.EUR, value: 200 },
  isChargeRefundable: true,
  customerName: 'Node SDK sample',
  customerEmail: 'kloutit-node@example.com',
  customerPhone: '612345678',
  additionalInfo: 'Some optional additional info',
  communications: [
    {
      sender: 'Sender name',
      content: 'Communication content',
      date: new Date().toISOString(), // UTC date
    },
  ],
  service: 'Car renting',
  rentalOriginLocation: 'Madrid Airport',
  rentalDestinationLocation: 'Barcelona Airport',
  rentalPickupDate: new Date().toISOString(), // UTC date
  rentalDeliveryDate: new Date().toISOString(), // UTC date
  privateOwnerRental: false,
  rentalOwnerName: 'Sample Rental Company',
  rentalCurrency: 'EUR',
  rentalAmount: { currency: Currencies.EUR, value: 200 },
  extraDistanceAmount: { currency: Currencies.EUR, value: 25 },
  penaltyAmount: { currency: Currencies.EUR, value: 50 },
  depositAmount: { currency: Currencies.EUR, value: 150 },
  damagesAmount: { currency: Currencies.EUR, value: 75 },
  productBrand: 'Toyota Corolla',
  productId: 'TCR-2024-001',
  productDescription: 'Product description',
};
```