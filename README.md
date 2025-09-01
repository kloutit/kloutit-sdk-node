## Kloutit Clients API SDK

Kloutit is an AI-powered B2B SaaS that enables online merchants to effectively and efficiently defend and prevent chargebacks.

This SDK allows your organization to integrate with Kloutit Clients API v2.0, providing comprehensive case management capabilities including creating cases, uploading files, updating case information, and managing the complete chargeback defense workflow.

## Installation

To install Kloutit SDK you can run the following npm command.

```
npm install @kloutit/kloutit-sdk@latest
```

## Prerequisites

To be able to use any Kloutit SDK function, your organization must be registered into our system and SDK client key for the organization must be created. You can register your organization by following a few simple steps from https://app.kloutit.com.

Once your organization is successfully registered, you will need to create new client key from the menu `My organization > Developers`.

## Available Endpoints

The Kloutit Clients API v2.0 provides the following main endpoints:

- **Create Case** - Create a new chargeback case
- **Upload File** - Upload supporting documents to a case
- **Upload Product Photo** - Upload product images to a case
- **Update Case** - Update case information with additional data
- **Check Case** - Validate case completeness and get missing fields
- **Submit Completed Case** - Mark case as ready for defense generation
- **Verify Event** - Verify webhook events from Kloutit
- **Download Defense** - Download the generated defense document

## Usage

To use the Kloutit SDK client, you will need to instantiate the appropriate API class using your client API key.

### Creating a New Case

```javascript
import {
  KloutitCaseApi,
  CaseSectorEnum,
  Currencies,
} from '@kloutit/kloutit-sdk';

// Create the API instance
const kloutitCaseApi = new KloutitCaseApi({ apiKey: 'YOUR_API_KEY' });

try {
  console.log('Creating new case');
  const newCase = await kloutitCaseApi.createCase({
    expedientNumber: 'UNIQUE_CASE_ID',
    sector: CaseSectorEnum.TECHNOLOGY,
    chargebackAmount: {
      value: 100,
      currency: Currencies.EUR,
    },
    chargebackDate: '2025-01-01T10:00:00.000Z',
    reasonCode: '4855',
    // Additional fields based on sector requirements
  });
  console.log('Case created:', newCase);
} catch (error) {
  console.error('Error creating case:', error);
}
```

### Updating an Existing Case

```javascript
try {
  console.log('Updating existing case');
  const updatedCase = await kloutitCaseApi.updateCase(
    'CASE_EXPEDIENT_NUMBER',
    {
      sector: CaseSectorEnum.TECHNOLOGY,
      purchaseDate: new Date().toISOString(), // UTC date, e.g: '2025-01-01T10:00:00.000Z' 
      isChargeRefundable: false,
      transactionDate: '2025-01-01T10:00:00.000Z',
      purchaseAmount: {
        value: 100,
        currency: Currencies.EUR,
      },
      bankName: 'Sample Bank Name',
      service: 'Sample Service Name'
    }
  );
  console.log('Case updated:', updatedCase);
} catch (error) {
  console.error('Error updating case:', error);
}
```

### Uploading Files to a Case

```javascript
import { FileCategoryEnum } from '@kloutit/kloutit-sdk';

try {
  console.log('Uploading file to case');
  const uploadedFile = await kloutitCaseApi.uploadFile(
    'CASE_EXPEDIENT_NUMBER',
    file, // File object or buffer
    FileCategoryEnum.INVOICE
  );
  console.log('File uploaded:', uploadedFile);
} catch (error) {
  console.error('Error uploading file:', error);
}
```

### Checking Case Completeness

```javascript
try {
  console.log('Checking case completeness');
  const caseStatus = await kloutitCaseApi.checkCase('CASE_EXPEDIENT_NUMBER');
  console.log('Case status:', caseStatus);
} catch (error) {
  console.error('Error checking case:', error);
}
```

### Submitting a Completed Case

```javascript
try {
  console.log('Submitting completed case');
  await kloutitCaseApi.submitCompletedCase('CASE_EXPEDIENT_NUMBER');
  console.log('Case submitted successfully');
} catch (error) {
  console.error('Error submitting case:', error);
}
```

## Sector-Specific Requirements

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

## File Upload Specifications

When uploading files to cases:

