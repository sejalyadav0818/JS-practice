
//program to generate fibonacci series up to n terms

//take input from the user
const number = '10';
let n1 = 0, n2 = 1, nextTerm;

console.log('Fibonacci Series:');

for (let i = 1; i <= number; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}

//even

console.log(" even number serise :" );
for(var i=0;i<10;i++)
{
    if(i % 2 == 0) {
        console.log(i);
    }
    

}

//odd
console.log(" odd number serise :" );
for(var i=0;i<10;i++)
{
    if(i % 2 == ! 0) {
        console.log(i);
    }
    
}

//string serise 
let alphabet;

for(i=9,alphabet='';++i<36;){
    alphabet += i.toString(36);
}

// abcdefghijklmnopqrstuvwxyz
console.log(alphabet + "\n");

//factoral serise 


function factorial(n) {
    if (n == 0) return 1;
    return n * factorial(n - 1);
  }
  console.log("factorial serise :");

  for(var num=0;num<10;num++)
{
  console.log(factorial(num));  
}
  
   