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

 /* object */
 
 let obj = {
    key: "hello",
    
 }

 console.log(obj);
 console.log(typeof(obj));

 // let obj = {
//     key: "hello",
//     numb: 123,
//     'my key': "Hello world",
//     test: function*() {
//         return "this is test";
//     }
// }

// let tst = obj.test();

// console.log(obj);

// console.log(obj.key); //both have the same result
// console.log(obj['key']); 

// console.log(obj['my key']); // but here we can use value with space
// console.log(obj.numb);
// console.log(typeof(obj));

// console.log(obj.test()); // 18 and 19 are same 
// console.log(tst);

// console.log(window); // many attributes including document. it's possible to call each
// console.log(window.document); // document content is displayed(DOM)
// console.log(window.document.body) // possible to call unique elements of doc displayed below
// console.log(window.document.head)
// console.log(window.document.title)

// console.log(document.all); // all document strucure is displayed(DOM)
// console.log(document.all[55]); // displayes element in 55 row of html code

// //document.all[55].innerText = "Hello DOM!"; // changed value of 55th element(h2 tag)

// console.log(document.querySelectorAll('h2')); //displ all h2 tags

// let h2_collection = document.querySelectorAll('h2');
// console.log(h2_collection[2]); // displ 2nd element of h2 tag
// //h2_collection[2].innerText = "Hello item 2"; // change value of found element

// let product_collection = document.querySelectorAll('.product');
// console.log(product_collection);

// let product_collection_1 = document.getElementsByClassName('product'); // do the same as 41 row
// console.log(product_collection_1[2]);

// let h2_first = document.querySelector('h2');
// console.log(h2_first);

// // toggler
// console.log(toggler);

// let this_toggler = document.getElementById('toggler');
// console.log(this_toggler);

//

// const totalInWishlist = document.getElementById('total_in_wishlist');
// const totalInCart = document.getElementById('total_in_cart');

// let addToWishList = document.querySelector('.add-to-wishkist');
// let addToCart = document.querySelector('.add-to-cart');


// const changeStyle = (item) => item.classList.add(["not-empty"]);
// // console.log(totalInWishlist.innerText)
// // console.log(totalInWishlist.innerText + 1 == true)

// addToWishList.addEventListener('click', function() {
//     // totalInWishlist.style.color = "red";
//     // totalInWishlist.style.cssText = "color:red; opacity:1; font-weight:700";
//     // totalInWishlist.className = 'not-empty'; // class is discribed in css file
//     if (!+totalInWishlist.innerText) {
//         // console.log(totalInWishlist.innerText)
//         changeStyle(totalInWishlist); // same as in 68-69
//     }
//     totalInWishlist.innerText = ++totalInWishlist.innerText;
// });

// addToCart.addEventListener('click', function() {

//     if (!+totalInCart.innerText) {
//         console.log(totalInWishlist.innerText)
//         changeStyle(totalInCart); 
//     }
//     totalInCart.innerText = ++totalInCart.innerText;
// });

// let arr = [1,2,,,'test',,['hello', 'World'],{name: 'john', last_name: 'doe'},3]; // [number, string, masive, obj,...]
// console.log(arr[0]); // 1st obj.
// console.log(arr[3]);
// console.log(arr[arr.length - 1]); // last obj.
// console.log(arr.length);

// const arr1 = "1, First st., Kyiv".split(','); // split has a separator value so a system understands that value in "..." is masive
// console.log(arr1);

// CYCLES

// for (let i = 0; i <arr.length; i++) {
//     console.log(arr[i]);
// }

// let i = 0;
// while (i < arr.length) {
//     console.log(arr[i]);
//     i++;
// }

// let i = 0;
// do {
//     console.log(arr[i]);
//     i++;
// } while (i < arr.length) 

//

// let firstName = 'John',
//     lastName = 'Doe';

// let greeting = `Hi ${firstName}, ${lastName}`;
// console.log(greeting); // Hi John, Doe

// const contactSidebar = document.querySelector('.contact-sidebar');