// Q1 :-Write a function in JavaScript called isPalindrome that takes a string as an argument and returns true if the string is a palindrome (reads the same forwards and backwards), and false otherwise.
var str = "raddar" 
var checkthepalindrome = str.split("")
var reverse = checkthepalindrome.reverse("") 
var j = reverse.join("")
console.log(checkthepalindrome);
console.log(reverse);
console.log(j)

// Q2:-Write a function in JavaScript called reverseArray that takes an array as an argument and returns a new array with the elements in reverse order.

// var a =[1,2,3,4,5,6]
// var newarray=[];
// for (i=0;i<a.length;i++)
// {
//     for(j=1;j<a.length;j-1)
//     {
//     }

// }

// Q3:-Write a function in JavaScript called removeDuplicates that takes an array as an argument and returns a new array with duplicate elements removed.

var a =[1,2,3,3,4,6,7]
var target = 3;
var b

for(var i=0;i<a.length;i++)
{
    if(a[i] !== target)
    {
        b = a[i];
       console.log(b)
    }
}


//Q5:-Write a JavaScript function called isPrime that takes a positive integer as an argument and returns true if it's a prime number, and false otherwise.

var a =[1,3,4,5,7,9,11]
var tar = 4
for(var i=0;i<a.length;i++)
if(a[i] !== 4 )
{
    console.log("Its is Prime Number");
}
else
{
    console.log("Not the Prime Number")
}

//Q6:-Write a JavaScript function called calculateFactorial that calculates the factorial of a number

var a = 4;
var fact = a-1;
var value
for(var i=0;i<a;i++)
{
    value = fact*4
} console.log(value)


