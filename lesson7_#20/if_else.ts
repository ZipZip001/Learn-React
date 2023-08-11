let age : number = 0;
let ifName : string = 'hello';

// if you don't add condition it will auto change to boolean => Boolean(age) on it

if (age){
    console.log("You have create xuatphat18@gmail.com email ");
}
else{
    console.log("You only have 1 email");
}


let discount: number;
    let itemCount = 11;
    if (itemCount > 0 && itemCount <= 5) {
        discount = 5;  // 5% discount
    } else if (itemCount > 5 && itemCount <= 10) {
        discount = 10; // 10% discount
    } else {
        discount = 15; // 15%
    }
 console.log(`You got ${discount}% discount. `);