var fs = require('fs');

//create a file named mynewfile1.txt:

  fs.writeFileSync('mynewfile.txt',"Hello !!!"); 
 console.log('Saved!');
 
 //appende text into mynewfile1.txt:
 fs.appendFileSync( 'mynewfile.txt',"appended  text !");
 console.log('appended !'); 

//read file data
const filebufdata= fs.readFileSync("mynewfile.txt");
console.log(filebufdata);
const textfile=filebufdata.toString();
console.log(textfile);

//output <Buffer 48 65 6c 6c 6f 20 63 6f 6e 74 65 6e 74 21 61 70 70 65 6e 64 65 64 20 20 74 65 78 74 20 21>

//open file
const openfile= fs.openSync("mynewfile.txt");
console.log(openfile);//17

//rename file
const renamefile =fs.renameSync('mynewfile.txt','read.txt');
console.log(renamefile);// rename file name

//delete file
 //const deletefile =fs.unlinkSync('read.txt');
 //console.log(deletefile);// delete file


