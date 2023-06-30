var fs = require('fs');
var http = require('http');

http.createServer(function (req, res) {
    fs.readFile('index.html', (err, data) => 
    {
      if(err) throw err;

      //send response
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.write(data);
      response.end();
      
    });
}).listen(8000);

console.log("Server running on http://localhost:8080");