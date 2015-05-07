/**
 * Created by Johnny on 2015/5/6.
 */

'use strict';
var integrator = require('../lib/integrator');

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
});
