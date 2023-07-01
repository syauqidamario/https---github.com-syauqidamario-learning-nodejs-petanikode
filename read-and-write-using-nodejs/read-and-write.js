var fs = require('fs');
var http = require('http');

http.createServer(function (request, response) {
      //read file adalah method untuk membaca file
      //ada dua parameter: nama file dan fungsi yang akan dieksekusi saat file dibaca

      fs.readFile('index.html', (err, data) => {
      // err berisi error ketika file gagal dibaca
      // data berisi data dari file      
            if (err) throw err;

            //send response
            response.writeHead(200, {'Content-Type':'text/html'});
            response.write(data);
            response.end();
      });
}).listen(8000);

console.log("Running on http://localhost:8000");