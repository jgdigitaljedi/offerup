# search()


**Fields**:
```ts
lon: number = 42.12 // Longitude
lat: number = -87.22 // Latitude
lid: number = 37 // List ID
zipcode: number = 60663 // Zip Code
limit: number = 50 // Max items requested
accuracy: number = 100 // Item's accuracy (0-100)
sort: 'distance' | 'price' | '-price' = 'price' // Sort By field (accepts only 'distance', 'price' and '-price')
price_min: number = 250 // Minimum price
price_max: number = 300 // Maximum price
delivery_param: 'p' | 's' = 'p' // Delivery type (s -> 'Shipping', p -> 'Pick up')
```


**Authentication**: _No_


**Request**:

```ts
(async() => {
    const OfferUp = require('offerup');

    const offerUp = OfferUp();

    let response = await offerUp.search({
        lon: 42.12,
        lat: -87.22,
        lid: 37,
        zipcode: 60663,
        limit: 50,
        accuracy: 100,
        sort: 'distance',
        price_min: 250,
        price_max: 300,
        delivery_param: 'p'
    });
})();
```


**Response**:

```ts
{
    "data": {
        "search_data": {
            "search_performed_event_unique_id": "srch48cd3e3c46174055b87ba49efdf06514",
            "search_session_id": "srch48cd3e3c46174055b87ba49efdf06514"
        },
        "feed_items": [
            {
                "type": "item",
                "item": {
                    "distance": 1,
                    "get_img_medium_height": 400,
                    "post_date": "2016-06-06T16:56:56.727Z",
                    "get_img_medium_width": 300,
                    "owner": {
                        "first_name": "Miing",
                        "get_profile": {
                            "rating": {
                                "count": 13,
                                "average": 5
                            },
                            "verified": 0,
                            "avatar_normal": "https://images.offerup.com/j4rMjrA-QUnFSLM_-wGrtXjCj4s=/300x0/smart/ce06/o1473354_59490.jpg",
                            "avatar_square": "https://images.offerup.com/OktlI3UZgCScJh-9CG8PhFcccpQ=/100x100/smart/ce06/o1473354_59490.jpg",
                            "public_location_name": "Washington, DC",
                            "not_active": false,
                            "uses_default_avatar": false
                        },
                        "id": 1473354,
                        "identity_attributes": {
                            "is_truyou_member": false,
                            "autos_dealer_payment_info_on_file": false,
                            "is_autos_dealer": false,
                            "is_small_business": false,
                            "potential_autos_seller": false
                        },
                        "date_joined": "2015-01-10T16:45:28.290Z",
                        "active": false,
                        "softBlocked": false
                    },
                    "watched": false,
                    "get_img_small_width": 140,
                    "id": 119525470,
                    "category": {
                        "id": 5,
                        "name": "Clothing & Shoes"
                    },
                    "location_name": "US",
                    "get_img_small_height": 186,
                    "title": "Authentic hot pink Michael Kors",
                    "post_date_ago": "2 years",
                    "get_full_url": "https://offerup.com/item/detail/119525470/",
                    "priority": 100,
                    "state": 3,
                    "longitude": -95.7129,
                    "latitude": 37.0902,
                    "get_img_permalink_medium": "https://images.offerup.com/2Mwyf6HSIj9GpVOiOmi3jITremU=/300x400/2974/29745a27fd2842c3be8a6b389b9c5b24.jpg",
                    "sort_label": "Within 1 mile",
                    "description": "Hot pink MK satchel with gold detail",
                    "paid": false,
                    "payable": true,
                    "image_mob_det_hd": "https://images.offerup.com/2Mwyf6HSIj9GpVOiOmi3jITremU=/300x400/2974/29745a27fd2842c3be8a6b389b9c5b24.jpg",
                    "image_mob_list_hd": "https://images.offerup.com/HVoPQ155pJRM4QIPHy4lSMtdXjc=/140x186/2974/29745a27fd2842c3be8a6b389b9c5b24.jpg",
                    "listing_type": 1,
                    "condition": 100,
                    "post_from_store_address": "Washington, DC",
                    "photos": [
                        {
                            "uuid": "29745a27fd2842c3be8a6b389b9c5b24",
                            "images": {
                                "detail_full": {
                                    "url": "https://images.offerup.com/Y-5LauCEsQCppIxwu5pCtxGmuIg=/600x800/2974/29745a27fd2842c3be8a6b389b9c5b24.jpg",
                                    "width": 600,
                                    "height": 800
                                },
                                "detail": {
                                    "url": "https://images.offerup.com/2Mwyf6HSIj9GpVOiOmi3jITremU=/300x400/2974/29745a27fd2842c3be8a6b389b9c5b24.jpg",
                                    "width": 300,
                                    "height": 400
                                },
                                "list": {
                                    "url": "https://images.offerup.com/HVoPQ155pJRM4QIPHy4lSMtdXjc=/140x186/2974/29745a27fd2842c3be8a6b389b9c5b24.jpg",
                                    "width": 140,
                                    "height": 186
                                }
                            }
                        },
                        {
                            "uuid": "6da81b46f792477a868de9280e2d9676",
                            "images": {
                                "detail_full": {
                                    "url": "https://images.offerup.com/vRlA2rkrZJtLOIsiK2rDIjg_FjY=/600x800/6da8/6da81b46f792477a868de9280e2d9676.jpg",
                                    "width": 600,
                                    "height": 800
                                },
                                "detail": {
                                    "url": "https://images.offerup.com/I88Wq10VIdIr8ozCsLWbwfzM9Dw=/300x400/6da8/6da81b46f792477a868de9280e2d9676.jpg",
                                    "width": 300,
                                    "height": 400
                                },
                                "list": {
                                    "url": "https://images.offerup.com/9773ce2506MzBdYTzpbB8pQTgK0=/140x186/6da8/6da81b46f792477a868de9280e2d9676.jpg",
                                    "width": 140,
                                    "height": 186
                                }
                            }
                        },
                        {
                            "uuid": "743ec23be7404d488a6be5de2300cdd8",
                            "images": {
                                "detail_full": {
                                    "url": "https://images.offerup.com/pqtfNXsCkCuryu0D10AAK7GEu0E=/600x800/743e/743ec23be7404d488a6be5de2300cdd8.jpg",
                                    "width": 600,
                                    "height": 800
                                },
                                "detail": {
                                    "url": "https://images.offerup.com/OLgXTZzVyMl-ZOkFtSBKTn5-SbE=/300x400/743e/743ec23be7404d488a6be5de2300cdd8.jpg",
                                    "width": 300,
                                    "height": 400
                                },
                                "list": {
                                    "url": "https://images.offerup.com/8QC1qLmyOP_8xizSRPN3KEgyD1M=/140x186/743e/743ec23be7404d488a6be5de2300cdd8.jpg",
                                    "width": 140,
                                    "height": 186
                                }
                            }
                        },
                        {
                            "uuid": "6c70db82f28e45bcaccffd93707f1565",
                            "images": {
                                "detail_full": {
                                    "url": "https://images.offerup.com/pKw3osrj25uqsNeHgXRzse_M2gg=/600x800/6c70/6c70db82f28e45bcaccffd93707f1565.jpg",
                                    "width": 600,
                                    "height": 800
                                },
                                "detail": {
                                    "url": "https://images.offerup.com/kTW3kXW-iU4ECk5xe3nAEmyVVrw=/300x400/6c70/6c70db82f28e45bcaccffd93707f1565.jpg",
                                    "width": 300,
                                    "height": 400
                                },
                                "list": {
                                    "url": "https://images.offerup.com/zw9wKaDY5Yb7lhePnt5_M094qgA=/140x186/6c70/6c70db82f28e45bcaccffd93707f1565.jpg",
                                    "width": 140,
                                    "height": 186
                                }
                            }
                        }
                    ],
                    "get_img_permalink_small": "https://images.offerup.com/HVoPQ155pJRM4QIPHy4lSMtdXjc=/140x186/2974/29745a27fd2842c3be8a6b389b9c5b24.jpg",
                    "get_img_permalink_large": "https://images.offerup.com/Y-5LauCEsQCppIxwu5pCtxGmuIg=/600x800/2974/29745a27fd2842c3be8a6b389b9c5b24.jpg",
                    "price": "250.00",
                    "generic_attributes": null,
                    "visible": true
                },
                "tile_id": "c73d9430-8c92-4636-aece-2222ea6b3a15"
            }
        ],
        "feed_options": [
            {
                "position": "location",
                "type": "slider",
                "name": "radius",
                "label": "DISTANCE",
                "label_short": "US",
                "query_param": "radius",
                "options": [
                    {
                        "label": "5 miles",
                        "label_short": "5 mi",
                        "value": "5"
                    },
                    {
                        "label": "10 miles",
                        "label_short": "10 mi",
                        "value": "10"
                    },
                    {
                        "label": "20 miles",
                        "label_short": "20 mi",
                        "value": "20"
                    },
                    {
                        "label": "30 miles",
                        "label_short": "30 mi",
                        "value": "30"
                    },
                    {
                        "label": "Maximum",
                        "label_short": "Max",
                        "value": "50",
                        "selected": true,
                        "default": true
                    }
                ]
            },
            {
                "position": "global",
                "type": "single_select",
                "name": "sort",
                "label": "Sort",
                "label_short": "Closest first",
                "query_param": "sort",
                "options": [
                    {
                        "label": "Newest",
                        "label_short": "Newest first",
                        "value": "-posted",
                        "default": true
                    },
                    {
                        "label": "Closest",
                        "label_short": "Closest first",
                        "value": "distance",
                        "selected": true
                    },
                    {
                        "label": "Price: Low to high",
                        "label_short": "Price: Low to high",
                        "value": "price"
                    },
                    {
                        "label": "Price: High to low",
                        "label_short": "Price: High to low",
                        "value": "-price"
                    }
                ]
            },
            {
                "position": "global",
                "type": "numeric_range",
                "name": "price",
                "label": "Price: $250 - $300",
                "label_short": "Price: $250 - $300",
                "units": "$",
                "left_query_param": "price_min",
                "right_query_param": "price_max",
                "options": [
                    {
                        "label": "Minimum Price",
                        "text_hint": "Min",
                        "value": "250"
                    },
                    {
                        "label": "Maximum Price",
                        "text_hint": "Max",
                        "value": "300"
                    }
                ]
            },
            {
                "position": "global",
                "type": "multi_select",
                "name": "delivery_param",
                "label": "Delivery",
                "label_short": "Pick up",
                "query_param": "delivery_param",
                "options": [
                    {
                        "label": "Pick up",
                        "value": "p",
                        "selected": true
                    },
                    {
                        "label": "Shipping",
                        "value": "s",
                        "selected": false
                    }
                ]
            }
        ],
        "next_page_cursor": "eyJpbmRleCI6MSwic2VhcmNoX2FmdGVyIjowLjM0MzUyNjQ3MjU4NTgzOTEsImN1cnNvcl9pZCI6MTE5NTI1NDcwLCJmYW5vdXRfY291bnQiOjAsInNraXBwZWRBZHMiOjB9",
        "search_alert": {
            "alert_status": "UNAVAILABLE"
        },
        "query": "",
        "feed_title": "Search everything",
        "shipping_filter": {
            "shipping_only_filter_enabled": true,
            "shipping_only_filter_applied": false,
            "intersperse_filter_applied": false
        },
        "operation_context": "eyJzZXNzaW9uX2lkIjogImM2MDhkYjQ2LWU5ZjYtNDNhZS05YzJhLTFkNmYwM2Q5ZmVkZCIsICJzZXNzaW9uX3R5cGUiOiAidXNlcl9vcGVuIiwgInNjcmVlbl9zb3VyY2VfaWQiOiAic3JjaDQ4Y2QzZTNjNDYxNzQwNTViODdiYTQ5ZWZkZjA2NTE0IiwgInNjcmVlbl9zb3VyY2VfdHlwZSI6ICJTRUFSQ0hfRkVFRF9DQVRFR09SWSJ9"
    }
}
```