/**
 * Created by Johnny on 2015/5/6.
 */

'use strict';
var integrator = require('../lib/integrator');

describe('integrator', function () {
  it('integrate', function (done) {
    var url = 'http://www.dailymail.co.uk/news/article-2297585/Wild-squirrels-pose-charming-pictures-photographer-hides-nuts-miniature-props.html';

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
