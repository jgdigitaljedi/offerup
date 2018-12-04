# getUserRelation

**Fields**: 
- <mark>userid: number = 49580723</mark> - User ID

**Authentication**: <mark>Required</mark>

**Request**:

```ts
(async() => {
    const OfferUp = require('offerup');

    const offerUp = OfferUp();

    // Authorization
    await offerUp.authorize('email', 'password');

    let response = await offerUp.getUserRelation(49580723);
})();
```

**Response**:

```ts
{
    "data": {
        "blocked": null,
        "following": null
    }
}
```