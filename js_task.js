
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
<script>
// // https://contactmentor.com/js-function-exercises-solution/
// 1. Write a JavaScript function to print the “Hello World” message
function printMessage()
{
    console.log("Hello World !");
}
printMessage();

// 2. Write a function that returns the square of a number
function getsquare (n)
{
    return n * n;
}
console.log("Square of number ",getsquare(6));


// 3. Write a function to convert Celsius to Fahrenheit
function getFahrenheit (cel)
{
    return (cel* 9/5) +32
}
console.log("Celsius to Fahrenheit" ,getFahrenheit(0));


// 4. Write a function to find the area of a given Rectangle
function getAreaofRectangle(l,b)
{
    return l * b;
}
console.log("Area of Rectangle",getAreaofRectangle(2,4));


// 5. Write a function to find the area and perimeter of a Circle
function perimeterofCircle(r)
{
    return 2*Math.PI*r;
}
console.log("Perimeter of Circle",perimeterofCircle(25));

// 6. Write a function to reverse a number [Logic-----------]
function reverseofNumber(n)
{
    let reverse =  0;
    while(n!=0)
    {
        reverse = reverse * 10;
        reverse = reverse + n%10;
        n= Math.trunc(n/10);
    }
    return reverse;
}
console.log("Reverse of number ",reverseofNumber(25));
//6.1 Write a function to reverse a number  using Chaining the three methods together
function reverseString(str)
{
    return str.split("").reverse().join("");
}
console.log("Reverse of number ",reverseString("sejal"))



//6.2 Write a function to reverse a number  using  Decrementing For Loop
function reverseStr(str)
{       
    var newstring = "";
    for(var i=str.length-1;i>=0;i--)

    {
        newstring = newstring + str[i];
    }
    return newstring;
}
console.log(reverseStr("tejal"))

//6.3 Write a function to reverse a number  using  With Recursion

function reverseString(str) {
(str === "") ?  '' : reverseString(str.substr(1)) + str.charAt(0);
}
console.log(reverseString("tejal"))

//6.4 Write a function to reverse a number  using  With Conditional (Ternary) Operator:



//7  Count number of Vowels in String
const latters = ['a','i','e','E','U','j','A'];
const NumberofVowels = latters.filter((e)=>{
   if((e=='a'|| e=='A') || (e=='e'|| e=='E')  ||(e=='i'|| e=='I') ||(e=='o'|| e=='O')  || (e=='u'|| e=='U') )
   {
    return e.length
   }
})
console.log("Number of Vowels in aray " , NumberofVowels);



// 8. Flatten array of arrays using JavaScript reduce
const flattenArr=[[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const flatTheArray = flattenArr.reduce((acc,curr)=> acc.concat(curr))
console.log("Flatten Array " , flatTheArray);


// 9. Write a function to check if an input string is a palindrome
// 10. Write a function to calculate simple interest based on the principle amount
// 11. Write a function to calculate compound interest based on the principle amount
// 12. Write a function to generate a random number
// 13. Write a function to find Factorial of a number
// 14. Write a function to add unlimited numbers
// 15. Write a function to combine unlimited arrays
// 16. Write a function to find the count of a letter in a string
// 17. Write a function to check if a number is Prime
// 18. Write a function to swap number using two variable 
// 19. Write a function to swap number using three variable 

// https://www.w3resource.com/javascript-exercises/javascript-functions-exercises.phpprintMessage
</script>
</html>


OUTPUT :
Hello World !
Square of number  36
Celsius to Fahrenheit 32
Area of Rectangle 8
Perimeter of Circle 157.07963267948966
Reverse of number  52
Reverse of number  undefined
lajet
undefined
Number of Vowels in aray  (6) ['a', 'i', 'e', 'E', 'U', 'A']
Flatten Array  (9) [1, 2, 3, 4, 5, 6, 7, 8, 9]


https://contactmentor.com/js-function-exercises-solution/
https://www.w3resource.com/javascript-exercises/javascript-functions-exercises.php
https://t4tutorials.com/javascript-program-to-show-the-reverse-of-numbers/
https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/#:~:text=function%20reverseString(str)%20%7B%20return%20(str%20%3D%3D%3D%20'',screening%20or%20a%20technical%20interview.
// https://www.w3resource.com/javascript-exercises/javascript-functions-exercises.phpprintMessage
