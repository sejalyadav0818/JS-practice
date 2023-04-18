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

//maths Function 

//it is built-in fucntion.
//Math.roound  return nearest integer  
 console.log(Math.round(4.5)); //5
 console.log(Math.round(4.6)); //5
 console.log(Math.round(4.4)); //4

//Math.cill(x) returmn Rounded Up nearest Value
console.log(Math.ceil(4.5)); //5
console.log(Math.ceil(4.6)); //5
console.log(Math.ceil(4.4)); //5


//Math.floor(x) returmn Rounded Up nearest Value
console.log(Math.floor(4.5)); //4
console.log(Math.floor(4.6)); //4
console.log(Math.floor(4.4)); //4



//Math.trunc(x) integer 
console.log(Math.trunc(4.5)); //4
console.log(Math.trunc(4.6)); //4
console.log(Math.trunc(4.4)); //4

//Math.pow()
console.log(Math.pow(4,2)); //16
console.log(Math.pow(4,1)); //4
console.log(Math.pow(6,2)); //64

//retrun positive value 

console.log(Math.abs(-4)); //4

//



