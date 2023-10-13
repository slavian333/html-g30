'use strict';

// js script
// window.alert("Hello from js file")

/* used for documentation to comment several rows */

var res = 2 + 2;
console.log(typeof(res));

// alert(res); function calls the pop up and returns a rusult

let a = 55;
let b = 77;
const test234_test_test$ = 'hello';
let _test = "";
let $_test = "";
let A = 55;

// only digits cannot be an indificator(variable)

const city = "Kyiv";

{
    let a = "hello";
    let b = "world";

    // alert(a + b)

    const city = "LA";

    // alert(res);
    res = "it's timeee";
    // alert(res);
}

// city = "LA";

// alert(a + b)

function add(x,y) {
    return x + y;
}

function hello(){
    console.log("Hello world");
}
hello(); // command call function and show it in console

console.log(add(4.8 , 4.07));
console.log(Math.cos(0));

console.log(typeof(hello));
console.log(typeof(res));

let RES = null;
console.log(typeof(RES));

console.log(typeof(UNDEFINED));

console.log(3 != 1);

// task start
let x, y, z, o;
x = 7;
y = 9;
o = '-';

if (o == '+') {
    z = x + y;
}

else if (o == '-'){
    z = x - y;
}

else if (o =='*'){
    z = x * y;
}

else {
    console.log("unknown operation");
}

console.log("result = " , z)

// end

// calculator

switch (prompt("Enter operator:")) {
    case "+":   alert("x + y ="+(x+y)); break;
    case "-":    alert("x - y ="+(x-y)); break;
    case "*":    alert("x * y ="+(x*y));
    case "/":    alert("x / y ="+(x/y)); break;
    default:     alert("Непевна операція!"); break;
 }
 