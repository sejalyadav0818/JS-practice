//infinite loop
for(;;)
{

}
//postfix and prefix
let a=1,b=1;
console.log(++a);//prefix // 2
console.log(a++);//postfix // 1
//after increnment both value will 2 

//use strict
//whole script work like modern java script 
//it must be at the top 
//we can't use any variable without declration 
//"use strict";

//comparsion Operator 
console.log(5 > 4); //true
console.log("apple" > "pineapple"); //false Dictionary comparison, hence false. "a" is smaller than "p".
console.log("2" > "12"); // true Again, dictionary comparison, first char "2" is greater than the first char "1".

//foreach
items = ["q", "f", "g", "h"];
items.forEach((e) => {
  console.log(e);
});

//for loop
let array = ["2", "2", "4", "6"];
for (let i = 0; i < array.length; i++) {
  const element = array[i];
  console.log(element);//2 2 4 6
}

//hoisted” (raised) : variable can be use before declaration 
//let and const 
//const vs let  vs var
//var and let can be reassign
//const remain constant cannot change the value  , can't be use before declaration

// KEYWORD    SCOPE  REDECLARATION  &   REASSIGNMENT      HOISTING
// var        Global, Local yes & yes yes,            with default value
// let        Global, Local, Block  no & yes  yes,    without default value
// const     Global, Local, Block  no & no yes,       without default value


//fucntion  naming https://javascript.info/function-basics
//index of
let array11 = ["Hello", "GeeksforGeeks", "JavaScript"];
console.log(array11.indexOf("GeeksforGeeks"));//0

//includes If you need to find if a value exists in an array, use includes().
let array1 = ["Hello", "GeeksforGeeks", "JavaScript"];
console.log(array1.includes("GeeksforGeeks"));//true
console.log(array1.includes("React"));//false

//sclice vs splice
let arr = [1, 2, 3, 4, 5];
console.log("Original Array: " + arr);//Original Array: 1,2,3,4,5

let sliceArray = arr.slice(0, 2);
console.log("Slice Array: " + sliceArray);//Slice Array: 1,2
console.log("Original Array: " + arr); //Original Array: 1,2,3,4,5

let spliceArray = arr.splice(0, 2);
console.log("splice Array : " + spliceArray);//splice Array : 1,2
console.log("Original Array: " + arr);//Original Array: 3,4,5

//in slice we will get orginal array after slice but in splice we will update array after splice

//clear and set interval
// var interval = setInterval(
//   function (str1, str2) {
//     console.log(str1 + " " + str2);
//   },
//   1000,
//   "Hello.",
//   "How are you?"
// );

// clearInterval(interval);

const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const children = arr1.concat(arr2);
console.log(children);//[ 'Cecilie', 'Lone', 'Emil', 'Tobias', 'Linus' ]

//sort fucntion in array
//for string array
const color = ["red", "blue", "green", "white", "black"];
var sortedCoolor = color.sort(); //by defult accending
console.log(sortedCoolor);//[ 'black', 'blue', 'green', 'red', 'white' ]

//for numeric array
const numbers = [1, 2, 34, 54, 56, 6, 7, 8];
var sortedNumbers = numbers.sort();
console.log(sortedNumbers);//[ 1, 2, 34, 54,56, 6,  7,  8]
 //  sort fucntion is work with numeric value so we have to use another fucntion for acending and decnding

//for numeric array using  another way for accending
const numbers1 = [1, 2, 34, 54, 56, 6, 7, 8];
var sortedNumbersasc = numbers1.sort(function (a, b) {
  return a - b;
});
console.log(sortedNumbersasc);//[ 1,  2,  6,  7, 8, 34, 54, 56]

//for numeric array using  another way for decending
const numbers2 = [1, 2, 34, 54, 56, 6, 7, 8];
var sortedNumbersdec = numbers2.sort(function (a, b) {
  return b - a;
});
console.log(sortedNumbersdec);//[ 56, 54, 34, 8, 7,  6,  2, 1]
// refrance : https://www.w3schools.com/js/js_array_sort.asp

