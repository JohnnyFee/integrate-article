/**
 * Created by Johnny on 2015/5/6.
 */
'use strict';

var grabber = require('./grabber');
var cheerio = require('cheerio');

var Remarkable = require('remarkable');
var md = new Remarkable();


exports.integrate = function (url, callback) {
  grabber.grab(url, function (data) {
    var $ = cheerio.load(data);
    $('.maintable form div.spaceborder > table').each(function (index, element) {
      var sections = $(this).children('tr').children('td');
      var author = $(sections[0]).find('a[name=pid56892103]');
      if (author.length > 0) {
        //  作者为鱼骨
        var content = $(sections[1]).;
        console.log(sections.html());

      }
    });

    callback();
  });
};
