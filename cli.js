#!/usr/bin/env node
'use strict';
var meow = require('meow');
var integrateArticle = require('./');

var cli = meow({
  help: [
    'Usage',
    '  integrate-article <input>',
    '',
    'Example',
    '  integrate-article Unicorn'
  ].join('\n')
});

integrateArticle(cli.input[0]);
