
'use strict';

const http = require('http'),
      cluster = require('cluster');

if (cluster.isMaster) {
    cluster.fork();
    cluster.fork();
    cluster.fork();
    cluster.fork();
    return;
}


const server = http.createServer(function(req, res){
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('<h1>Escalonando aplicações NodeJs</h1>');
  res.end();
});

server.listen(4000, function(){
  console.log('Servidor no ar');
});
