var fs = require('fs');

//create a new file named mynewfile1.txt
fs.appendFile('newfile1.txt', 'Hello from the other side!', function (err) 
{
      if (err) throw err;
      console.log('Saved!');
});