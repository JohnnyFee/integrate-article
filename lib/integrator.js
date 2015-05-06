/**
 * Created by Johnny on 2015/5/6.
 */
'use strict';

var grabber = require('./grabber');
var cheerio = require('cheerio');

exports.integrate = function (url, callback) {
  grabber.grab(url, function (data) {
    var $ = cheerio.load(data);
    $('.spaceborder table td').each(function (index, element) {
      console.log($(this).html());
    });

    callback();
  });
};
