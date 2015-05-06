'use strict';

var grabber = require('../lib/grabber');

xdescribe('grabber', function () {
  it('cheeriojs', function () {
    var a = '<ul id="fruits">' + '<li class="apple">Apple</li>' +
      '<li class="orange">Orange</li>' +
      '<li class="pear">Pear</li>' +
      '</ul>';

    var cheerio = require('cheerio'),
      $ = cheerio.load(a);

    $ = cheerio('li', 'ul', a);
    var html = $.html();

    console.log(html);

  });

  it('grab', function (done) {

    var url = 'http://bbs.fobshanghai.com/viewthread.php?tid=3885995&extra=&page=1';
    grabber.grab(url, function (data) {
      if (data) {
        console.log(data);
      }
      else {
        console.log('error');
      }

      done();
    });
  });
});
