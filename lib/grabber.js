/**
 * Created by Johnny on 2015/5/6.
 */
'use strict';

var nodegrass = require('nodegrass');

exports.grab = function (url, callback) {
  nodegrass.get(url, function (data, status, headers) {
    callback(data);
  }, 'gbk').on('error', function (e) {
    console.log('Got error: ' + e.message);
    callback(null);
  });
};

