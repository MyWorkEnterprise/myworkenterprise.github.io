
'use strict';

const http = require('http'),
      WJSON = require('./writeJson');

module.exports = api => {

  api = api.split('/');

  const options = {
    host: api[0],
    method: 'GET',
    path: `/${api.slice(1).toString().replace(eval('/,/g'), '/')}`,
    headers: {
      'Content-Type': 'appication/json'
    }
  };

  const request = http.request(options, res => {
    res.setEncoding('utf8');

    res.on('data', pokeball => {
      WJSON(pokeball);
    });

    res.on('end', () => {
      console.log('Finalizado');
    });
  });

  request.end();
};