//toString fucntions
//array to string
const rank = ["first", "secound", "third"];
var ArrayToString = rank.toString();
console.log(ArrayToString);//first,secound,third

const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
console.log("for shift" + fruits1.shift());//for shiftBanana
console.log( fruits1);//[ 'Orange', 'Apple', 'Mango' ]
//shift() method removes the first item of an array.["Orange", "Apple", "Mango"];

const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
console.log("for unshift" + fruits2.unshift("Lemon"));// unshift5
console.log( fruits2);//[ 'Lemon', 'Banana', 'Orange', 'Apple', 'Mango' ]
//Math objects

console.log(Math.PI);//3.14159265358979
console.log(Math.abs(-10));//3.14159265358979
console.log(Math.random); //it return number between 0 to 1

//switch
switch (new Date().getDay) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Thuseday";
    break;

  case 3:
    day = "wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
  default:
    day = "Looking forward to  WEEKEND";
}


//array function
const car = ["volvo", "bmw", "saab"];
//  document.getElementById("first").innerHTML = car;
console.log(car.length);//3

console.log(car[0]);//
console.log(car.sort());
//adding new elenment
car.push("marce");

//method -1
console.log(Array.isArray(car));
//to string
console.log(car.toString());
//pop - push
car.pop();
console.log(car);
car.push("sejal");
console.log(car);
//shift use to shift inside elenment in arary left side
console.log(car.shift());

car.slice(1);
console.log(car);
console.log(car.reverse());

//array & map & flatmap
console.log(car.indexOf("apple"));

//date funcirton in js
const date = new Date();
console.log("date" + date.getDate());
console.log(date.getDay());
console.log(date.getFullYear());
console.log(date.getHours());
console.log(date.getMilliseconds());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getTime());
console.log(date.getTimezoneOffset());
console.log(date.getUTCDate());
console.log(date.getUTCDay());
console.log(date.getUTCFullYear());
//  console.log(date.setUTCHours());
//  console.log(date.getUTCMonth());
//  console.log(date.getUTCSeconds());

//== use for equal
//=== use for type
// !== check if not equal to this or not
//&& and both condition true then go ahead
// ||  use for one of the both condition true
// for ! not
//how to craete class in js

//Tarneory
var age = 9;
var ischeck = age < 10 ? "yes" : "no";
console.log(ischeck);

//Nullish  oprator check first elenment if it is not null otherwise it return false
let name = null; //here first elenment is null so , it print secound one
let text = "missing ";
let reuslt = name ?? text;
console.log(reuslt); // missing

//javascript loop
//for loop
for (let index = 0; index < array.length; index++) {
  const element = array[index];
}

let counter = 0;
car.forEach(function (value) {
  counter += value + "<br>";
});

//You can use strict mode in all your programs. It helps you to write cleaner code, like preventing you from using undeclared variables.
("use strict");
x = 3.14; // This will cause an error (x is not defined).

//javacript map
const fruits = new Map([
  ["apple", 500],
  ["banana", 500],
  ["orange", 200],
]);
console.log(fruits);
fruits.set("pineapple", 100);
fruits.get("apple");
fruits.has("apple");
console.log(fruits);

//try catch
//asynk -await
//promise
//callback helll

//Promise and asynk wait

//  const ticket= new Promise(function(resolve,reject){
//  const isBoarded = false;
//  if(isBoarded)
//  {
//     resolve('you are in the fligt');
//  }else
//  {
//     reject('your flight has been cancled ');
//  }
//promise haveing 3 state 1.pendding : first stage  so , it may have 2 possiblities
//1.resolev or 2.reject if we get doluation then resolve otherwise reject  if resolve the .then use aitherwise .cathch use



// orderPizza();

// Refrance : https://github.com/Anuj-Kumar-Sharma/Web-Development-Course/tree/master/learnjs

