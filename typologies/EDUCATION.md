### Sample Case model for Education sector

This is a sample UpdateCaseParams for Education sector with all the parameters it admits.

```javascript
import {
  UpdateCaseParams,
  KloutitOrganizationType,
  Currencies,
} from '@kloutit/kloutit-sdk';

const kloutitCase: UpdateCaseParams = {
  sector: KloutitOrganizationType.EDUCATION,
  filialIdentifier: 'B12345678', // If you do not have filials in your organization, leave this field empty
  transactionDate: new Date().toISOString(), // UTC date
  bankName: 'Sample bank',
  cardBrand: 'Sample card brand',
  last4Digits: '1234',
  is3DSPurchase: true,
  purchaseDate: new Date().toISOString(), // UTC date
  purchaseAmount: { currency: Currencies.EUR, value: 10 },
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

  service: 'Sample service',
  commitmentStartDate: new Date().toISOString(), // UTC date
  commitmentEndDate: new Date().toISOString(), // UTC date
};
```
