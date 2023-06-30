var fs = require('fs');

fs.open('mynewfile2.txt', 'w+', function (err, file)
{
      if (err) throw err;

      //content to be written to the file
      let content = "Marriage Life";

      //write content to the file
      fs.writeFile(file, content, (err) => {
            if (err) throw err;
            console.log('File saved!');
      });

      //read file
      fs.readFile(file, (err, data) => 
      {
            if (err) throw err;
            console.log(data.toString('utf8'));
      });
});

//fs.writeFile() untuk menulis ke file
//fs.readFile() untuk membaca file
//fs.readFile() menggunakan fungsi `toString('utf8') untuk mengubah buffer menjadi teks dgn encode UTF-8