//filter fcuntion
const no = ["a", "b", "c", "d"];
const fillterno = no.filter((no) => no > 5);
console.log(fillterno);

//create dyanamic fucntion to perform fllter
function isBigEnough(value)
{
    return value >=10;
    //any thing you can add
}

const filltertext = ['1','2','3','4'].filter(isBigEnough);
console.log(filltertext);

//check wether no is prime or not using arary and fillter method
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
const Randomarray = [
  -3,
  5,
  2,
  6,
  ,
  0,
  1,
  1,
  ,
  7,
  8,
  9,
  4.3,
  23,
  77,
  11,
  13,
  9,
  0,
  -1,
];
function isPrime(num) {
  for (let i = 2; num > i; i++) {
    const element = array[i];
    if (num % 2 === 0) {
      return false;
    }
    return num > 1;
  }
}

console.log(Randomarray.filter(isPrime));

//to find particuler object form array of object
const findobejct = [{ name: "sejal", dep: "dev" }, { priti: "ba" }];

function issejal(findsejal) {
  return findsejal.name === "sejal";
}

console.log(findobejct.filter(issejal));

//foreach
// syntext
array.forEach(function(CurrVal, Index, Array) {

  // execute the piece of code

  });
const demoforEach = ["s", "d", "f", "g", "h"];
demoforEach.forEach((elenment) => {
  console.log(elenment);
});

//There is no way to stop or break a forEach() loop other than by
//throwing an exception. If you need such behavior
//, the forEach() method is the wrong tool.

// foreach method does not support async fcuntion in only expect synchronus fcuntion

const ratings = [5, 4, 5];
let sum = 0;

const sumFunction = async (a, b) => a + b;

ratings.forEach(async (rating) => {
  sum = await sumFunction(sum, rating);
});

console.log(sum);
// Naively expected output: 14
// Actual output: 0
/// so here , in this case output will be 0 not 14

//solve

const ratings1 = [5, 4, 5];
let sum1 = 0;
const sumFucntionsync = function (a, b) {
  return a + b;
};

ratings1.forEach((ratings1) => {
  sum1 = sumFucntionsync(sum1, ratings1);
});

console.log(sum1); //output 15

//join  we can add sprator
const funjoin = ["a", "b", "c"];
console.log(funjoin.join());
console.log(funjoin.join(""));
console.log(funjoin.join("*"));

const funsplit = "vnl knv wenve n";
console.log(funsplit.split(""));

//if want to print keys of object

const funkey = ["1", "2", "3"];
const intrator = funkey.keys();
for (let i of intrator) {
  console.log(i);
}
//map funtion alwasy take calback fucntion
const funmap = ["1", "2", "3"];
const map = funmap.map((x) => x * 2);
console.log(map);

//crate map fucntion that converts string into interger using parseInt
const funpars = ["1", "3", "5", "5", "5"];
const ConvertStringintoInt = funpars.map(parseInt);
console.log(ConvertStringintoInt); //parseint convrt only one argument of array into int  not all

//some fcuntion is use to check the test case provided by fcunction  and if any one test case pass
//then it return true othewise false

const CheckEvenArray = [1, 2, 34, 5, 5, 67, 90];
const even = (e) => e % 2 === 0;
console.log(CheckEvenArray.some(even)); // it retun true

const CheckEvenArray1 = [1, 3, 5, 9];
const even1 = (e1) => e1 % 2 === 0;
console.log(CheckEvenArray1.some(even1)); // it retun false

//toLocalString https://www.educative.io/answers/what-is-arraytolocalestring-in-javascript
const arraytolocalstring = [new Date("2018-11-29 15:47:14")];
const localString = arraytolocalstring.toLocaleString("en", {
  timeZone: "UTC",
});
console.log(localString);

//decision conditoion usig js https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals
// if else : use when we have both conditions

let behappy = true;
let magic;

if (behappy === true) 
{
 console.log(magic = "happen"); 
} 
else
 {
  console.log(magic = "no happen");
}
//https://www.freecodecamp.org/news/javascript-rest-vs-spread-operators/

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor


