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

//string Function
let s="sejal yadav";
document.getElementById("demo").innerHTML=s;

    //string fucntions
     // string length
     let str_len=s.length;
     console.log("string length is" + str_len + "\n")//include space 
        
    //string escape character 
    let str_esc="hello \"hello\" world "//insert double quote in string using \"string\"
    console.log("string using escape is  : "  + str_esc + "\n");

    //object vs string 
    let x = "sejal";//string 
    let y= new String("sejal"); //object 

    //using ==(comapre the string) and ===(compare datatype) oprator 
     
                    if (x==y) //comapre string only 
                         {
                              console.log("string are equal ");
                    } else {
                              console.log("string are not equal ");
                    }

                    if (x===y) //comapre type of  string 
                    {
                         console.log("string are equal ");
                    } else {
                              console.log("string are not equal ");
                    }
                    
                    //js object cannot comapre always 
                    let y1= new String("sejal"); //object 
                    let y2= new String("sejal"); //object 
                    if(y1===y2)
                    {
                         console.log("object are equal ");
                    } else {
                              console.log("object are not equal ");
                    }

     //string methods 

     let string ="     red,blue,white,red,red    ";
     console.log(string);

     let str_length=string.length;
     console.log("string length is "+ str_length);

     let str_slice=string.slice(3,5);
     console.log("string Slice  " + str_slice);
     
     let str_rep=string.replace("blue","black");//it is case sensitive so it can't replace upper case into lower
     console.log("string Replace " + str_rep);//it replace only first occurrance but for 

     let str_repp=string.replace(/red/g,"black")    //all string replace or use replaceAll();
     console.log("strings Replace " + str_repp);

     let str_upper=string.toUpperCase("black")    
     console.log("strings  lower to uppercase " + str_upper);//same as toLocaleUpperCase()

     let str_lower=string.toLowerCase("BLACK")  
     console.log("strings upper to lower " + str_lower);//same as toLocaleLowerCase()
     
     let str_concat=string.concat("",str_lower)  //concat
     console.log("string concat " + str_concat);


     let str_trim=string.trim()  //trim
     console.log("string trim " + str_trim);// it remove both side  space 

  
     let str_trim_end=string.trimEnd()  //it remove end side  space 
     console.log("string End trim " + str_trim_end); 

     let str_trim_start=string.trimStart()  //it remove start side  space 
     console.log("string start trim " + str_trim_start);

     let str_prm_val=string.valueOf()  //it primitive value of object but in can't change the string 
     console.log("string Primitive  value " + str_prm_val);

     let str_charat=string.charAt(0) //give index no of chracter
     console.log("string Position " + str_charat);


     let str_index=string.indexOf("red") //give position of first occurance [counts start form 0]
     console.log("string index " + str_index);

     //lastIndexOf(string,position); same as index of but start serching from your secound paramter (position)

     let str_serch=string.search("red");
     console.log("string serched " + str_serch);// same as indexof ()

     //diffrance between indexof() and serch() is advance so in this we can  use reguler expression.
     //match fucntion ?????

     let str_include=string.includes("");
     console.log("string inculde or not  " + str_include)//  method returns true if a string contains a specified value.Otherwise it returns false.
     
     let str_startwith=string.startsWith("red");
     console.log("string start with "+ str_startwith) //consider space alse so in this case it give false same as endsWith()

     //access the variables 
     let string_1="hello";
     let string_2="world"

     let string_3=`${string_1} ${string_2}`
      console.log("lierals " + string_3)
      //till string Templates 




function f1(p1,p2)
{
     return p1*p2
}
document.getElementById("demo").innerHTML=f1(2,3);





