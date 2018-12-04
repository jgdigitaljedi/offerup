# OfferUp 2.0

The unofficial OfferUp API client 2.0

OfferUp 1.0 has become depracated due to changing API endpoints on OfferUp side and installing CloudFlare Firewall.

OfferUp 2.0 allows you to use more methods, such as: [authorize()](docs/authorize.md), [getMyProfile()](docs/getMyProfile.md), [getUserRelation()](docs/getUserRelation.md), [offerPrice()](docs/offerPrice.md). **Your move, OfferUp.**

> Note: OfferUp doesn't provide an API. So this lib should only be used for personal fun.

## Install

```bash
npm install offerup --save
```
## Usage

- [Request and response examples are here](docs/search.md)

```ts
// Searching

(async() => {
    const OfferUp = require('offerup');

    const offerUp = OfferUp();

    let response = await offerUp.search({
        q: 'iphone',
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

## Public Methods
**Authorization isn't required**

### authorize('email', 'password') 

Authorize in order to use personal methods

- [Request and response examples are here](docs/authorize.md)

```ts
(async() => {
    const OfferUp = require('offerup');

    const offerUp = OfferUp();

    let response = await offerUp.authorize('email', 'password');
})();
```

### getItem(itemid) 

Get item information

- [Request and response examples are here](docs/getItem.md)

```ts
(async() => {
    const OfferUp = require('offerup');

    const offerUp = OfferUp();

    let response = await offerUp.getItem(589211682);
})();
```

### getLists() 

Get all lists

- [Request and response examples are here](docs/getLists.md)

```ts
(async() => {
    const OfferUp = require('offerup');

    const offerUp = OfferUp();

    let response = await offerUp.getLists();
})();
```

### getCategories() 

Get all categories

- [Request and response examples are here](docs/getCategories.md)

```ts
(async() => {
    const OfferUp = require('offerup');

    const offerUp = OfferUp();

    let response = await offerUp.getCategories();
})();

```

### getUser(userid) 

Get user information

- [Request and response examples are here](docs/getUser.md)

```ts
(async() => {
    const OfferUp = require('offerup');

    const offerUp = OfferUp();

    let response = await offerUp.getUser(49580761);
})();
```

## Private Methods
**Authorization required**

### getMyProfile() 

Get current profile's personal information

- [Request and response examples are here](docs/getMyProfile.md)

```ts
(async() => {
    const OfferUp = require('offerup');

    const offerUp = OfferUp();

    // Authorization
    await offerUp.authorize('email', 'password');

    let response = await offerUp.getMyProfile();
})();
```

### offerPrice(itemid, price) 

Creates new price offer for the <mark>itemid</mark> with price <mark>price</mark>

- [Request and response examples are here](docs/offerPrice.md)


```ts
(async() => {
    const OfferUp = require('offerup');

    const offerUp = OfferUp();

    // Authorization
    await offerUp.authorize('email', 'password');

    let response = await offerUp.offerPrice(591216884, 200);
})();
```

### getAccountPayment() 

- [Request and response examples are here](docs/getAccountPayment.md)

```ts
(async() => {
    const OfferUp = require('offerup');

    const offerUp = OfferUp();

    // Authorization
    await offerUp.authorize('email', 'password');

    let response = await offerUp.getAccountPayment();
})();
```

### getAccountPaymentHistory() 

Get current profile's payment history information

- [Request and response examples are here](docs/getAccountPaymentHistory.md)

```ts
(async() => {
    const OfferUp = require('offerup');

    const offerUp = OfferUp();

    // Authorization
    await offerUp.authorize('email', 'password');

    let response = await offerUp.getAccountPaymentHistory();
})();
```

### getBoardsList() 

Get all saved boards

- [Request and response examples are here](docs/getBoardsList.md)

```ts
(async() => {
    const OfferUp = require('offerup');

    const offerUp = OfferUp();

    // Authorization
    await offerUp.authorize('email', 'password');

    let response = await offerUp.getBoardsList();
})();
```

### getUserRelation(userid) 

Get relationship information between current account and <mark>userid</mark>

- [Request and response examples are here](docs/getUserRelation.md)

```ts
(async() => {
    const OfferUp = require('offerup');

    const offerUp = OfferUp();

    // Authorization
    await offerUp.authorize('email', 'password');

    let response = await offerUp.getUserRelation(49580723);
})();
```