Reduce() 
When we need to iterate over an array – we can use forEach, for or for..of.
When we need to iterate and return the data for each element – we can use map.

let arr = [1, 2, 3, 4, 5];

// removed initial value from reduce (no 0)
let result = arr.reduce((sum, current) => sum + current);

alert( result ); // 15


// JavaScript String Methods
String length()
String slice()
String substring()
String substr()
String replace()
String replaceAll()
String toUpperCase()
String toLowerCase()
String concat()
String trim()
String trimStart()
String trimEnd()
String charAt()
String split()



// JavaScript Array Methods and Properties
concat()	Joins arrays and returns an array with the joined arrays
every()	Checks if every element in an array pass a test
filter()	Creates a new array with every element in an array that pass a test
find()	Returns the value of the first element in an array that pass a test
forEach()	Calls a function for each array element
includes()	Check if an array contains the specified element
indexOf()	Search the array for an element and returns its position
isArray()	Checks whether an object is an array
join()	Joins all elements of an array into a string
keys()	Returns a Array Iteration Object, containing the keys of the original array
length	Sets or returns the number of elements in an array
map()	Creates a new array with the result of calling a function for each array element
pop()	Removes the last element of an array, and returns that element
push()	Adds new elements to the end of an array, and returns the new length
reduce()	Reduce the values of an array to a single value (going left-to-right)
reverse()	Reverses the order of the elements in an array
shift()	Removes the first element of an array, and returns that element
slice()	Selects a part of an array, and returns the new array
some()	Checks if any of the elements in an array pass a test
sort()	Sorts the elements of an array
splice()	Adds/Removes elements from an array
toString()	Converts an array to a string, and returns the result
unshift()	Adds new elements to the beginning of an array, and returns the new length
valueOf()	Returns the primitive value of an array

________________________code for rest and spread
    Problem with sync js
    soluation 
    1. callback 
    2.promise
    3.async-wait  + notes written in [camlin notebook]_________________________________
   
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        * {
            padding: none;
            margin: none;
            box-sizing: border-box;
        }
  
        .word {
            color: #308d46;
            font-size: 4rem;
            transition: all .5s ease-in;
            margin: 0 5px;
            transform: translateY(3.8rem);
            opacity: 0;
        }
  
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 95vw;
            height: 95vh;
        }
  
        .container {
            overflow: hidden;
            display: flex;
            flex-direction: row;
        }
  
        .animate {
            opacity: 1;
            transform: translateY(0);
        }
        </style>
</head>
<body>
    <div class="container">
        <h2 class="word">S</h2>
        <h2 class="word">K</h2>
        <h2 class="word">Y</h2>
    </div>
</body>
</html>


<script>

/////////////////////////////rest and spread oprator 
/ function and other arguments
function fun(a,b,c){
    console.log(`${a} ${b}`);//Mukul','Latiyan'
    console.log(c);  //Lionel
    console.log(c[0]); //L
    console.log(c.length); //6
    console.log(c.indexOf('o')); //2 it take argument as 0 as first elenment
}
fun('Mukul','Latiyan','Lionel','Messi','Barcelona');

// rest with function and other arguments
function fun1(a,b,...c){
    console.log(`${a} ${b}`);// Mukul,Latiyan
    console.log(c);  //['Lionel','Messi','Barcelona']
    console.log(c[0]); // Lionel
    console.log(c.length); //3
    console.log(c.indexOf('Lionel')); //0
}
fun1('Mukul','Latiyan','Lionel','Messi','Barcelona');


// function and other arguments for spread
arary = ['Mukul','Latiyan','Lionel','vhuishvuih'];
function fun(a,b,c){
    console.log(`${a} ${b} ${c}`);//Mukul','Latiyan'
    
}
fun('Mukul','Latiyan','Lionel');

