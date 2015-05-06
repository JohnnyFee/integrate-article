/**
 * Created by Johnny on 2015/5/6.
 */
'use strict';

var http = require('http');

exports.grab = function (url, callback) {
  http.get(url, function (res) {
    var data = '';

    res.on('data', function (chunk) {
      data += chunk;
    });

    res.on('end', function () {
      callback(data);
    });

  }).on('error', function () {
    callback(null);
  });
};

