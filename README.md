# CNSX

## What is it?

CNSX is an unofficial node package for quering data from the CSE (Canadian Securities Exchange).
You can manually view stock information at http://thecse.com/.


## Usage

```
const cnsx = require('cnsx');

// With a promise
cnsx.getChart('1')
  .then((data) => {
    console.log(data);
  });

// With a callback
cnsx.getChart('1', (err, data) => {
  console.log(data);
});
```


## Documentation

##### Methods

- ()
  - Creates a new CNSX instance.
- getChart
  - Gets historical charting data for a symbol
  - **Parameters**
    - `String`: The symbol to get data for.
    - `Function`: [OPTIONAL] alternative callback to use instead of the promise returned.
- getDepth
  - Gets bids/asks by broker.
  - **Parameters**
    - `String`: The symbol to get data for.
    - `Function`: [OPTIONAL] alternative callback to use instead of the promise returned.
- getDepthPrice
  - Gets bids/asks by price.
  - **Parameters**
    - `String`: The symbol to get data for.
    - `Function`: [OPTIONAL] alternative callback to use instead of the promise returned.
- getHistory
  - Gets information for the last closing.
  - **Parameters**
    - `String`: The symbol to get data for.
    - `Function`: [OPTIONAL] alternative callback to use instead of the promise returned.
- getListing
  - Gets stock symbols listed on the exchange.
  - **Parameters**
    - `Function`: [OPTIONAL] alternative callback to use instead of the promise returned.
- getLastTrades
  - Gets the last 25 trades.
  - **Parameters**
    - `String`: The symbol to get data for.
    - `Function`: [OPTIONAL] alternative callback to use instead of the promise returned.
- getQuote
  - Gets a market quotes
  - **Parameters**
    - `String`: The symbol to get data for.
    - `Function`: [OPTIONAL] alternative callback to use instead of the promise returned.


## Tests

Install `npm mocha` either locally or globally and run `mocha tests`.