// spread with function and other arguments
arary1 = ['Mukul','Latiyan','Lionel','Messi','Barcelona','vhuishvuih'];
function fun1(a,b,c,d){
    console.log(`${a} ${b} ${c} ${d}`);// Mukul,Latiyan
    // console.log(c);  //['Lionel','Messi','Barcelona']
    // console.log(c[0]); // Lionel
    // console.log(c.length); //3
   
}
fun1(...arary1);
// https://crackingthefrontendinterview.com/spread-rest-operator/


const myName = "Oluwatobi Sofela";
console.log(...[myName]);
console.log([...myName]);
console.log(myName.split(""));
console.log(myName.split(" "));
console.log(myName.split(","));

 /////////////////////////////////////// Sync Javascript Problem

const Datas = [{name:"sejal", age : "20"},
                {name:"keya", age : "21"}];

//this fcuntion will return name form array of object in form of list using set timeout time = 1000
function getDats()
{
   setTimeout(()=>{

    let output = "";
    Datas.forEach((e)=>{
        output += `<li>${e.name}</li>`
    })

    document.body.innerHTML=output;
   },1000);

}
getDats();//sejal, keya in form of list 

//now createData funciton for  add data

function crerateData(newData)
{
     setTimeout(() => {
        Datas.push(newData)
     }, 2000);
}
crerateData({name :"jiya", age : "50"})
getDats()//this fcuntion i will get /sejal, keya ame reuslt to solve  becouse new data funciton is push data after calling get dat a fucntion 
// to solve this problem we can use callback fucntion 
// now to solve that problem i have to add callback fucntion 
// //this fcuntion will return name form array of object in form of list using set timeout time = 1000
///////////////////// ////////////////////////////using callback fcuntion 
const Datas1 = [{name:"sejal", age : "20"},
                {name:"keya", age : "21"}];

function getDats1()
{
   setTimeout(()=>{

    let output1 = "";
    Datas1.forEach((e1)=>{
        output1 += `<li>${e1.name}</li>`
    })

    document.body.innerHTML=output1;
   },1000);

}
// getDats();//sejal, keya in form of list 

//now createData funciton for  add data

function crerateData1(newData1,callback)
{
     setTimeout(() => {
        Datas1.push(newData1);
        callback();
     }, 2000);
}
 crerateData1({name :"jiya", age : "50"},getDats1)//it will return //sejal keya jiya in list  here we call getdatafucntion but after pushing the data using callback
 

 //now creating callbackhell in this if although   here it execute but it can be create and someting get mess when we have large functiona for that we have to use priomise 


let words = document.querySelectorAll('.word');

const animateAll = (animate)=>{
    setTimeout(() => {
        animate(words[0]);
        setTimeout(() => {
            animate(words[1]);
            setTimeout(() => {
                animate(words[2]);
            }, 1000);
        }, 1000);
    },1000 );
}
    const animate =(word)=>{
        word.classList.add("animate")
    }

animateAll(animate);

////////////////////////////////////now use promise to resolve the mess occure in callbackhell

const Datas3 = [{name:"sejal", age : "20"},
                {name:"keya", age : "21"}];

//this fcuntion will return name form array of object in form of list using set timeout time = 1000
function getDats3()
{
   setTimeout(()=>{

    let output3 = "";
    Datas3.forEach((e3)=>{
        output3 += `<li>${e3.name}</li>`
    })

    document.body.innerHTML=output3;
   },1000);

}
getDats3();//sejal, keya in form of list 

//now createData funciton for  add data

function crerateData3(newData3)
{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
        Datas3.push(newData3)
        let error = false;//if it error is false then resolev will call otherswise true the reject will call 
        if(!error)
        {
            resolve();
        }
        else
        {
            reject("reject");
        }
     }, 2000);
    })
    
}
crerateData3({name :"jiya", age : "50"})
.then(getDats3)
.catch(error=>console.log(error));


////////////////////////////////////////////////////async wait ///////////////////////
const Datas4 = [{name:"sejal", age : "20"},
                {name:"keya", age : "21"}];

