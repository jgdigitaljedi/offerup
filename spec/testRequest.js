const OfferUp = require("../index");

const testMethods = {
  goodRequest: function() {
    return new Promise((resolve, reject) => {
      OfferUp.getFullListByQuery({
        location: "Chicago", // required
        search: "iphone", // required
        radius: 50,
        limit: 100,
        price_min: 100,
        price_max: 1000
      })
        .then(function success(response) {
          resolve(response);
        })
        .catch(err => {
          reject(true);
        });
    });
  },
  badRequest: function() {
    return new Promise((resolve, reject) => {
      OfferUp.getFullListByQuery({
        location: "Chicago", // required
        search: "bjibiuuiJDbu", // required
        radius: 50,
        limit: 100,
        price_min: 100,
        price_max: 1000
      })
        .then(function success(response) {
          resolve(response);
        })
        .catch(err => {
          reject(true);
        });
    });
  }
};

module.exports = testMethods;

/***
 * WRITTEN TO FIX THIS BUG THAT WOULD CRASH NODE IF A RESULT DIDN'T RETURN RESULTS: 
 * SyntaxError: Unexpected token u in JSON at position 0
        at JSON.parse (<anonymous>)

      321 |                 
      322 |                 if(k < query.limit){
        > 323 |                     var s = JSON.parse(r.data.next_page_cursor);
              |                                  ^
          324 |                     query.search_after = s.search_after;
          325 |                     query.cursor_id = s.cursor_id;
          326 |                     q.push(query)
    
          at Request.parse [as _rp_callbackOrig] (index.js:323:34)
          at Request.plumbing.callback (node_modules/request-promise-core/lib/plumbing.js:76:39)
          at Request.RP$callback [as _callback] (node_modules/request-promise-core/lib/plumbing.js:46:31)
          at Request.self.callback (node_modules/request/request.js:185:22)
          at Request.<anonymous> (node_modules/request/request.js:1161:10)
          at IncomingMessage.<anonymous> (node_modules/request/request.js:1083:12)
 * */
