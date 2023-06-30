//unlink() berguna untuk hapus file
//ada dua parameter: nama file yg akan dihapus & fungsi yg dieksekusi saat file dihapus

var fs = require('fs');

fs.unlink('mynewfile2.txt', function(err) {
      if (err) throw err;
      console.log('File deleted!');
});