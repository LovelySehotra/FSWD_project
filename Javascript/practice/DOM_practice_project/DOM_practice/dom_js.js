function sayHello()
{
    return () => {
        console.log("Hello Lovely");
    }
}
let guessvalue = sayHello()
console.log(guessvalue);
guessvalue();