# getItem()

**Fields**:
- <mark>itemid: number = 589211682</mark> - Item ID

**Authentication**: <mark>No</mark>

**Request**:

```ts
(async() => {
    const OfferUp = require('offerup');

    const offerUp = OfferUp();

    let response = await offerUp.getItem(589211682);
})();
```

**Response**:

```ts
{
    "data": {
        "item": {
            "p2p_attributes": {
                "p2p_item_payable": false
            },
            "original_price": null,
            "sold_offer": null,
            "reserved": false,
            "offer_count": null,
            "image": null,
            "get_img_medium_height": 400,
            "post_date": "2018-12-01T05:10:55.474Z",
            "discussions": {
                "unread_count": 0
            },
            "get_img_medium_width": 300,
            "owner": {
                "first_name": "ERS",
                "get_profile": {
                    "rating": {
                        "count": 1,
                        "average": 5
                    },
                    "card_on_file": true,
                    "verified": 0,
                    "payments_verified": true,
                    "avatar_normal": "https://d2fa3j67sd1nwo.cloudfront.net/images/default-avatar.png",
                    "has_facebook": false,
                    "not_active": false,
                    "seller_payment_enabled": false,
                    "uses_default_avatar": true,
                    "avatar_square": "https://d2fa3j67sd1nwo.cloudfront.net/images/default-avatar-small.png",
                    "public_location_name": "Chicago, IL"
                },
                "id": 52714130,
                "feature_attributes": {},
                "click_to_call_enabled": false,
                "identity_attributes": {
                    "is_truyou_member": false,
                    "is_autos_dealer": false,
                    "autos_dealer_payment_info_on_file": false,
                    "is_small_business": false,
                    "potential_autos_seller": false
                },
                "date_joined": "2018-12-01T04:57:36.191Z"
            },
            "watched": false,
            "get_img_small_width": 140,
            "id": 589211682,
            "item_actions": {},
            "category": {
                "id": 4,
                "name": "Furniture"
            },
            "generic_attributes": [],
            "location_name": "Chicago, IL",
            "get_img_small_height": 186,
            "title": "IKEA Trysil Queen Bed Frame and Luroy Bed Base",
            "post_date_ago": "3 days",
            "get_full_url": "https://offerup.com/item/detail/589211682/",
            "priority": 100,
            "state": 2,
            "latitude": "41.8840",
            "get_img_permalink_medium": "https://images.offerup.com/deYeDAGeoYZFb4YJOpVTepLkf7Y=/300x400/e79c/e79cccc382f04233b982d6e398c233ae.jpg",
            "sort_label": null,
            "buyer_can_meet_local": true,
            "description": "Slatted Bed Base includes - very new condition",
            "price": "90.00",
            "view_count_overall": 228,
            "shipping_attributes": {
                "buy_it_now_enabled": false,
                "seller_pays_shipping": false,
                "show_as_shipped": false,
                "can_ship_to_buyer": false,
                "shipping_enabled": false,
                "shipping_parcel_id": null,
                "shipping_price": 0
            },
            "paid": false,
            "payable": false,
            "discussion_count": null,
            "new_reserve_count": null,
            "image_mob_det_hd": "https://images.offerup.com/deYeDAGeoYZFb4YJOpVTepLkf7Y=/300x400/e79c/e79cccc382f04233b982d6e398c233ae.jpg",
            "listing_type": 2,
            "condition": 40,
            "reservable": false,
            "distance": null,
            "post_from_store_address": "Chicago, IL",
            "photos": [
                {
                    "images": {
                        "detail_full": {
                            "url": "https://images.offerup.com/xQdw3AmZlsI8kYm3ukeWBTUXNYw=/600x800/e79c/e79cccc382f04233b982d6e398c233ae.jpg",
                            "width": 600,
                            "height": 800
                        },
                        "list": {
                            "url": "https://images.offerup.com/n8EXFzuJzqkg-JpCMpm8EndwRV8=/140x186/e79c/e79cccc382f04233b982d6e398c233ae.jpg",
                            "width": 140,
                            "height": 186
                        },
                        "detail": {
                            "url": "https://images.offerup.com/deYeDAGeoYZFb4YJOpVTepLkf7Y=/300x400/e79c/e79cccc382f04233b982d6e398c233ae.jpg",
                            "width": 300,
                            "height": 400
                        }
                    },
                    "uuid": "e79cccc382f04233b982d6e398c233ae"
                },
                {
                    "images": {
                        "detail_full": {
                            "url": "https://images.offerup.com/N4NAUKR0e1IHNQkFon9MnueDIlI=/600x800/1a73/1a737c74c59a45d384812e183ba10f9e.jpg",
                            "width": 600,
                            "height": 800
                        },
                        "list": {
                            "url": "https://images.offerup.com/nbAzXVgGtmVLJUsne8idhenoDp0=/140x186/1a73/1a737c74c59a45d384812e183ba10f9e.jpg",
                            "width": 140,
                            "height": 186
                        },
                        "detail": {
                            "url": "https://images.offerup.com/AY2JfLQpgTJKScYd7Y_QxQRLWnw=/300x400/1a73/1a737c74c59a45d384812e183ba10f9e.jpg",
                            "width": 300,
                            "height": 400
                        }
                    },
                    "uuid": "1a737c74c59a45d384812e183ba10f9e"
                },
                {
                    "images": {
                        "detail_full": {
                            "url": "https://images.offerup.com/PWEkB1ikQv7x7FodieWG20DfENQ=/600x450/46a1/46a1837698204e55915e9868a25cf47b.jpg",
                            "width": 600,
                            "height": 450
                        },
                        "list": {
                            "url": "https://images.offerup.com/BPXAJbVTTIFd0f4wQMnLmDKjY3k=/140x105/46a1/46a1837698204e55915e9868a25cf47b.jpg",
                            "width": 140,
                            "height": 105
                        },
                        "detail": {
                            "url": "https://images.offerup.com/ClYtdCD0Y2XF3OZNGLuQLnrPu6o=/300x225/46a1/46a1837698204e55915e9868a25cf47b.jpg",
                            "width": 300,
                            "height": 225
                        }
                    },
                    "uuid": "46a1837698204e55915e9868a25cf47b"
                }
            ],
            "best_offer": null,
            "longitude": "-87.6197",
            "get_img_permalink_small": "https://images.offerup.com/n8EXFzuJzqkg-JpCMpm8EndwRV8=/140x186/e79c/e79cccc382f04233b982d6e398c233ae.jpg",
            "image_mob_list_hd": "https://images.offerup.com/n8EXFzuJzqkg-JpCMpm8EndwRV8=/140x186/e79c/e79cccc382f04233b982d6e398c233ae.jpg",
            "local_pickup_enabled": true,
            "get_img_permalink_large": "https://images.offerup.com/xQdw3AmZlsI8kYm3ukeWBTUXNYw=/600x800/e79c/e79cccc382f04233b982d6e398c233ae.jpg"
        },
        "operation_context": "eyJzY3JlZW5fc291cmNlX3R5cGUiOiAiaXRlbV9kZXRhaWwiLCAic2NyZWVuX3NvdXJjZV9pZCI6ICI3NTc5NmM2ZTM3Y2E0ZDJkYTgwZTE1NDNlNjc0ZGMxYiIsICJzZXNzaW9uX2lkIjogImI3MGVmMTkxLWExNzYtNGFjNi04MmQ1LThhNWI4OWQxNTQ5ZCIsICJzZXNzaW9uX3R5cGUiOiAidXNlci1vcGVuIn0="
    }
}
```
