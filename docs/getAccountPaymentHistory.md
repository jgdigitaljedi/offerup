# getAccountPaymentHistory

> If you have an example of how <mark>history</mark> property looks like, feel free to share.

**Fields**: <mark>No</mark>

**Authentication**: <mark>Required</mark>

**Request**:

```ts
(async() => {
    const OfferUp = require('offerup');

    const offerUp = OfferUp();

    // Authorization
    await offerUp.authorize('email', 'password');

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