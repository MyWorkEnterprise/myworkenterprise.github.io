
'use strict';

const fs = require('fs');

module.exports = data => {
  fs.writeFileSync('./APIResult.json', data, 'utf8');
};
