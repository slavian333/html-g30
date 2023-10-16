let obj = {
    key: "hello",
    numb: 123,
    'my key': "Hello world",
    test: function*() {
        return "this is test";
    }
}

let tst = obj.test();

console.log(obj);

console.log(obj.key); // 7 and 8 have the same result
console.log(obj['key']); 

console.log(obj['my key']); // but here we can use value with space
console.log(obj.numb);
console.log(typeof(obj));

console.log(obj.test()); // 18 and 19 are same 
console.log(tst);

console.log(window); // many attributes including document. it's possible to call each
console.log(window.document); // document content is displayed(DOM)
console.log(window.document.body) // possible to call unique elements of doc displayed below
console.log(window.document.head)
console.log(window.document.title)

console.log(document.all); // all document strucure is displayed(DOM)
console.log(document.all[55]); // displayes element in 55 row of html code

//document.all[55].innerText = "Hello DOM!"; // changed value of 55th element(h2 tag)

console.log(document.querySelectorAll('h2')); //displ all h2 tags

let h2_collection = document.querySelectorAll('h2');
console.log(h2_collection[2]); // displ 2nd element of h2 tag
//h2_collection[2].innerText = "Hello item 2"; // change value of found element

let product_collection = document.querySelectorAll('.product');
console.log(product_collection);

let product_collection_1 = document.getElementsByClassName('product'); // do the same as 41 row
console.log(product_collection_1[2]);

let h2_first = document.querySelector('h2');
console.log(h2_first);

// toggler
console.log(toggler);

let this_toggler = document.getElementById('toggler');
console.log(this_toggler);

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

//

function main() {

    const totalInWishlist = document.getElementById('total_in_wishlist');
    const totalInCart = document.getElementById('total_in_cart');

    let addToWishList = document.querySelector('.add-to-wishkist');
    let addToCart = document.querySelector('.add-to-cart');


    const changeStyle = (item) => item.classList.add(["not-empty"]);
    // console.log(totalInWishlist.innerText)
    // console.log(totalInWishlist.innerText + 1 == true)

    addToWishList.addEventListener('click', function() {
        // totalInWishlist.style.color = "red";
        // totalInWishlist.style.cssText = "color:red; opacity:1; font-weight:700";
        // totalInWishlist.className = 'not-empty'; // class is discribed in css file
        if (!+totalInWishlist.innerText) {
            // console.log(totalInWishlist.innerText)
            changeStyle(totalInWishlist); // same as in 68-69
        }
        totalInWishlist.innerText = ++totalInWishlist.innerText;
    });

    addToCart.addEventListener('click', function() {

        if (!+totalInCart.innerText) {
            // console.log(totalInWishlist.innerText)
            changeStyle(totalInCart); 
        }
        totalInCart.innerText = ++totalInCart.innerText;
    });
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => main())
}

else {
    main();
}