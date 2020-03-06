var http = require('http');
var url = require('url');


http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type':'text/html'});
  var q = url.parse(req.url, true).query;
  var txt = q.year + " " + q.month + "<br>";
  res.write(txt);
  res.end('Demo Query string');
}).listen(8080);
