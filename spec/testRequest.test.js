const testRequest = require("./testRequest");

test("makes a request and returns a response", async () => {
  expect.assertions(1);
  await testRequest
    .goodRequest()
    .then(result => {
      expect(Array.isArray(result)).toBeTruthy();
    })
    .catch(err => {
      expect(1).toEqual(2); // just forcing failure because it should not get to this
    });
});

test("handles query with no results without crashing node", async () => {
  expect.assertions(1);
  await testRequest
    .badRequest()
    .then(result => {
      console.log("instead of a thrown error you get an empty array", result);
      expect(Array.isArray(result)).toBeTruthy();
    })
    .catch(err => {
      expect(1).toEqual(2); // just forcing failure because it should not get to this
    });
});
