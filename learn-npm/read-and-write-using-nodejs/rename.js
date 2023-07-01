//function rename() untuk mengubah nama

//ada tiga parameter: nama file, nama baru file, fungsi yang akan dieksekusi saat nama diubah

var fs = require('fs');

fs.rename('newfile1.txt', 'renamedfile.txt', function (err) {
      if (err) throw err;
      console.log('File successfully renamed!');
});