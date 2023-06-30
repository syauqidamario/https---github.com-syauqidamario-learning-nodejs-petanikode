var http = require('http');

http.createServer(function(req, res)
{
      res.end("Hello Server!");
}).listen(2003);

console.log("Server running on http://localhost:2003");