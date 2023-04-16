// //<script src="node-calendar.js"></script>// install
//npm install node-calendar
 var calendar = require('node-calendar');
    const leapeyear=calendar.isleap(2023);
    console.log("year 2023 is leap year or not : " + leapeyear);
// const leapdays=calendar.leapdays(2013,2023);
// console.log("leapdays between two year 2013-2023 : " +leapdays);
// const monthrange=calendar.monthrange(2023,2);
// console.log("month range of 2023 Fab : " +monthrange);
// const dayname=calendar.setlocale();
//                 calendar.day_name;
//                 console.log(dayname);



//using getday() date into day
// const weekday=['Sunday','Monday','Tuesday','Wednesday','Thursday','Firday','Saturday'];
// const date=new Date('March 19 ,2023 23:15:30');
// const datetoday=weekday[date.getDay()];
// console.log(datetoday);

//program to generate fibonacci series up to n terms

//take input from the user
// const number = '10';
// let n1 = 0, n2 = 1, nextTerm;

// console.log('Fibonacci Series:');

// for (let i = 1; i <= number; i++) {
//     console.log(n1);
//     nextTerm = n1 + n2;
//     n1 = n2;
//     n2 = nextTerm;
// }

//even

// console.log(" even number serise :" );
// for(var i=0;i<10;i++)
// {
//     if(i % 2 == 0) {
//         console.log(i);
//     }
    
// }

// //odd
// console.log(" odd number serise :" );
// for(var i=0;i<10;i++)
// {
//     if(i % 2 == ! 0) {
//         console.log(i);
//     }
    
// }


 

// program to convert first letter of a string to uppercase

// const string = "convert first letter to uppercase"
// const arr=string.split(" ");



//     for(var i=0;i<arr.length;i++)
//     {
//         arr[i]=  arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        
//     }
//   const result = arr.join(" ");
//   console.log(result);


//function take take data and no of days as argument and return day and date

var date=new Date(2013,11,15);
var newdate=date.setDate(date.getDate() + 10);
console.log((date.toISOString()).slice(0,10));

//to add month 
//var month=new Date();
//var newmonth=month.setMonth(date.getMonth() + 10);
//console.log(newmonth);

//to add year 
//var year=new Date();
//var newyear=year.setFullYear(date.getFullYear() + 10);
//console.log(newyear);