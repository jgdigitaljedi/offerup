# getAccountPayment()


**Fields**: _No_


**Authentication**: _Required_


**Request**:

```ts
const OfferUp = require('offerup');

(async() => {
    const offerUp = OfferUp();

    // Authorization
    
    await offerUp.authorize('email', 'password');
    // or
    await offerUp.authorizeWithToken('token');

    let response = await offerUp.getAccountPayment();
})();
```


**Response**:

```ts
{
    "data": {
        "info_needed": [
            {
                "action_path": "/payments/deposit-method/?info_needed=True"
            },
            {
                "action_path": "/payments/identity/kyc1/"
            }
        ],
        "supported_payment_methods": [
            "card"
        ],
        "payment_methods": [],
        "payment_user_data": {
            "acknowledged_payments": false,
            "opt_in_to_instant_payouts": false,
            "payment_enabled": null
        },
        "deposit_methods": [],
        "balance": "0.00"
    }
}
```