//this fcuntion will return name form array of object in form of list using set timeout time = 1000
function getDats4()
{
   setTimeout(()=>{

    let output4 = "";
    Datas4.forEach((e4)=>{
        output4 += `<li>${e4.name}</li>`
    })

    document.body.innerHTML=output4;
   },1000);

}
getDats4();//sejal, keya in form of list 

//now createData funciton for  add data

function crerateData4(newData4)
{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
        Datas4.push(newData4)
        let error = false;//if it error is false then resolev will call otherswise true the reject will call 
        if(!error)
        {
            resolve();
        }
        else
        {
            reject("reject");
        }
     }, 2000);
    })
    
}

async function start()
{
  await crerateData4({name :"jiya", age : "50"})
  getDats4();
}
start();
</script> 
</html>

////////////////////////closure we can access privouse function value in another function usign in another language we lost the value & varibale after usiing one time in function 

var sum =  function(a)
{
        console.log("hello" + a);
        var c = 5;
        return  function(b)
        {
            return a+b+c;//a is accessible here also //first time it have  7 value and store into store variable 
        }
}
var store = sum(2);//we have to store sum into particuer varibale because another fcuntion retrun values //firsttime it store 7 
console.log(store(5));//now we have store varible having value 7 and call to fcuntion return 12
/////////////////////////////////Map , Reduce , Filtter

///////////////////Transforming array using Map function
var arr=[5,1,3,2,6];
// double = [10,2,6,4,12]
console.log("Simple Array " ,arr);

//firstway using simple f
function double(x) 
 {
   return x*2;
}
const output = arr.map(double);
console.log("Double " ,output);

//2 way  using anymoyous function
const output1 = arr.map ((x1)=>{
    return x1*3; 
});
console.log("Triple ",output1);

// 1) Make an array of numbers that are doubles of the first array

const Array = [10,20,30,40];
var ArrayDouble = Array.map ((x)=>{
    return x * 2 ;
}) 
console.log("Double Array" ,ArrayDouble)

// 2) Take an array of numbers and make them strings
const Arrayofnumbers= [10,20,30,40];
var NumbertoString = Arrayofnumbers.map((x)=>{
    return x.toString();
})
console.log("Number to String " , NumbertoString)

// 3) Capitalize each of an array of names 
const Arrayoflatters = ['sejal', 'keya', 'riya'];
const ArrayCapitilze = Arrayoflatters.map((x)=>{
    return x.toLocaleUpperCase();
})
console.log("To Captalize ", ArrayCapitilze);

// 4)Make an array of strings of the names 
const  Arrayofobject = [{name: "sejal" , age : "20"},
                        {name: "keya" , age : "21"},
                        {name: "jiya" , age : "22"}];
const OnlyName = Arrayofobject.map((x)=>{
    return x.name 
})                      
console.log("only name from array of objects" , OnlyName);

// 5) Make an array of strings of the names saying whether or not they can vote
const ArrayofPerson =[ {name: "Angelina Jolie",age: 80 },
                        { name: "Eric Jones",age: 2},
                        {name: "Paris Hilton", age: 5},
                        {name: "Kayne West",age: 16},
                        {name: "Bob Ziroll",age: 100}]

const isEligible = ArrayofPerson.map((x)=>{
    if(x.age > 18)
    {
        return  x.age +" "+ "Eligible"
    }else
    {
        return  x.age  +" " + "Not Eligible"
    }
       
})
console.log(isEligible);

// 6) Make an array of the names in h1s, and the ages in h2s

const ArrayofData = [ {name: "Angelina Jolie",age: 80 },
                        { name: "Eric Jones",age: 2},
                        {name: "Paris Hilton", age: 5},
                        {name: "Kayne West",age: 16},
                        {name: "Bob Ziroll",age: 100}];
const Nameh1Ageh2 = ArrayofData.map((x)=>{
        
            return `<h1>${x.name}</h1><h2>${x.age}</h2>`;

});
console.log(Nameh1Ageh2);


