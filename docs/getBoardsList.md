# getBoardsList()


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

    let response = await offerUp.getBoardsList();
})();
```


**Response**:

```ts
{
    "data": {
        "boards": [
            {
                "id": "quicksaveboard_52714867",
                "name": "Quick Save",
                "description": "Default board",
                "is_public": false,
                "is_quick_save": true,
                "item_count": 0,
                "collaborator_count": 0,
                "access_level": 3,
                "photos": null
            }
        ],
        "next_key": null
    }
}
```