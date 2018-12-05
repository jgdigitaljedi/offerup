# getUserRelation()

**Fields**: 
```ts
userid: number = 49580723 // User ID
```


**Authentication**: _Required_


**Request**:

```ts
const OfferUp = require('offerup');

(async() => {
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