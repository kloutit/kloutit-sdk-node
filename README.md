## Kloutit SDK

Kloutit is an AI-powered B2B SaaS that enables online merchants to effectively and efficiently defend and prevent chargebacks.

This SDK allows your organization to integrate with Kloutit, so your cases could be automatically created into our system to take profit of all the following profits.

## Installation

To install Kloutit SDK you can run the following npm command.

```
npm install @kloutit/kloutit-sdk@latest
```

## Prerequisites

To be able to use any Kloutit SDK function, your organization must be registered into our system and SDK client keys for the organization must be created. You can register your organization by following a few simple steps from https://app.kloutit.com.

Once your organization is successfully registered, you will be able to configure the SDK connection from the menu `My organization > Kloutit SDK`. You will need to create new client credentials.

## Usage

To use the Kloutit SDK client, you will need to instantiate the KloutitLoginApi to obtain a valid accessToken (expires at 30m, then you can generate a new one). With this accessToken you will be able to instantiate the rest of the available APIs and make your actions.

### Sample code Login

```javascript
import { KloutitLoginApi, KloutitLoginResponse } from '@kloutit/kloutit-sdk';
import { Logger } from '@nestjs/common';
import { AxiosResponse } from 'axios';

// Define your secret values (it should come from an .env or similar)
const CLIENT_ID = '22311cca-9951-42dd-bc9b-bd0574335b55';
const CLIENT_SECRET = '6#.n3dcm-x4hc3Y0SrA/UR?DzggfM;';
const ORGANIZATION_ID = '660055bca25e9c2da9b87944';

// Create the login api instance
const kloutitLogin = new KloutitLoginApi();

let accessToken: string;
let expiresAt: number;
let expiresIn: number;

try {
  Logger.log(
    `Getting Kloutit access token for organization ${ORGANIZATION_ID}`,
  );
  const loginResponse: AxiosResponse<KloutitLoginResponse> =
    await kloutitLogin.login(
      ORGANIZATION_ID,
      {
        grant_type: 'client_credentials',
      },
      {
        auth: {
          username: CLIENT_ID,
          password: CLIENT_SECRET,
        },
      }
    );

  accessToken = loginResponse.data.accessToken;
  expiresIn = loginResponse.data.expiresIn;
  expiresAt = loginResponse.data.expiresAt;

  Logger.log('Access token successfully retrieved!');
} catch (error) {
  Logger.error(
    `Error trying to login to Kloutit SDK. Status code: ${error.response.data.statusCode}`,
    error.response.data.message,
  );
  throw new Error(error.response.data.message);
}
```

### Sample code other calls

Once you have the accessToken with the Login call, you can use it to make other calls, for instance, to create a case.

```javascript
import {
  KloutitCaseApi,
  KloutitOrganizationType,
  KloutitChargebackReason,
  Currencies,
} from '@kloutit/kloutit-sdk';
import { Logger } from '@nestjs/common';
import { AxiosResponse } from 'axios';

// Create the desired api instance
const kloutitCase = new KloutitCaseApi();

try {
  // Make the call with the requested body
  Logger.log('Creating case into Kloutit');
  const caseResponse: AxiosResponse<KloutitCaseResponse> = await kloutitCase.createCase(
    {
      organizationId: ORGANIZATION_ID,
      organizationType: KloutitOrganizationType.Technology,
      expedientNumber: 'EXPNODE0001',
      notificationDate: '2024-09-22T11:31:22.347Z',
      deadline: '2027-09-22T11:31:22.347Z',
      disputeAmount: { currency: Currencies.EUR, value: 10 },
      chargebackReason: KloutitChargebackReason.ProductServiceNotReceived,
      transactionDate: '2024-09-22T11:31:22.347Z',
      panNumber: 'PAN000001',
      transactionId: 'TR0000001',
      bankName: 'Sample bank',
      is3DSPurchase: true,
      purchaseDate: '2024-09-22T11:31:22.347Z',
      purchaseAmount: { currency: Currencies.EUR, value: 10 },

      product: 'Sample product', // Product OR service should be informed
      service: null, // Product OR service should be informed
      isChargeRefundable: true,
      shippingCity: 'Barcelona',
      shippingProvince: 'Barcelona',
      shippingPostalCode: '08000',
      shippingDate: '2024-09-22T11:31:22.347Z',
      deliveryCompany: 'Sample company',
      deliveryDate: '2024-09-22T11:31:22.347Z',
      deliveryConfirmation: true,

      customerName: 'Node SDK sample',
      customerEmail: 'kloutit-node@example.com',
      contactDate: '2024-09-22T11:31:22.347Z',
      customerPhone: '612345678',
      additionalInfo: 'Some optional additional info',
    },
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
  );
} catch (error) {
  Logger.error(
    `Error trying to create a case into Kloutit. Status code: ${error.response.data.statusCode}`,
    error.response.data.message,
  );
  throw new Error(error.response.data.message);
}
```

This example is made for TECHNOLOGY sector. You can find the needed body for each sector here:

- [Education](tipologies/EDUCATION.md)
- [Fashion](tipologies/FASHION.md)
- [Food](tipologies/FOOD.md)
- [Gaming](tipologies/GAMING.md)
- [Health & beauty](tipologies/HEALTH_BEAUTY.md)
- [Home](tipologies/HOME.md)
- [Leisure](tipologies/LEISURE.md)
- [Phone](tipologies/PHONE.md)
- [Software](tipologies/SOFTWARE.md)
- [Sport](tipologies/SPORT.md)
- [Supply](tipologies/SUPPLY.md)
- [Technology](tipologies/TECHNOLOGY.md)
- [Travel Airline](tipologies/TRAVEL_AIRLINE.md)
- [Travel Hotel](tipologies/TRAVEL_HOTEL.md)

### Documentation

In this document, you will be able to see all the available methods and all the parameters needed, so you know exactly what you need to do. If you have any doubts, please, don't hesitate to contact us so we can help you, or leave us any comment so we can improve your experience.

### Autocompletion

If you use an IDE such as VSCode, you will be able to see all the autocompletion for methods and parameters, so you know exactly what the call is expecting to receive.

### Security

Kloutit SDK does not store or refresh access tokens. Storing and refreshing access tokens is responsibility of the SDK consumer.

Please, if you discover any security issues, report them to support@kloutit.com as soon as possible.

### License

Apache 2.0
