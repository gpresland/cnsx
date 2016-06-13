'use strict';

const assert = require('chai').assert;

/**
 * Symbol for our testing
 * @type {String}
 */
const SYMBOL = 'SL';

const cnsx = require('../');

describe('CNSX', function () {

  // Set long timeout since data is big
  this.timeout(5000);

  it('Should get chart data', function (done) {
    cnsx.getChart(SYMBOL)
      .then((data) => {
        assert.isArray(data);
        done();
      })
      .catch((err) => done(err));
  });

  it('Should get bids/asks by broker', function (done) {
    cnsx.getDepth(SYMBOL)
      .then((data) => {
        assert.isObject(data);
        done();
      })
      .catch((err) => done(err));
  });

  it('Should get bids/asks by volume', function (done) {
    cnsx.getDepthPrice(SYMBOL)
      .then((data) => {
        assert.isObject(data);
        done();
      })
      .catch((err) => done(err));
  });

  it('Should get bids/asks by volume', function (done) {
    cnsx.getHistory(SYMBOL)
      .then((data) => {
        assert.isArray(data);
        done();
      })
      .catch((err) => done(err));
  });

  it('Should get last 25 trades', function (done) {
    cnsx.getLastTrades(SYMBOL)
      .then((data) => {
        assert.isArray(data);
        done();
      })
      .catch((err) => done(err));
  });

  it('Should get market quote', function (done) {
    cnsx.getQuote(SYMBOL)
      .then((data) => {
        assert.isObject(data);
        done();
      })
      .catch((err) => done(err));
  });
});
