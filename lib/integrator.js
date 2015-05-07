/**
 * Created by Johnny on 2015/5/6.
 */
'use strict';

var grabber = require('./grabber');
var cheerio = require('cheerio');
var toMarkdown = require('to-markdown');
var async = require('async');


exports.integrate = function (urls, callback) {
  var contents = '';

  async.eachSeries(urls, function (url, callback) {
    integrate(url, function (data) {
      contents += data;
      callback();
    });
  }, function (err) {
    callback(contents);
  })

};

function integrate(url, callback) {
  grabber.grab(url, function (data) {

    var $ = cheerio.load(data);
    var contents = '';

    $('.maintable form div.spaceborder > table').each(function (index, element) {
      var sections = $(this).children('tr').children('td');
      var author = $(sections[0]).find('a').text();

      //  作者为鱼骨
      if (author === '鱼骨') {
        var contentNode = ($(sections[1]).find('table tr'))[1];

        var content = $(contentNode).text();

        //var content = toMarkdown(html);

        contents += content;
        console.log(content);
      }
    });

    callback(contents);
  });
}
