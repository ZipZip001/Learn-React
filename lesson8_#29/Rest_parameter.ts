// ... copy tất cả phần tử của mảng


//example 1
// function getTotal(...numbers: number[]): number {
//     let total = 0;
//     numbers.forEach((num) => total += num);
//     return total;
// }

// console.log(getTotal()); // 0
// console.log(getTotal(10, 20)); // 30
// console.log(getTotal(10, 20, 30)); // 60

//example 2
// function multiply(n: number,...m: number[]) {

//     // theo dỏi lặp
//     let a = m.map((x) =>{
//         console.log("check x = ", x);
//         return n * x;
//     });

//     return m.map((x)=> n*x);
// }
// console.log(">>> check multyply = ",multiply(2,5,7,9,10));


// example 3
function Greet(greeting: string, ...names: string[]) {
    return greeting + " " + names.join(", ") + "!";
}

console.log(Greet("Hello", "Steve", "Bill")); // returns "Hello Steve, Bill!"
console.log(Greet("Hello"));// returns "Hello !"