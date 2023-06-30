var http = require('http');

//impor library http dari node_modules
//node_modules itu directory penyimpanan library Nodejs
//library http berfungsi penanganan protokol http, seperti membuat & menerima request

http.createServer(function (req, res) //ini untuk membuat objek server
{
      //res.end("Hi, welcome to nodejs");
      res.writeHead(200, {'Content-Type': 'text/html'}); // Menentukan response dari header
      // Tipe responnya gk cuman terbatas pada text/html, tapi juga bisa JSON, PDF, XML, dll.
      res.write('Hello <b>Nodejs</b>'); // menulis response body atau konten yang akan dikirim ke client.
      res.end(); // mengakhiri respon
}).listen(2003); //menentukan port yang akan digunakan server

//console.log("Server running on http://localhost:6060");