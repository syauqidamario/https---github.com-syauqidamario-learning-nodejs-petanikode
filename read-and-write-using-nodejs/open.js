var fs = require('fs');

fs.open('mynewfile2.txt', 'w', function (err, file)
{
      if (err) throw err;
      console.log('Saved!');
});

//fs.open() ada tiga parameter: nama, flag, dan fungsi
//Flag w itu untuk memberitahu fungsi fs.open() kalau kita akan menulis/membuat file baru
//fs.open() akan membuat file kosong apabila belum ada file dgn nama yg ditentukan.