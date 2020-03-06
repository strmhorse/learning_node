var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type':'text/html'});
  res.write(req.url + "<br>");
  res.end('Demo of URL String');
}).listen(8080);
