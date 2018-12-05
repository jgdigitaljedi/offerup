# getUser()

**Fields**:
```ts
userid: number = 49580761 // User ID
```


**Authentication**: _No_


**Request**:

```ts
const OfferUp = require('offerup');

(async() => {
    const offerUp = OfferUp();

    let response = await offerUp.getUser(49580761);
})();
```


**Response**:

```ts
{
    "data": {
        "profile": {
            "rating": {
                "count": 0,
                "average": 0
            },
            "avatar_large": "https://d2fa3j67sd1nwo.cloudfront.net/images/default-avatar.png",
            "approximate_location": {
                "latitude": 33.95992,
                "longitude": -118.36076
            },
            "feature_attributes": {},
            "identity_attributes": {
                "is_truyou_member": false,
                "is_autos_dealer": false,
                "autos_dealer_payment_info_on_file": false,
                "is_small_business": false,
                "potential_autos_seller": false
            },
            "background_image": {
                "small": {
                    "url": "https://d2fa3j67sd1nwo.cloudfront.net/images/default_bg.png",
                    "width": 640,
                    "height": 256
                },
                "large": {
                    "url": "https://d2fa3j67sd1nwo.cloudfront.net/images/default_bg.png",
                    "width": 1920,
                    "height": 768
                },
                "medium": {
                    "url": "https://d2fa3j67sd1nwo.cloudfront.net/images/default_bg.png",
                    "width": 1280,
                    "height": 512
                }
            },
            "verified": 0,
            "payments_verified": false,
            "avatar_normal": "https://d2fa3j67sd1nwo.cloudfront.net/images/default-avatar.png",
            "is_phone_number_verified": false,
            "id": 49580761,
            "followers": 0,
            "uses_default_avatar": true,
            "public_location_name": "Inglewood, CA",
            "click_to_call_enabled": false,
            "is_email_verified": false,
            "bio": null,
            "has_facebook": false,
            "name": "Miyuki",
            "joined": "2018-09-08T16:38:22.339Z",
            "avatar_square": "https://d2fa3j67sd1nwo.cloudfront.net/images/default-avatar-small.png",
            "following": 0,
            "avatar_extra_large": "https://d2fa3j67sd1nwo.cloudfront.net/images/default-avatar.png"
        }
    }
}
```