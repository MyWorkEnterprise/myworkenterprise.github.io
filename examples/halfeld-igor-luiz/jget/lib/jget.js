
'use strict';

const program = require('commander'),
      pkg     = require('../package.json'),
      getAPI  = require('./getApi');


program
  .version(pkg.version)
  .usage('<api>')
  .description('Simple CLI that made requests for any API')
  .action(getAPI)
  .parse(process.argv);