//filtter - to filtter the particuler array ex , find odd , even , sum of array

const Arrayofnumberss =  [1,2, 3, 4,5];
const OddNumbers = Arrayofnumberss.filter((e)=>{
    return (e%2==0)
})
console.log("Odd number from Array" ,OddNumbers)

const SumNumbers = Arrayofnumberss.filter((e)=>{
    sum = 0 ;
    return sum=sum+e;
})
console.log("sum of Array" , SumNumbers)


// 1) Given an array of numbers, return a new array that has only the numbers that are 5 or greater.

const Arrayofno =  [1,2, 63, 14,5];
const NumberfiveoGrater = Arrayofno.filter((e)=>{
    return e>=5
})
console.log("number grater then or equal five" , NumberfiveoGrater)

// 2) Given an array of numbers, return a new array that only includes the even numbers.

const EvenNumbers = Arrayofnumberss.filter((e)=>{
    return (e%2==0)
})
console.log("Even number from Array" , EvenNumbers);


// 3) Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length
const ArrayString = ['sejal','keya' ,'jiya', 'siddhart', 'sid', 'diyaaaaaa' ];
const fivelength = ArrayString.filter((e)=>{
    return (e.length <=5)
})
console.log("five or fewer length ", fivelength)

// 4) Given an array of people objects, return a new array that has filtered out all those who don't belong to the club.

const  peopleWhoBelongToTheIlluminati = ([
    { name: "Angelina Jolie", member: "true" },
    { name: "Eric Jones", member: "false" },
    { name: "Paris Hilton", member: "true" },
    { name: "Kayne West", member: "false" },
    { name: "Bob Ziroll", member: "true" }
])
//pepole belogn to true group that show
const sameclass = peopleWhoBelongToTheIlluminati.filter((e)=>{
  return  e.member == "true"      
})
console.log("people Who Belong To TheIlluminatilength ", sameclass)


// 5) Make a filtered list of all the people who are old enough to see The Matrix (older than 18)
const ofAge = ([
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
]);

const AgeGraterThenEighteen = ofAge.filter((e)=>{
    return e.age > 18
})
console.log("Age Grater Then Eighteen ", AgeGraterThenEighteen)


/*Reduce  function : use when we have all elenments of array and come up with single value out of them.for an example we have array containg number and we have to find sum or max , min out of the array
reduce fucntion having two paramaters  first it take function having two argunments (acc , curr) and secound one intital value of acc
acc  = accumlate the result  value we get out of result  
curr =  current  value that chnage according to loop
for and instance  we have sum example in this 

sum is acc  and i is curr
const arr = [10,20,30,40]
function findsum(arr)
{
    let sum= 0;
    for(let i=0; i< arr.length ; i++)
    {
        sum=sum + arr[i];

    }
    return sum;
}
console.log(findSum(arr));

Now we need to assign  initial value to acc so it assign like this given below
arr.reduce((acc, curr)=>{
    retrun acc = acc+_curr;
}, 0)// here we have assign value 0 to acc 


*/

const arrr = [1,2,4,4];
const findsum = arrr.reduce((acc, curr)=>{
    return acc = acc + curr;
},0)
console.log("find sum using Reduce ", findsum)


const users = ([
    { firstname: "Angelina" , lastname: "Jolie", age: 80 },
    { firstname: "Eric" , lastname: "Jones", age: 2 },
    { firstname: "Paris" , lastname: "Hilton", age: 5 },
    { firstname: "Kayne" , lastname: "West", age: 16 },
    { firstname: "Bob" , lastname: "Ziroll", age: 100 }
]);
//get full name using Reduce fcuntion 
// const getFUllname = users.reduce((acc,curr)=>{
//         return curr.firstname + curr.lastname
// },0);
// console.log("Get full name using Reduce  ", getFUllname) //Get full name using Reduce   BobZiroll
// here you can see it only give use last object name from array of object   so  first we need to itrate the array using map and then apply reducc 
const eachuserfirstlastaname  = users.map((e)=>{
    return e.firstname + " " +e.lastname
})
console.log("find sum using Map ", eachuserfirstlastaname)