- **Supported formats**: PDF, JPG, JPEG, PNG
- **Maximum file size**: 10MB
- **Upload method**: multipart/form-data
- **Required parameters**: file and category
- **Available categories**: Based on FileCategoryEnum (INVOICE, PROOF_OF_DELIVERY, etc.)

## Webhook Event Verification

To verify webhook events from Kloutit:

```javascript
try {
  console.log('Verifying webhook event');
  await kloutitCaseApi.verifyEvent(webhookEventData);
  console.log('Event verified successfully');
} catch (error) {
  console.error('Event verification failed:', error);
}
```

## Defense Document Download

Download generated defense documents in different formats:

```javascript
try {
  console.log('Downloading case defense');
  const defenseDocument = await kloutitCaseApi.downloadCaseDefense(
    'PDF', // Format: PDF, DOCX, etc.
    'CASE_EXPEDIENT_NUMBER'
  );
  console.log('Defense downloaded successfully');
} catch (error) {
  console.error('Error downloading defense:', error);
}
```

## API Reference

### Complete Workflow Example

Here's a complete example showing the typical workflow for managing a chargeback case:

```javascript
import {
  KloutitCaseApi,
  CaseSectorEnum,
  Currencies,
  FileCategoryEnum
} from '@kloutit/kloutit-sdk';

const kloutitCaseApi = new KloutitCaseApi({ apiKey: 'YOUR_API_KEY' });

async function manageChargebackCase() {
  try {
    // 1. Create a new case
    const newCase = await kloutitCaseApi.createCase({
      expedientNumber: 'CASE_001',
      sector: CaseSectorEnum.TECHNOLOGY,
      chargebackAmount: { value: 299.99, currency: Currencies.EUR },
      chargebackDate: '2025-01-15T09:00:00.000Z',
      reasonCode: '4855'
    });
    
    // 2. Upload supporting documents
    await kloutitCaseApi.uploadFile(
      'CASE_001',
      invoiceFile,
      FileCategoryEnum.INVOICE
    );
    
    // 3. Update case with additional information
    await kloutitCaseApi.updateCase('CASE_001', {
      purchaseDate: '2025-01-10T14:30:00.000Z',
      purchaseAmount: { value: 299.99, currency: Currencies.EUR },
      service: 'Premium Software License',
      // ... other sector-specific fields
    });
    
    // 4. Check case completeness
    const caseStatus = await kloutitCaseApi.checkCase('CASE_001');
    
    // 5. Submit completed case for defense generation
    if (caseStatus.length === 0) {
      await kloutitCaseApi.submitCompletedCase('CASE_001');
    }
    
    // 6. Download defense when ready
    const defense = await kloutitCaseApi.downloadCaseDefense('PDF', 'CASE_001');
    
  } catch (error) {
    console.error('Workflow error:', error);
  }
}
```

### Error Handling

The API returns standard HTTP status codes:

- **200** - Success
- **201** - Created successfully
- **204** - No content (successful operation)
- **206** - Partial content (case has non-required fields missing)
- **400** - Bad request (validation errors)
- **401** - Unauthorized (invalid API key)
- **404** - Not found (case doesn't exist)
- **406** - Not acceptable (case has required fields missing)

### Rate Limiting

Please refer to your API key dashboard for rate limiting information and ensure your integration handles rate limits appropriately.

## Documentation

In this document, you will be able to see all the available methods and all the parameters needed, so you know exactly what you need to do. For complete API documentation with detailed parameter specifications, visit the [Kloutit API Reference](https://clients-api.kloutit.com/api).

If you have any doubts, please, don't hesitate to contact us so we can help you, or leave us any comment so we can improve your experience.

### Autocompletion

If you use an IDE such as VSCode, you will be able to see all the autocompletion for methods and parameters, so you know exactly what the call is expecting to receive.

### Security

Kloutit SDK uses API key for authentication. It is the responsibility of the SDK consumer to keep the API key secure and not expose it in source code, public repositories, or insecure environments.

To ensure the security of your integration:

- Store the API key in environment variables or a secure secret manager.
- Do not share your API key in public source code or with unauthorized third parties.
- Regularly rotate API keys to minimize exposure risks.

Please, if you discover any security issues, report them to support@kloutit.com as soon as possible.

### License

Apache 2.0
