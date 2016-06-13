/**
 * CNSX
 *
 * Main entry 
 *
 * @date        05 June 2016
 * @author      gpresland
 *
 */

'use strict';

/**
 * Base URL for 
 * @type {String}
 */
const URL_CHART = 'http://thecse.com/mssql/get/CNSX/chart/';

/**
 * Base URL for depth
 * @type {String}
 */
const URL_DEPTH = 'http://thecse.com/mssql/get/CNSX/dept/';

/**
 * Base URL for depth price
 * @type {String}
 */
const URL_DEPTH_PRICE = 'http://thecse.com/mssql/get/CNSX/depth-price/';

/**
 * Base URL for last closing data
 * @type {String}
 */
const URL_HISTORIES = 'http://thecse.com/mssql/get/CNSX/histories/';

/**
 * Base URL for stock listings
 * @type {String}
 */
const URL_LISTINGS = 'http://thecse.com/sites/default/files/documents/activity_summaries/CSE_Listed/CSE%20Stock%20List.xls;'

/**
 * Base URL for last 25 trades
 * @type {String}
 */
const URL_LAST_TRADES = 'http://thecse.com/mssql/get/CNSX/lasttrade/';

/**
 * Base URL for quotes
 * @type {String}
 */
const URL_QUOTE = 'http://thecse.com/cmsAssets/CustomUserControls/UserModules/CNSX_Securities/WCF/WCF_CNSX.svc/GetStockQuote/?Therefore-func=True&SymbolName=';


const Promise = require('bluebird');
const request = require('request');


