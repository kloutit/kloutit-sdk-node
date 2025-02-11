## Kloutit SDK

Kloutit is an AI-powered B2B SaaS that enables online merchants to effectively and efficiently defend and prevent chargebacks.

This SDK allows your organization to integrate with Kloutit, so your cases could be automatically updated into our system to take profit of all the following profits.

## Installation

To install Kloutit SDK you can run the following npm command.

```
npm install @kloutit/kloutit-sdk@latest
```

## Prerequisites

To be able to use any Kloutit SDK function, your organization must be registered into our system and SDK client key for the organization must be created. You can register your organization by following a few simple steps from https://app.kloutit.com.

Once your organization is successfully registered, you will need to create new client key from the menu `My organization > Developers`.

## Usage

To use the Kloutit SDK client, you will need to instantiate the KloutitClientApi using the client key and make your actions.

### Sample update call code

Once you have the apiKey, you can use it to instantiate the KloutitClientApi and make calls.

```javascript
import {
  KloutitCaseApi,
  CaseSectorEnum
} from '@kloutit/kloutit-sdk';

// Create the desired api instance
const kloutitCaseApi = new KloutitCaseApi({ apiKey: 'YOUR_API_KEY' });

// Make the call with the requested body
try {
  console.log('Updating existing case');
  await this.kloutitCaseApi.updateCase(
    'CASE_EXPEDIENT_NUMBER',
    {
      sector: CaseSectorEnum.Technology,
      purchaseDate: '2025-01-01T10:00:00.000Z',
      isChargeRefundable: false,
      transactionDate: '2025-01-01T10:00:00.000Z',
      purchaseAmount: {
        value: 100,
        currency: 'EUR',
      },
      bankName: 'Sample Bank Name',
      service: 'Sample Service Name'
    }
  );
  console.log('Case updated');
} catch (error) {
  console.error('Error updating case');
  throw error:
}
```

This example is made for TECHNOLOGY sector. You can find the needed body for each sector here:

- [Digital product](typologies/DIGITAL_PRODUCT.md)
- [Education](typologies/EDUCATION.md)
- [Fashion](typologies/FASHION.md)
- [Food](typologies/FOOD.md)
- [Gaming](typologies/GAMING.md)
- [Health & beauty](typologies/HEALTH_BEAUTY.md)
- [Home](typologies/HOME.md)
- [Leisure](typologies/LEISURE.md)
- [Marketplace](typologies/MARKETPLACE.md)
- [Phone](typologies/PHONE.md)
- [Software](typologies/SOFTWARE.md)
- [Sport](typologies/SPORT.md)
- [Subscription](typologies/SUBSCRIPTION.md)
- [Supply](typologies/SUPPLY.md)
- [Technology](typologies/TECHNOLOGY.md)
- [Transport](typologies/TRANSPORT.md)
- [Travel Airline](typologies/TRAVEL_AIRLINE.md)
- [Travel Hotel](typologies/TRAVEL_HOTEL.md)

### Documentation

In this document, you will be able to see all the available methods and all the parameters needed, so you know exactly what you need to do. If you have any doubts, please, don't hesitate to contact us so we can help you, or leave us any comment so we can improve your experience.

### Autocompletion

If you use an IDE such as VSCode, you will be able to see all the autocompletion for methods and parameters, so you know exactly what the call is expecting to receive.

### Security

Kloutit SDK does not store or refresh access tokens. Storing and refreshing access tokens is responsibility of the SDK consumer.

Please, if you discover any security issues, report them to support@kloutit.com as soon as possible.

### License

Apache 2.0
