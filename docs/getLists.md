# getLists

**Fields**: <mark>No</mark>

**Authentication**: <mark>No</mark>

**Request**:

```ts
(async() => {
    const OfferUp = require('offerup');

    const offerUp = OfferUp();

    let response = await offerUp.getLists();
})();
```

**Response**:

```ts
{
    "data": {
        "item_lists": [
            {
                "sort": 100,
                "user_required": 0,
                "image_square_url": "https://static.offerup.com/list/89980_square.jpg",
                "description": "",
                "image_medium_height": 208,
                "image_medium_url": "https://static.offerup.com/list/89980_medium.jpg",
                "parsed_query": {
                    "radius": 50,
                    "priority_max": 1000,
                    "order_by": "-posted",
                    "sort_label_override": "Everything",
                    "max_price": 999000
                },
                "image_medium_width": 300,
                "id": 37,
                "name": "Search everything"
            },
            {
                "sort": 200,
                "user_required": 0,
                "image_square_url": "https://static.offerup.com/list/13235_square.jpg",
                "description": "",
                "image_medium_height": 208,
                "image_medium_url": "https://static.offerup.com/list/13235_medium.jpg",
                "parsed_query": {
                    "priority_max": 100,
                    "order_by": "-posted",
                    "sort_label_override": "Popular",
                    "max_price": 999000
                },
                "image_medium_width": 300,
                "id": 1,
                "name": "Popular near me"
            },
            {
                "sort": 300,
                "user_required": 1,
                "image_square_url": "https://static.offerup.com/list/66866_square.jpg",
                "description": "",
                "image_medium_height": 208,
                "image_medium_url": "https://static.offerup.com/list/66866_medium.jpg",
                "parsed_query": {
                    "following_only": true,
                    "order_by": "-posted",
                    "max_price": 999000,
                    "remove_location_from_sort_label": true,
                    "priority_max": 1000
                },
                "image_medium_width": 300,
                "id": 24,
                "name": "From people I follow"
            },
            {
                "sort": 350,
                "user_required": 0,
                "image_square_url": "https://static.offerup.com/list/34545_square.jpg",
                "description": "",
                "image_medium_height": 208,
                "image_medium_url": "https://static.offerup.com/list/34545_medium.jpg",
                "parsed_query": {
                    "querystring": "Christmas+sweater OR ugly+sweater OR Christmas OR candy+canes OR ornaments OR Xmas OR x-mas OR wreath OR tree+topper OR artificial+tree OR wrapping+paper OR holiday+decorations OR elves OR elf OR frosty OR north+pole OR mistletoe OR snowflakes OR reindeer OR Rudolph OR Santa+claus OR Poinsettia OR hanukkah OR menorah OR dreidel OR kwanzaa",
                    "always_show_user_items": true,
                    "show_sold_days": 0,
                    "priority_max": 1000
                },
                "image_medium_width": 300,
                "id": 26,
                "name": "Holiday"
            },
            {
                "sort": 400,
                "user_required": 0,
                "image_square_url": "https://static.offerup.com/list/98280_square.jpg",
                "description": "",
                "image_medium_height": 208,
                "image_medium_url": "https://static.offerup.com/list/98280_medium.jpg",
                "parsed_query": {
                    "category_id": 12,
                    "order_by": "-posted",
                    "max_price": 30000,
                    "priority_max": 1000
                },
                "image_medium_width": 300,
                "id": 2,
                "name": "Baby & kids"
            },
            {
                "sort": 500,
                "user_required": 0,
                "image_square_url": "https://static.offerup.com/list/96282_square.jpg",
                "description": "",
                "image_medium_height": 208,
                "image_medium_url": "https://static.offerup.com/list/96282_medium.jpg",
                "parsed_query": {
                    "category_id": 4,
                    "order_by": "-posted",
                    "max_price": 200000,
                    "priority_max": 1000
                },
                "image_medium_width": 300,
                "id": 7,
                "name": "Furniture"
            },
            {
                "sort": 600,
                "user_required": 0,
                "image_square_url": "https://static.offerup.com/list/53841_square.jpg",
                "description": "",
                "image_medium_height": 208,
                "image_medium_url": "https://static.offerup.com/list/53841_medium.jpg",
                "parsed_query": {
                    "category_id": 5,
                    "order_by": "-posted",
                    "max_price": 100000,
                    "priority_max": 1000
                },
                "image_medium_width": 300,
                "id": 5,
                "name": "Clothing & shoes"
            },
            {
                "sort": 700,
                "user_required": 0,
                "image_square_url": "https://static.offerup.com/list/84870_square.jpg",
                "description": "",
                "image_medium_height": 208,
                "image_medium_url": "https://static.offerup.com/list/84870_medium.jpg",
                "parsed_query": {
                    "category_id": 19,
                    "order_by": "-posted",
                    "max_price": 400000,
                    "priority_max": 1000
                },
                "image_medium_width": 300,
                "id": 30,
                "name": "Cars & trucks"
            },
            {
                "sort": 850,
                "user_required": 0,
                "image_square_url": "https://static.offerup.com/list/79261_square.jpg",
                "description": "",
                "image_medium_height": 208,
                "image_medium_url": "https://static.offerup.com/list/79261_medium.jpg",
                "parsed_query": {
                    "category_id": 2,
                    "order_by": "-posted",
                    "max_price": 999000,
                    "priority_max": 1000
                },
                "image_medium_width": 300,
                "id": 10,
                "name": "Household"
            },
            {
                "sort": 900,
                "user_required": 0,
                "image_square_url": "https://static.offerup.com/list/45198_square.jpg",
                "description": "",
                "image_medium_height": 208,
                "image_medium_url": "https://static.offerup.com/list/45198_medium.jpg",
                "parsed_query": {
                    "category_id": 20,
                    "order_by": "-posted",
                    "max_price": 160000,
                    "priority_max": 1000
                },
                "image_medium_width": 300,
                "id": 18,
                "name": "Cell phones"
            },
            {
                "sort": 1000,
                "user_required": 0,
                "image_square_url": "https://static.offerup.com/list/11790_square.jpg",
                "description": "",
                "image_medium_height": 208,
                "image_medium_url": "https://static.offerup.com/list/11790_medium.jpg",
                "parsed_query": {
                    "category_id": 1,
                    "order_by": "-posted",
                    "max_price": 200000,
                    "priority_max": 1000
                },
                "image_medium_width": 300,
                "id": 9,
                "name": "Electronics"
            },
            {
                "sort": 1050,
                "user_required": 0,
                "image_square_url": "https://static.offerup.com/list/82525_square.jpg",
                "description": "",
                "image_medium_height": 208,
                "image_medium_url": "https://static.offerup.com/list/82525_medium.jpg",
                "parsed_query": {
                    "category_id": 27,
                    "order_by": "-posted",
                    "max_price": 200000,
                    "priority_max": 1000
                },
                "image_medium_width": 300,
                "id": 8,
                "name": "Jewelry & accessories"
            },
            {
                "sort": 1100,
                "user_required": 0,
                "image_square_url": "https://static.offerup.com/list/94614_square.jpg",
                "description": "",
                "image_medium_height": 208,
                "image_medium_url": "https://static.offerup.com/list/94614_medium.jpg",
                "parsed_query": {
                    "category_id": 25,
                    "order_by": "-posted",
                    "max_price": 25000,
                    "priority_max": 1000
                },
                "image_medium_width": 300,
                "id": 11,
                "name": "Games & toys"
            },
            {
                "sort": 1200,
                "user_required": 0,
                "image_square_url": "https://static.offerup.com/list/46512_square.jpg",
                "description": "",
                "image_medium_height": 208,
                "image_medium_url": "https://static.offerup.com/list/46512_medium.jpg",
                "parsed_query": {
                    "category_id": 7,
                    "order_by": "-posted",
                    "max_price": 50000,
                    "priority_max": 1000
                },
                "image_medium_width": 300,
                "id": 17,
                "name": "Appliances"
            },
            {
                "sort": 1300,
                "user_required": 0,
                "image_square_url": "https://static.offerup.com/list/89940_square.jpg",
                "description": "",
                "image_medium_height": 208,
                "image_medium_url": "https://static.offerup.com/list/89940_medium.jpg",
                "parsed_query": {
                    "category_id": 21,
                    "order_by": "-posted",
                    "max_price": 100000,
                    "priority_max": 1000
                },
                "image_medium_width": 300,
                "id": 6,
                "name": "Collectibles"
            },
            {
                "sort": 1400,
                "user_required": 0,
                "image_square_url": "https://static.offerup.com/list/94606_square.jpg",
                "description": "",
                "image_medium_height": 208,
                "image_medium_url": "https://static.offerup.com/list/94606_medium.jpg",
                "parsed_query": {
                    "category_id": 6,
                    "order_by": "-posted",
                    "max_price": 50000,
                    "priority_max": 1000
                },
                "image_medium_width": 300,
                "id": 21,
                "name": "Antiques"
            },
            {
                "sort": 1500,
                "user_required": 0,
                "image_square_url": "https://static.offerup.com/list/18800_square.jpg",
                "description": "General category including buried items sorted by posted",
                "image_medium_height": 208,
                "image_medium_url": "https://static.offerup.com/list/18800_medium.jpg",
                "parsed_query": {
                    "category_id": 3,
                    "order_by": "-posted",
                    "max_price": 150000,
                    "priority_max": 1000
                },
                "image_medium_width": 300,
                "id": 40,
                "name": "General"
            },
            {
                "sort": 1600,
                "user_required": 0,
                "image_square_url": "https://static.offerup.com/list/36243_square.jpg",
                "description": "",
                "image_medium_height": 208,
                "image_medium_url": "https://static.offerup.com/list/36243_medium.jpg",
                "parsed_query": {
                    "category_id": 34,
                    "order_by": "-posted",
                    "max_price": 100000,
                    "priority_max": 1000
                },
                "image_medium_width": 300,
                "id": 27,
                "name": "Tools"
            },
            {
                "sort": 1700,
                "user_required": 0,
                "image_square_url": "https://static.offerup.com/list/53647_square.jpg",
                "description": "",
                "image_medium_height": 208,
                "image_medium_url": "https://static.offerup.com/list/53647_medium.jpg",
                "parsed_query": {
                    "category_id": 13,
                    "order_by": "-posted",
                    "max_price": 50000,
                    "priority_max": 1000
                },
                "image_medium_width": 300,
                "id": 14,
                "name": "Beauty & health"
            },
            {
                "sort": 1750,
                "user_required": 0,
                "image_square_url": "https://static.offerup.com/list/62634_square.jpg",
                "description": "",
                "image_medium_height": 208,
                "image_medium_url": "https://static.offerup.com/list/62634_medium.jpg",
                "parsed_query": {
                    "category_id": 15,
                    "max_price": 999000
                },
                "image_medium_width": 300,
                "id": 42,
                "name": "Boats & marine"
            },
            {
                "sort": 1800,
                "user_required": 0,
                "image_square_url": "https://static.offerup.com/list/52837_square.jpg",
                "description": "",
                "image_medium_height": 208,
                "image_medium_url": "https://static.offerup.com/list/52837_medium.jpg",
                "parsed_query": {
                    "category_id": 31,
                    "order_by": "-posted",
                    "max_price": 100000,
                    "priority_max": 1000
                },
                "image_medium_width": 300,
                "id": 3,
                "name": "Sports & outdoors"
            },
            {
                "sort": 1900,
                "user_required": 0,
                "image_square_url": "https://static.offerup.com/list/18753_square.jpg",
                "description": "",
                "image_medium_height": 208,
                "image_medium_url": "https://static.offerup.com/list/18753_medium.jpg",
                "parsed_query": {
                    "category_id": 8,
                    "order_by": "-posted",
                    "max_price": 40000,
                    "priority_max": 1000
                },
                "image_medium_width": 300,
                "id": 15,
                "name": "Arts & crafts"
            },
            {
                "sort": 2000,
                "user_required": 0,
                "image_square_url": "https://static.offerup.com/list/99770_square.jpg",
                "description": "",
                "image_medium_height": 208,
                "image_medium_url": "https://static.offerup.com/list/99770_medium.jpg",
                "parsed_query": {
                    "category_id": 38,
                    "order_by": "-posted",
                    "max_price": 20000,
                    "priority_max": 1000
                },
                "image_medium_width": 300,
                "id": 28,
                "name": "TVs"
            },
            {
                "sort": 2100,
                "user_required": 0,
                "image_square_url": "https://static.offerup.com/list/60066_square.jpg",
                "description": "",
                "image_medium_height": 208,
                "image_medium_url": "https://static.offerup.com/list/60066_medium.jpg",
                "parsed_query": {
                    "category_id": 26,
                    "order_by": "-posted",
                    "max_price": 999000,
                    "priority_max": 1000
                },
                "image_medium_width": 300,
                "id": 13,
                "name": "Home & garden"
            },
            {
                "sort": 2200,
                "user_required": 0,
                "image_square_url": "https://static.offerup.com/list/58990_square.jpg",
                "description": "",
                "image_medium_height": 208,
                "image_medium_url": "https://static.offerup.com/list/58990_medium.jpg",
                "parsed_query": {
                    "category_id": 10,
                    "order_by": "-posted",
                    "max_price": 28000,
                    "priority_max": 1000
                },
                "image_medium_width": 300,
                "id": 29,
                "name": "CDs & DVDs"
            },
            {
                "sort": 2300,
                "user_required": 0,
                "image_square_url": "https://static.offerup.com/list/63709_square.jpg",
                "description": "",
                "image_medium_height": 208,
                "image_medium_url": "https://static.offerup.com/list/63709_medium.jpg",
                "parsed_query": {
                    "category_id": 16,
                    "order_by": "-posted",
                    "max_price": 10000,
                    "priority_max": 1000
                },
                "image_medium_width": 300,
                "id": 20,
                "name": "Books & magazines"
            },
            {
                "sort": 2450,
                "user_required": 0,
                "image_square_url": "https://static.offerup.com/list/74060_square.jpg",
                "description": "",
                "image_medium_height": 208,
                "image_medium_url": "https://static.offerup.com/list/74060_medium.jpg",
                "parsed_query": {
                    "category_id": 29,
                    "max_price": 100000
                },
                "image_medium_width": 300,
                "id": 44,
                "name": "Motorcycles"
            },
            {
                "sort": 2500,
                "user_required": 0,
                "image_square_url": "https://static.offerup.com/list/89579_square.jpg",
                "description": "",
                "image_medium_height": 208,
                "image_medium_url": "https://static.offerup.com/list/89579_medium.jpg",
                "parsed_query": {
                    "category_id": 22,
                    "order_by": "-posted",
                    "max_price": 50000,
                    "priority_max": 1000
                },
                "image_medium_width": 300,
                "id": 22,
                "name": "Computer equipment"
            },
            {
                "sort": 2550,
                "user_required": 0,
                "image_square_url": "https://static.offerup.com/list/19324_square.jpg",
                "description": "",
                "image_medium_height": 208,
                "image_medium_url": "https://static.offerup.com/list/19324_medium.jpg",
                "parsed_query": {
                    "category_id": 23,
                    "max_price": 15000
                },
                "image_medium_width": 300,
                "id": 48,
                "name": "Software"
            },
            {
                "sort": 2600,
                "user_required": 0,
                "image_square_url": "https://static.offerup.com/list/10720_square.jpg",
                "description": "",
                "image_medium_height": 208,
                "image_medium_url": "https://static.offerup.com/list/10720_medium.jpg",
                "parsed_query": {
                    "category_id": 14,
                    "order_by": "-posted",
                    "max_price": 20000,
                    "priority_max": 1000
                },
                "image_medium_width": 300,
                "id": 23,
                "name": "Bicycles"
            },
            {
                "sort": 2700,
                "user_required": 0,
                "image_square_url": "https://static.offerup.com/list/37211_square.jpg",
                "description": "",
                "image_medium_height": 208,
                "image_medium_url": "https://static.offerup.com/list/37211_medium.jpg",
                "parsed_query": {
                    "category_id": 35,
                    "order_by": "-posted",
                    "max_price": 20000,
                    "priority_max": 1000
                },
                "image_medium_width": 300,
                "id": 31,
                "name": "Video games"
            },
            {
                "sort": 2800,
                "user_required": 0,
                "image_square_url": "https://static.offerup.com/list/63585_square.jpg",
                "description": "",
                "image_medium_height": 208,
                "image_medium_url": "https://static.offerup.com/list/63585_medium.jpg",
                "parsed_query": {
                    "category_id": 9,
                    "order_by": "-posted",
                    "max_price": 45000,
                    "priority_max": 1000
                },
                "image_medium_width": 300,
                "id": 32,
                "name": "Audio equipment "
            },
            {
                "sort": 2850,
                "user_required": 0,
                "image_square_url": "https://static.offerup.com/list/72886_square.jpg",
                "description": "",
                "image_medium_height": 208,
                "image_medium_url": "https://static.offerup.com/list/72886_medium.jpg",
                "parsed_query": {
                    "category_id": 37,
                    "max_price": 20000
                },
                "image_medium_width": 300,
                "id": 45,
                "name": "Video equipment"
            },
            {
                "sort": 2875,
                "user_required": 0,
                "image_square_url": "https://static.offerup.com/list/72355_square.jpg",
                "description": "",
                "image_medium_height": 208,
                "image_medium_url": "https://static.offerup.com/list/72355_medium.jpg",
                "parsed_query": {
                    "category_id": 32,
                    "max_price": 15000
                },
                "image_medium_width": 300,
                "id": 46,
                "name": "Photography"
            },
            {
                "sort": 2900,
                "user_required": 0,
                "image_square_url": "https://static.offerup.com/list/78260_square.jpg",
                "description": "",
                "image_medium_height": 208,
                "image_medium_url": "https://static.offerup.com/list/78260_medium.jpg",
                "parsed_query": {
                    "category_id": 11,
                    "order_by": "-posted",
                    "max_price": 60000,
                    "priority_max": 1000
                },
                "image_medium_width": 300,
                "id": 33,
                "name": "Auto parts"
            },
            {
                "sort": 3000,
                "user_required": 0,
                "image_square_url": "https://static.offerup.com/list/18107_square.jpg",
                "description": "",
                "image_medium_height": 208,
                "image_medium_url": "https://static.offerup.com/list/18107_medium.jpg",
                "parsed_query": {
                    "category_id": 30,
                    "order_by": "-posted",
                    "max_price": 100000,
                    "priority_max": 1000
                },
                "image_medium_width": 300,
                "id": 34,
                "name": "Musical instruments"
            },
            {
                "sort": 3100,
                "user_required": 0,
                "image_square_url": "https://static.offerup.com/list/96620_square.jpg",
                "description": "",
                "image_medium_height": 208,
                "image_medium_url": "https://static.offerup.com/list/96620_medium.jpg",
                "parsed_query": {
                    "category_id": 33,
                    "order_by": "-posted",
                    "max_price": 10000,
                    "priority_max": 1000
                },
                "image_medium_width": 300,
                "id": 36,
                "name": "Tickets"
            },
            {
                "sort": 3200,
                "user_required": 0,
                "image_square_url": "https://static.offerup.com/list/96687_square.jpg",
                "description": "",
                "image_medium_height": 208,
                "image_medium_url": "https://static.offerup.com/list/96687_medium.jpg",
                "parsed_query": {
                    "category_id": 39,
                    "order_by": "-posted",
                    "max_price": 10000,
                    "priority_max": 1000
                },
                "image_medium_width": 300,
                "id": 35,
                "name": "Pet supplies"
            },
            {
                "sort": 3225,
                "user_required": 0,
                "image_square_url": "https://static.offerup.com/list/9741_square.jpg",
                "description": "",
                "image_medium_height": 208,
                "image_medium_url": "https://static.offerup.com/list/9741_medium.jpg",
                "parsed_query": {
                    "category_id": 17,
                    "max_price": 60000
                },
                "image_medium_width": 300,
                "id": 47,
                "name": "Business equipment"
            },
            {
                "sort": 3300,
                "user_required": 0,
                "image_square_url": "https://static.offerup.com/list/41042_square.jpg",
                "description": "",
                "image_medium_height": 208,
                "image_medium_url": "https://static.offerup.com/list/41042_medium.jpg",
                "parsed_query": {
                    "querystring": "Wedding OR Bride OR Groom OR Bridesmaid",
                    "max_price": 999000,
                    "priority_max": 1000
                },
                "image_medium_width": 300,
                "id": 39,
                "name": "Wedding "
            },
            {
                "sort": 3375,
                "user_required": 0,
                "image_square_url": "https://static.offerup.com/list/34707_square.jpg",
                "description": "",
                "image_medium_height": 208,
                "image_medium_url": "https://static.offerup.com/list/34707_medium.jpg",
                "parsed_query": {
                    "category_id": 18,
                    "max_price": 200000
                },
                "image_medium_width": 300,
                "id": 43,
                "name": "Campers & RVs"
            },
            {
                "sort": 3400,
                "user_required": 0,
                "image_square_url": "https://static.offerup.com/list/42572_square.jpg",
                "description": "",
                "image_medium_height": 208,
                "image_medium_url": "https://static.offerup.com/list/42572_medium.jpg",
                "parsed_query": {
                    "order_by": "-posted",
                    "max_price": 999000,
                    "priority_max": 1000
                },
                "image_medium_width": 300,
                "id": 25,
                "name": "Everything near me"
            },
            {
                "sort": 10000,
                "user_required": 0,
                "image_square_url": "https://static.offerup.com/list/20224_square.jpg",
                "description": "",
                "image_medium_height": 208,
                "image_medium_url": "https://static.offerup.com/list/20224_medium.jpg",
                "parsed_query": {
                    "price_max": 0,
                    "order_by": "-posted",
                    "querystring": "Free",
                    "price_min": 0,
                    "show_sold_days": 0,
                    "sort_label_override": "Free",
                    "hide_price_sort": true,
                    "priority_max": 1000
                },
                "image_medium_width": 300,
                "id": 53,
                "name": "Free"
            },
            {
                "sort": 11000,
                "user_required": 0,
                "image_square_url": "https://static.offerup.com/list/51215_square.jpg",
                "description": "",
                "image_medium_height": 208,
                "image_medium_url": "https://static.offerup.com/list/51215_medium.jpg",
                "parsed_query": {
                    "querystring": "exercise OR workout OR water+bottle OR protein+shake OR treadmill OR tread+mill OR total+gym OR weider OR elliptical OR exercise+bike OR stair+stepper OR rower OR fitness+tracker OR fitbit OR blowflex OR power+tower OR weight+bench OR weights OR weight+lifting+gloves OR pull+up+bar OR boxing+gloves OR punching+bag OR jump+rope OR home+gym OR running+headphones OR yoga+mat OR dumbbells OR bosu OR ab+rocket",
                    "always_show_user_items": true,
                    "show_sold_days": 0,
                    "priority_max": 1000
                },
                "image_medium_width": 300,
                "id": 52,
                "name": "Exercise"
            }
        ],
        "total": 44
    }
}
```