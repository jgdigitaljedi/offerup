# getCategories()


**Fields**: _No_


**Authentication**: _No_


**Request**:

```ts
const OfferUp = require('offerup');

(async() => {
    const offerUp = OfferUp();

    let response = await offerUp.getCategories();
})();
```


**Response**:

```ts
{
    "data": {
        "total": 37,
        "categories": [
            {
                "bump_sku_ios": null,
                "id": 6,
                "bump_sku_android": null,
                "name": "Antiques"
            },
            {
                "bump_sku_ios": null,
                "id": 7,
                "bump_sku_android": null,
                "name": "Appliances"
            },
            {
                "bump_sku_ios": null,
                "id": 8,
                "bump_sku_android": null,
                "name": "Arts & Crafts"
            },
            {
                "bump_sku_ios": null,
                "id": 9,
                "bump_sku_android": null,
                "name": "Audio Equipment"
            },
            {
                "bump_sku_ios": null,
                "id": 11,
                "bump_sku_android": null,
                "name": "Auto Parts"
            },
            {
                "bump_sku_ios": null,
                "id": 12,
                "bump_sku_android": null,
                "name": "Baby & Kids"
            },
            {
                "bump_sku_ios": null,
                "id": 13,
                "bump_sku_android": null,
                "name": "Beauty & Health"
            },
            {
                "bump_sku_ios": null,
                "id": 14,
                "bump_sku_android": null,
                "name": "Bicycles"
            },
            {
                "bump_sku_ios": "com.offerup.iphone.consumer.bump07,com.offerup.iphone.consumer.bump05",
                "id": 15,
                "bump_sku_android": "com.offerup.iab.bump.optionfour,com.offerup.iab.bump.optiontwo,3.99,50",
                "name": "Boats & Marine"
            },
            {
                "bump_sku_ios": null,
                "id": 16,
                "bump_sku_android": null,
                "name": "Books & Magazines"
            },
            {
                "bump_sku_ios": null,
                "id": 17,
                "bump_sku_android": null,
                "name": "Business Equipment"
            },
            {
                "bump_sku_ios": "com.offerup.iphone.consumer.bump07,com.offerup.iphone.consumer.bump05",
                "id": 18,
                "bump_sku_android": "com.offerup.iab.bump.optionfour,com.offerup.iab.bump.optiontwo,3.99,50",
                "name": "Campers & RVs"
            },
            {
                "bump_sku_ios": "com.offerup.iphone.consumer.bump07,com.offerup.iphone.consumer.bump05",
                "id": 19,
                "bump_sku_android": "com.offerup.iab.bump.optionfour,com.offerup.iab.bump.optiontwo,3.99,50",
                "name": "Cars & Trucks"
            },
            {
                "bump_sku_ios": null,
                "id": 10,
                "bump_sku_android": null,
                "name": "CDs & DVDs"
            },
            {
                "bump_sku_ios": null,
                "id": 20,
                "bump_sku_android": null,
                "name": "Cell Phones"
            },
            {
                "bump_sku_ios": null,
                "id": 5,
                "bump_sku_android": null,
                "name": "Clothing & Shoes"
            },
            {
                "bump_sku_ios": null,
                "id": 21,
                "bump_sku_android": null,
                "name": "Collectibles"
            },
            {
                "bump_sku_ios": null,
                "id": 22,
                "bump_sku_android": null,
                "name": "Computer Equipment"
            },
            {
                "bump_sku_ios": null,
                "id": 23,
                "bump_sku_android": null,
                "name": "Computer Software"
            },
            {
                "bump_sku_ios": null,
                "id": 1,
                "bump_sku_android": null,
                "name": "Electronics"
            },
            {
                "bump_sku_ios": null,
                "id": 24,
                "bump_sku_android": null,
                "name": "Farming"
            },
            {
                "bump_sku_ios": null,
                "id": 4,
                "bump_sku_android": null,
                "name": "Furniture"
            },
            {
                "bump_sku_ios": null,
                "id": 25,
                "bump_sku_android": null,
                "name": "Games & Toys"
            },
            {
                "bump_sku_ios": null,
                "id": 3,
                "bump_sku_android": null,
                "name": "General"
            },
            {
                "bump_sku_ios": null,
                "id": 26,
                "bump_sku_android": null,
                "name": "Home & Garden"
            },
            {
                "bump_sku_ios": null,
                "id": 2,
                "bump_sku_android": null,
                "name": "Household"
            },
            {
                "bump_sku_ios": null,
                "id": 27,
                "bump_sku_android": null,
                "name": "Jewelry & Accessories"
            },
            {
                "bump_sku_ios": "com.offerup.iphone.consumer.bump07,com.offerup.iphone.consumer.bump05",
                "id": 29,
                "bump_sku_android": "com.offerup.iab.bump.optionfour,com.offerup.iab.bump.optiontwo,3.99,50",
                "name": "Motorcycles"
            },
            {
                "bump_sku_ios": null,
                "id": 30,
                "bump_sku_android": null,
                "name": "Musical Instruments"
            },
            {
                "bump_sku_ios": null,
                "id": 39,
                "bump_sku_android": null,
                "name": "Pet Supplies"
            },
            {
                "bump_sku_ios": null,
                "id": 32,
                "bump_sku_android": null,
                "name": "Photography"
            },
            {
                "bump_sku_ios": null,
                "id": 31,
                "bump_sku_android": null,
                "name": "Sports & Outdoors"
            },
            {
                "bump_sku_ios": null,
                "id": 33,
                "bump_sku_android": null,
                "name": "Tickets"
            },
            {
                "bump_sku_ios": null,
                "id": 34,
                "bump_sku_android": null,
                "name": "Tools & Machinery"
            },
            {
                "bump_sku_ios": null,
                "id": 38,
                "bump_sku_android": null,
                "name": "TVs"
            },
            {
                "bump_sku_ios": null,
                "id": 37,
                "bump_sku_android": null,
                "name": "Video Equipment"
            },
            {
                "bump_sku_ios": null,
                "id": 35,
                "bump_sku_android": null,
                "name": "Video Games"
            }
        ]
    }
}
```