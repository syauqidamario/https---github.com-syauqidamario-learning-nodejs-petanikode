var http = require('http');
var fs = require('fs');
var formidable = require('formidable');
var mv = require('mv');

http.createServer(function (req, res){
      // send upload form
      if (req.url === "/" && req.method === "GET"){
            fs.readFile("form_upload.html", (err, data) => {
                  res.writeHead(200,{'Content-Type':'text/html'});
                  if(err) throw err;
                  res.end(data);
            });
      }

      // upload file
      if (req.url == '/' && req.method === "POST"){
            // create the object form from formidable
            var form = new formidable.IncomingForm();

            // handling the file upload
            form.parse(req, function (err, fields, files) {
                  var oldpath = files.filetoupload.path;
                  var newpath = __dirname + "/uploads/" + files.filetoupload.newFilename;

                  // move the uploaded file
                  mv(oldpath, newpath, function (err) {
                        if(err) { throw err; }
                        console.log('File uploaded successfully');
                        return res.end("File uploaded successfully");
                  });
            });
      }
}).listen(2020);

console.log("Server listening on http://localhost:2020");