// z là optional paramater có hoặc không đều được

let sum5 = (x: number, y: number, z?: number) => {
    if(z){ // nếu có z
        return x + y + z;
    }
    return x + y ; // không z
}

console.log(">>> check sum5 = ", sum5(2, 3));