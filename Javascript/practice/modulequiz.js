// var sum =0;
// var arr =[10,15,20,30];
// arr.forEach(function myFunction(element)
// {
//     sum = sum+element;
// });
// console.log(sum);
// var a=0;
// for(a;a<5;a++);
// console.log(a);
// var quiz=[1,2,3];  
// var js=[6,7,8];  
// var result=quiz.concat(js);  
// document.writeln(result);
// var js = 0;
// while (js < 10) 
// {
//     console.log(js);
//     js++;
// }
// var a=5 , b=1
// var obj = { a : 10 }
 

// console.log(obj.a)

// function height()
// { 
//     var  height = 120;
//     var type = (height>=190) ? "tall" : "short";
//     return type;
// }
// var a = height();
// console.log(a);
// function example(javascript)
// {
// return (javascript ?  "Yes" :  "No");
// }
// bool ans=true;
// console.log(example(ans));
// function equalto()
// {
//     const num=10;
//     if(num==="10")
//         console.log(true)
//     else
//         console.log(false)
// }
// equalto();
// var js = (function(x) {return x*x;}(10));
// console.log(js);
// var a=1;
// if(a!=null) 
//     console.log(1)
// else
//     console.log(0)
// var string1 = "PWSkills";
// var value = 20;
// alert( string1 + value );
// const pi=3.14;
// var pi=4;
// console.log(pi);
// for (var i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 1);
//   }
// var x = 5;
// var y = "5";
// console.log(x + y);
// var x;
// console.log(x); 
// x = 25;
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// function upperCaseStr(str)
// {
//   var array1 = str.split(' ');
//   var newarray=[];
//   for( var x=0 ; x <array1.length ; x++)
//   {
// newarray.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
//   }
                  
//       return newarray.join(' ');
//   }
//   console.log(upperCaseStr("the quick brown fox"));
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// const myArray = [2, 4, 6, 7, 10];

// for (let i = 0; i < myArray.length; i++) {
//   let result = myArray[i] % 2 === 0 ? myArray[i] + " is even" : myArray[i]+" is odd";
//   console.log(result);
// }
//+++================================+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function HighestMarks(args){
    let result=0;
    for(let i=0;i< args.length; i++)
    {
        result = args[i]>result ?args[i]:result;
    }
    console.log(result);
}
const array=[5,6,-9,4];
HighestMarks(array);

