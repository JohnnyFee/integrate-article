/**
 * Created by Johnny on 2015/5/6.
 */

'use strict';
var integrator = require('../lib/integrator');
var fs = require('fs');

describe('integrator', function () {
  it('integrate', function (done) {
    var url = 'http://bbs.fobshanghai.com/viewthread.php?tid=3885995&extra=&page=1';
    //var url ="http://www.imooc.com/course/list";

    integrator.integrate(url, function (data) {
      if (data) {
        console.log(data);
      }
      else {
        console.log('error');
      }

      done();
    });
  });

  it.only('integrate all', function (done) {
    var pages = 124;
    var urls = [];
    var url = 'http://bbs.fobshanghai.com/viewthread.php?tid=3885995&extra=&page={page}';

    for (var i = 1; i <= pages; i++) {
      urls.push(url.replace('{page}', i + ""));
    }


    integrator.integrate(urls, function (data) {
      fs.writeFileSync('./download/huahistory.md', data);
      done();
    });
  });
});