module.exports = {
  /**
   * Gets historical charting data for a symbol
   *
   * @param  {String}    symbol    The symbol to get data for
   * @param  {Function}  callback  [OPTIONAL] alternative callback to promise
   * @return {Promise}
   */
  getChart: function (symbol, callback) {
    return new Promise((resolve, reject) => {
      request({
        method: 'GET',
        url: `${URL_CHART}${symbol}`,
        headers: {
          'accept-encoding': 'gzip, deflate, sdch',
          'user-agent': 'npm-cnsx',
          'cache-control': 'max-age=0',
          'content-type': 'application/json'
        },
        json: true
      }, (err, res, body) => {
        this._clean(body);
        typeof callback === 'function' && callback(err, body);
        if (err) return reject(err);
        (res.statusCode === 200) ? resolve(body): reject(new Error(res.statusCode));
      });
    });
  },

  /**
   * Gets bids/asks by broker
   *
   * @param  {String}    symbol    The symbol to get data for
   * @param  {Function}  callback  [OPTIONAL] alternative callback to promise
   * @return {Promise}
   */
  getDepth: function (symbol, callback) {
    return new Promise((resolve, reject) => {
      request({
        method: 'GET',
        url: `${URL_DEPTH}${symbol}`,
        headers: {
          'accept-encoding': 'gzip, deflate, sdch',
          'user-agent': 'npm-cnsx',
          'cache-control': 'max-age=0',
          'content-type': 'application/json'
        },
        json: true
      }, (err, res, body) => {
        this._clean(body);
        typeof callback === 'function' && callback(err, body);
        if (err) return reject(err);
        (res.statusCode === 200) ? resolve(body): reject(new Error(res.statusCode));
      });
    });
  },

  /**
   * Gets bids/asks by price
   *
   * @param  {String}    symbol    The symbol to get data for
   * @param  {Function}  callback  [OPTIONAL] alternative callback to promise
   * @return {Promise}
   */
  getDepthPrice: function (symbol, callback) {
    return new Promise((resolve, reject) => {
      request({
        method: 'GET',
        url: `${URL_DEPTH_PRICE}${symbol}`,
        headers: {
          'accept-encoding': 'gzip, deflate, sdch',
          'user-agent': 'npm-cnsx',
          'cache-control': 'max-age=0',
          'content-type': 'application/json'
        },
        json: true
      }, (err, res, body) => {
        this._clean(body);
        typeof callback === 'function' && callback(err, body);
        if (err) return reject(err);
        (res.statusCode === 200) ? resolve(body): reject(new Error(res.statusCode));
      });
    });
  },

  /**
   * Gets information for the last closing
   *
   * @param  {String}    symbol    The symbol to get data for
   * @param  {Function}  callback  [OPTIONAL] alternative callback to promise
   * @return {Promise}
   */
  getHistory: function (symbol, callback) {
    return new Promise((resolve, reject) => {
      request({
        method: 'GET',
        url: `${URL_HISTORIES}${symbol}`,
        headers: {
          'accept-encoding': 'gzip, deflate, sdch',
          'user-agent': 'npm-cnsx',
          'cache-control': 'max-age=0',
          'content-type': 'application/json'
        },
        json: true
      }, (err, res, body) => {
        this._clean(body);
        typeof callback === 'function' && callback(err, body);
        if (err) return reject(err);
        (res.statusCode === 200) ? resolve(body): reject(new Error(res.statusCode));
      });
    });
  },

  /**
   * 
   *
   * @param  {String}    symbol    The symbol to get data for
   * @param  {Function}  callback  [OPTIONAL] alternative callback to promise
   * @return {Promise}
   */
  getListings: function (callback) {
    throw new Error('E_NOT_YET_IMPLEMENTED');
    // return new Promise((resolve, reject) => {
    //   request({
    //     method: 'GET',
    //     url: `${URL_LISTINGS}`,
    //     headers: {
    //       'accept-encoding': 'gzip, deflate, sdch',
    //       'user-agent': 'npm-cnsx',
    //       'cache-control': 'max-age=0',
    //       'content-type': 'application/json'
    //     }
    //   }, (err, res, body) => {
    //     typeof callback === 'function' && callback(err, body);
    //     if (err) return reject(err);
    //     (res.statusCode === 200) ? resolve(body): reject(new Error(res.statusCode));
    //   });
    // });
  },

  /**
   * Gets last 25 trades
   *
   * @param  {String}    symbol    The symbol to get data for
   * @param  {Function}  callback  [OPTIONAL] alternative callback to promise
   * @return {Promise}
   */
  getLastTrades: function (symbol, callback) {
    return new Promise((resolve, reject) => {
      request({
        method: 'GET',
        url: `${URL_LAST_TRADES}${symbol}`,
        headers: {
          'accept-encoding': 'gzip, deflate, sdch',
          'user-agent': 'npm-cnsx',
          'cache-control': 'max-age=0',
          'content-type': 'application/json'
        },
        json: true
      }, (err, res, body) => {
        this._clean(body);
        typeof callback === 'function' && callback(err, body);
        if (err) return reject(err);
        (res.statusCode === 200) ? resolve(body): reject(new Error(res.statusCode));
      });
    });
  },

  /**
   * Gets a market quotes
   *
   * @param  {String}    symbol    The symbol to get data for
   * @param  {Function}  callback  [OPTIONAL] alternative callback to promise
   * @return {Promise}
   */
  getQuote: function (symbol, callback) {
    return new Promise((resolve, reject) => {
      request({
        method: 'GET',
        url: `${URL_QUOTE}${symbol}`,
        headers: {
          'accept-encoding': 'gzip, deflate, sdch',
          'user-agent': 'npm-cnsx',
          'cache-control': 'max-age=0',
          'content-type': 'application/json'
        },
        json: true
      }, (err, res, body) => {
        this._clean(body);
        typeof callback === 'function' && callback(err, body);
        if (err) return reject(err);
        (res.statusCode === 200) ? resolve(body): reject(new Error(res.statusCode));
      });
    });
  },

  /**
   * Clean up dirty JSON
   *
   * @param  {Object}   data  The data to clean up
   * @return {Promise}
   */
  _clean: function (data) {
    if (Array.isArray(data)) {
      data.forEach((o) => this._cleanSingle(o));
    } else if (typeof data === 'object') {
      this._cleanSingle(data);
    }
  },

  /**
   * Cleans up an object
   *
   * @param  {Object}  data  the data up to clean
   */
  _cleanSingle: function (data) {
    for (let key in data) {
      switch (key) {
      case 'classification':
        data[key] = data[key].trim();
        break;
      case 'exchange':
        data[key] = data[key].trim();
        break;
      case 'listingmarket':
        data[key] = data[key].trim();
        break;
      case 'markers':
        data[key] = data[key].trim();
        break;
      case 'quotetimestamp':
        data[key] = +data[key].trim();
        break;
      case 'sequencenumber':
        data[key] = +data[key].trim();
        break;
      case 'symbol':
        data[key] = data[key].trim();
        break;
      case 'tradetimestamp':
        data[key] = +data[key].trim();
        break;
      }
    }
  }
};
