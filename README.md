# offerup

The unofficial OfferUp API client.

> Note: OfferUp doesn't provide an API. So this lib should only be used for personal fun.

## Install

```bash
npm install offerup
```
## Usage

```js
var offerup = require('offerup');

// Get your list by Query
offerup.getFullListByQuery({
    location: 'Chicago', // required
    search: 'iphone', // required
    radius: 50,
    limit: 100,
    price_min: 100,
    price_max: 1000
    }).then(function success(response){

        /*
        Output
            [
                {
                    id: 469543577,
                    category: { 
                        id: 20, 
                        name: 'Cell Phones' 
                    },
                    location_name: 'Chicago, IL',
                    title: 'Cracked iPhone 7 32 GB unlocked for any company',
                    post_date_ago: '1 minute',
                    get_full_url: 'https://offerup.com/item/detail/469543577/',
                    priority: 100,
                    state: 3,
                    longitude: -87.7754,
                    latitude: 41.9211,
                    sort_label: 'Items near Chicago',
                    description: 'Unlocked for any company. Cracked screen everything works perfectly. Drop off is a extra $15 '
                },
                ...
            ]
        */

    }, function error(response){
        console.log(response);
    });
```

* See the [full getFullListByQuery() docs](docs/getFullListByQuery.md) for the list of all possible modules and the data they return.

## Methods

### setGoogleMapApi('api_key') 
> Canceled since v.1.1.0

```js
// offerup.setGoogleMapApi('Your_Api_Key');
```

### setDefaults()

This data will be used if the query parameter is empty

```js
offerup.setDefaults({
    location: 'New York',
    radius: 30,
    limit: 1000,
    price_min: 100,
    price_max: 1000
});
```

### getUserProfile('user_id')

Allows you to get user information by user ID

```js
offerup.getUserProfile('112390').then(function(response){
    if(response && response.success == 'success'){
        console.log(response.data);
        /*
        Output
            { 
                success: 'success',
                data: { 
                        type: 'SELLER',
                        name: 'calvin',
                        member_since: 'March, 2014',
                        reviews: '1',
                        location: 'VANCOUVER, WA',
                        followers: '8',
                        items: [
                            { 
                                id: '392556488',
                                title: 'Shirt',
                                img_src: 'https://d2j6tswx2otu6e.cloudfront.net/0qdf73oL5yfun8RBLcnUyoj2upY=/200x267/d2c0/d2c0a133a6194e9da25266a8165c4e2a.jpg',
                                price: '5.00',
                                location: 'Elizabethton, TN',
                                link: 'https://offerup.com/item/detail/392556488/' 
                            }
                        ] 
                    } 
                }
            */
    }
}, function error(response){
    console.log(response);
});
```

### getItemInformation('item_id')

Allows you to get item information by item ID

```js
offerup.getItemInformation('393936205').then(function success(response){
    if(response && response.success == 'success'){
        console.log(response.data);
        /*
            Output
            {
                success: "success",
                data: { 
                    title: 'Data Recovery Services',
                    location: 'Decatur, GA',
                    posted_ago: 'Posted 3 hours ago',
                    description: 'Great condition hardly used has all pieces.',
                    condition: 'New (never used)',
                    price: '20',
                    owner: { 
                        id: '34629542', 
                        name: 'ProTech4O42876497' 
                    }
                }
            }
        */
    }
}, function error(response){
    console.log(response);
});
```