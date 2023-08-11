// enum giống constant 
// enum dùng tốt với java vì java cũng có cái đó

enum API_STATUS {
    PENDDING, FULFILLED, REJECTED // PROMISE
}

let doing1 = API_STATUS.FULFILLED;
let doing0 = API_STATUS.PENDDING;

console.log(">>> a1 = ", doing0, "a2 = ", doing1);