// 1) Turn an array of numbers into a total of all the numbers
const numberss = [1,2,3,5];
const totalnp = numberss.reduce((acc ,curr)=>{
    return  acc=acc+ curr;
}, 0)
console.log("find sum using Reduce ", totalnp)


// // 2) Turn an array of numbers into a long string of all those numbers.
// // const numbersss = [1,2,3,5];
// // const totalnotostring = numbersss.reduce((acc ,curr)=>{
    
// //     return  acc + Number.curr ;
// // }, 0)
// // console.log("Number to string  ", totalnotostring)

// // 3) Turn an array of voter objects into a count of how many people voted
////////////////////////????????????????????????

// var voters = [
//     {name:'Bob' , age: 30, voted: true},
//     {name:'Jake' , age: 32, voted: true},
//     {name:'Kate' , age: 25, voted: false}
// ];

// const totalVoters = voters.reduce((acc, curr)=>{
//    if(acc[curr.name])
//    {
//     acc[curr.name] = ++ acc[curr.name];
//    }
//     else{
//     acc[curr.name] = 1;
//    }
//    return acc;
// }, {})
// console.log("Total Number of voters  ", totalVoters)
// // 4) Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once
// // 5) Given an array of arrays, flatten them into a single array
// // 6) Given an array of potential voters, return an object representing the results of the vote

OUTPUT : 

Simple Array  (5) [5, 1, 3, 2, 6]
Double  (5) [10, 2, 6, 4, 12]
Triple  (5) [15, 3, 9, 6, 18]
Double Array (4) [20, 40, 60, 80]
Number to String  (4) ['10', '20', '30', '40']
To Captalize  (3) ['SEJAL', 'KEYA', 'RIYA']
only name from array of objects (3) ['sejal', 'keya', 'jiya']
(5) ['80 Eligible', '2 Not Eligible', '5 Not Eligible', '16 Not Eligible', '100 Eligible']
(5) ['<h1>Angelina Jolie</h1><h2>80</h2>', '<h1>Eric Jones</h1><h2>2</h2>', '<h1>Paris Hilton</h1><h2>5</h2>', '<h1>Kayne West</h1><h2>16</h2>', '<h1>Bob Ziroll</h1><h2>100</h2>']0: "<h1>Angelina Jolie</h1><h2>80</h2>"1: "<h1>Eric Jones</h1><h2>2</h2>"2: "<h1>Paris Hilton</h1><h2>5</h2>"3: "<h1>Kayne West</h1><h2>16</h2>"4: "<h1>Bob Ziroll</h1><h2>100</h2>"length: 5[[Prototype]]: Array(0)
Odd number from Array (2) [2, 4]
sum of Array (5) [1, 2, 3, 4, 5]
number grater then or equal five (3) [63, 14, 5]
Even number from Array (2) [2, 4]
five or fewer length  (4) ['sejal', 'keya', 'jiya', 'sid']
-----------------------------
people Who Belong To TheIlluminatilength  
(3) [{…}, {…}, {…}]
0
: 
{name: 'Angelina Jolie', member: 'true'}
1
: 
{name: 'Paris Hilton', member: 'true'}
2
: 
{name: 'Bob Ziroll', member: 'true'}
length
: 
3
[[Prototype]]
: 
Array(0)
---------------
Age Grater Then Eighteen  
(2) [{…}, {…}]
0
: 
{name: 'Angelina Jolie', age: 80}
1
: 
{name: 'Bob Ziroll', age: 100}
length
: 
2
[[Prototype]]
: 
Array(0)
find sum using Reduce  11
find sum using Map  (5) ['Angelina Jolie', 'Eric Jones', 'Paris Hilton', 'Kayne West', 'Bob Ziroll']
find sum using Reduce  11


