// let password = prompt("please enter the Password");
// let confrimPassword = prompt("Confirm your password:");
// if (password === confrimPassword) {
//   console.log("Password Matched.Password validation Successful.");
// }
// else {
//   console.log("Password didn't match. Password validation unsuccessful");
// }

//---------------***-----------------
// Question2
// 2} Calculator
//-++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Question3
// Color Mixer

// function colormixer(color1, color2) {
//     switch (color1) {
//         case "red":
//             switch (color2) {
//                 case "blue":
//                     console.log("Purple");
//                     break;
//                 case "yellow":
//                     console.log("orange");
//                     break;
//                 default:
//                     console.log("Invalid color combination");
//                     break;

//             }
//             break;
//         case "blue":
//             switch (color2) {
//                 case "red":
//                     console.log("Purple");
//                     break;
//                 case "yellow":
//                     console.log("Green");
//                     break;
//                 default:
//                     console.log("Invalid color combination");
//                     break;
//             }
//             break;
//         case "yellow":
//             switch (color2) {
//                 case "red":
//                     console.log("Orange");
//                     break;
//                 case "blue":
//                     console.log("Green");
//                     break;
//                 default:
//                     console.log("Invalid color combination");
//                     break;
//             }
//             break;
//     }

// }
// colormixer("red","blue");
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Question5

// function HighestMarks(args){
//   let result=0;
//   for(let i=0;i< args.length; i++)
//   {
//       result = args[i]>result ?args[i]:result;
//   }
//   console.log(result);
// }
// const array=[5,6,-9,4];
// HighestMarks(array);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Question6
// Captial Letter
// function CapitalFirstLetter(str)
// {
//   let str1= str.charAt(0) === str.charAt(0).toUpperCase()?str:str.charAt(0).toUpperCase()+str.slice(1);
//   console.log(str1);

// }
// CapitalFirstLetter("lovely");
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Q8
// function CountVowel(str) {
//   const vowel =['a','e','i','o','u'];
//   var count=0;
//   for(let i=0;i<str.length;i++)
//   {
//     if(vowel.includes(str[i].toLowerCase())){
//       count++;
//     }
//   }
//   console.log(count);
// }
// CountVowel("Lovely");
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Question9
// function RemoveDuplication(args)
// {
//   const finalCart=args.filter((value , index)=>{
//     return args.indexOf(value)=== index;
//   });
//   console.log(finalCart);
// }
// RemoveDuplication([1, 2, 3, 3, 4, 4, 5]);
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Question8
// function Inverttriangle(n)
// {
//   for(let i=n;i>0;i--)
//   {
//     n--;
//     for( let j=n;j>0;j--)
//     {
//       process.stdout.write("*")
//     }
//     console.log("");

//   }
// }
// Inverttriangle(6);
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Question9;
// function CheckDivisibiltiy(arr)
// {
//   for(let i=0;i<arr.length;i++)
//   {
//     if(arr[i]%3==0 &&arr[i]%2!=0)
//     {
//       console.log(arr[i]);
//     }
//   }
// }
// CheckDivisibiltiy([2,4,15,74,5]);
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++=
// Question10
// function CorrectBag(arr)
// {
//   var array1=[];
//   for(let i=0;i<arr.length;i++)
//   {
// array1.push(arr[i]*2);
//   }
//   console.log(array1);
// }
// CorrectBag([1,2,6,9,]);
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Question11
// function Fahrenheit(celsius){
//   fahrenheit = (celsius * 1.8) + 32;
//   return fahrenheit;
// }
// console.log("Fahrenheit Temperature = " + Fahrenheit(65));
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Question12
// function calculateRentalCost(days, carType) {
//   let rentalCost = 0;

//   switch(carType) {
//     case "Economy":
//       rentalCost = 4000;
//       break;
//     case "Midsize":
//       rentalCost = 10000;
//       break;
//     case "Luxury":
//       rentalCost = 20000;
//       break;
//     default:
//       console.log("Invalid car type entered.");
//       break;
//   }

//   return rentalCost * days;
// }
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++==
// Question13
// function BillPay(dishCost, NumberOfPerson)
// {
//   let totalBill = dishCost*NumberOfPerson;
//   let billPerPerson = dishCost/NumberOfPerson;
//   console.log("Total Bill :" + totalBill + " Bill Per Person :" +billPerPerson);
// }
// BillPay(200,4);
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// question14


// function TotalPrice(cart){
// let totalSum=0;
// cart.forEach((element) => {
//   totalSum += element.objPrice * element.quantity;
// });
// console.log(totalSum);
// }
// let cart=[{objPrice:4,quantity:2},
//   {objPrice:4,quantity:2},
//   {objPrice:4,quantity:2},
//   {objPrice:4,quantity:2}
  
// ]
// TotalPrice(cart);
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Question15

// function TotalSave(cart){
// let totalSum=0;
// cart.forEach((element) => {
//   totalSum += (element.objPrice/element.DiscountPercentage)*100;
// });
// let totalSaveMoney=Number(totalSum.toFixed(2));
// console.log(totalSaveMoney);
// }
// let cart=[{objPrice:900,DiscountPercentage:35},,
//   {objPrice:500,DiscountPercentage:15},
//   {objPrice:800,DiscountPercentage:20},
//   {objPrice:300,DiscountPercentage:10},
  
// ]
// TotalSave(cart);
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Question16
// (function() {
//   const randomInt = Math.floor(Math.random() * 100) + 1;

// console.log(randomInt);
// })();

