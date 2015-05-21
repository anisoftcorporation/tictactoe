var http = require('http');
var fs = require('fs');
var url = require('url');
var count=0;

var server = http.createServer(function(request, response){
// var data= fs.readFileSync("main.html","utf8");
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.write("hello");
  response.end();

});
server.listen(process.env.OPENSHIFT_NODEJS_PORT,process.env.OPENSHIFT_NODEJS_IP);


