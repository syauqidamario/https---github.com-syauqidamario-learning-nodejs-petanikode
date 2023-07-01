var http = require('http');
var url = require ('url');
var fs = require ('fs');

http.createServer(function (req, res)
{
      var q = url.parse(req.url, true);

      if(q.pathname == "/search/" && req.method === "GET")
      {
            //get parameter from URL
            var keyword = q.query.keyword;

            if ( keyword )
            {
                  //Get data from form using GET method
                  res.writeHead(200, {'Content-Type':'text/html'});
                  res.write("<h3>Search results:</h3>");
                  res.write("<p>You are searching for: </b>" + keyword + "</b></p>");
                  res.write("<pre>No results! This website is still developed</pre>");
                  res.end("<a href='/search/'>Back</a>");
            }
            else
            {
                  //display search form
                  fs.readFile('search.html', (err, data) =>
                  {
                        if (err) 
                        { // send error response
                              res.writeHead(404, {'Content-Type':'text/html'});
                              return res.end("404 Not Found!");
                        }
                        // send search.html form
                        res.writeHead(200, {'Content-Type':'text/html'});
                        res.write(data);
                        return res.end();
                  });
            }
      }
}).listen(6363);

console.log('Server is running on http://localhost:6363');