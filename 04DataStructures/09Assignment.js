
/* Write an IIFE in which you send two numbers as an argument. But in the parameter, it should receive three numbers,
   with the third one being a default parameter. Inside the function, the console log the sum of three numbers. */


   // MY Solution
//    (
//     function(a, b, c = 10){
//         console.log(a + b + c);
//     }
//    )(5, 3)

   //Solution

   (function(num1, num2, num3=55) {
    console.log(`Sum of three numbers ${num1 + num2 + num3}` );
})(23, 44);