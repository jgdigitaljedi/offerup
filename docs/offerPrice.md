# offerPrice()

**Fields**:
```ts
itemid: number = 591216884 // Item ID
price: number = 200 // Your offer
```


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

    let response = await offerUp.offerPrice(591216884, 200);
})();
```


**Response**:

```ts
{
    "id": number;
    "buy_request": {
        "sold_date": Date;
        "review_date": Date;
        "request_date": Date;
        "offer": string;
        "payment_status": number;
        "seller": OfferUpUser;
        "buyer": OfferUpUser;
        "item": {
            "reservable": boolean;
            "get_img_small_height": number;
            "payable": boolean;
            "price": string;
            "title": string;
            "paid": boolean;
            "get_img_permalink_small": string;
            "post_date_ago": string;
            "get_img_small_width": number;
            "id": number;
        },
        "request_status": number;
        "require_payments": boolean,
    }
}
```

OfferUpUser

```ts
{
    "id": number;
    "first_name": string;
    "last_name": string;
    "email": string;
    "get_profile": {
        "rating": {
            "count": number;
            "average": number;
        }
        "card_on_file": boolean;
        "verified": number;
        "payments_verified": boolean;
        "avatar_normal": string;
        "has_facebook": boolean;
        "not_active": boolean;
        "seller_payment_enabled": boolean;
        "uses_default_avatar": boolean;
        "avatar_square": string;
        "public_location_name": string;
    }
    "feature_attributes": any;
    "click_to_call_enabled": boolean;
    "identity_attributes": {
        "is_truyou_member": boolean;
        "is_autos_dealer": boolean;
        "autos_dealer_payment_info_on_file": boolean;
        "is_small_business": boolean;
        "potential_autos_seller": boolean;
    }
    "date_joined": Date;
}
```