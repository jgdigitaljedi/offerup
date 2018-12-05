# getAccountPaymentHistory()

> If you have an example of how _history_ property looks like, feel free to share.


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

    let response = await offerUp.getAccountPaymentHistory();
})();
```


**Response**:

```ts
{
    "data": {
        "total": 0,
        "history": []
    }
}
```