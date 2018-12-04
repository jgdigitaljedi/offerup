# offerPrice()

**Fields**:
```ts
email: string = 'aga36595@iencm.com' // Your email
password: string = 123456 // Your password
options: {useDefault: boolean} = {useDefault: true} // Set to TRUE if you want to save your token in .offerup file (in __dirname folder)

```

#### OfferUp has CloudFlare Firewall. CloudFlare will block you after 20-30 login requests (doesn't matter the result successed or failed). That's why it's easier to login once and use that token forever (1 year)

> Even if you save token locally, you still have to provide email and password.

> OfferUp session expiration time - 1 year. Have fun.


**Authentication**: _No_


**Request**:

```ts
(async() => {
    const OfferUp = require('offerup');

    const offerUp = OfferUp();

    let response = await offerUp.authorize('email', 'password', {
        useDefault: false // true by default
    });
})();
```


**Response**:

```ts
{
    "data": {
        "session": {
            "token": "0p28emurpzosytup14glj8b137dcvp63",
            "user": {
                "first_name": "Max",
                "last_name": "",
                "get_profile": {
                    "rating": {
                        "count": 0,
                        "average": 0
                    },
                    "acknowledged_p2ppayments": false,
                    "avatar_large": "https://d2fa3j67sd1nwo.cloudfront.net/images/default-avatar.png",
                    "payment_commission_rate": "7.9",
                    "first_message_sent": null,
                    "terms_accepted": true,
                    "card_on_file": true,
                    "is_autos_dealer": false,
                    "id_promotion_banner": {
                        "body": "Add info to help build trust with other buyers & sellers.",
                        "subject": "Welcome to your new profile!"
                    },
                    "newsletter": false,
                    "acknowledged_payments": false,
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
                    "payments_verified": true,
                    "avatar_extra_large": "https://d2fa3j67sd1nwo.cloudfront.net/images/default-avatar.png",
                    "payment_enabled": 0,
                    "first_payout_received": null,
                    "is_phone_number_verified": false,
                    "seller_payment_enabled": false,
                    "followers": 0,
                    "uses_default_avatar": true,
                    "public_location_name": null,
                    "fanpage_id": null,
                    "verified_phone_number": null,
                    "is_email_verified": false,
                    "verification_status": "0",
                    "facebook_id": null,
                    "core_profile_attributes": {
                        "action_path": "/support/?return_to=/1007585461/",
                        "progress_bar_text": "Boost your reputation by confirming your information",
                        "action_text": "How we protect your privacy",
                        "completed_steps": 0,
                        "total_steps": 5
                    },
                    "first_payment_made": null,
                    "bio": "qweqweqwe",
                    "first_item_posted": null,
                    "items_auto_archived": false,
                    "user_id": 52714867,
                    "website_link": null,
                    "items_archived": false,
                    "p2p_payment_seller_fee_rate": "0.00",
                    "added_card": true,
                    "avatar_square": "https://d2fa3j67sd1nwo.cloudfront.net/images/default-avatar-small.png",
                    "following": 0,
                    "followers_ids": [],
                    "following_ids": []
                },
                "identity_attributes": {
                    "is_truyou_member": false,
                    "is_autos_dealer": false,
                    "autos_dealer_payment_info_on_file": false,
                    "is_small_business": false,
                    "potential_autos_seller": false
                },
                "id": 52714867,
                "feature_attributes": {},
                "click_to_call_enabled": false,
                "email": "aga36595@iencm.com",
                "date_joined": "2018-12-01T05:28:40.035Z"
            },
            "features": {
                "payments": true
            }
        }
    }
}
```