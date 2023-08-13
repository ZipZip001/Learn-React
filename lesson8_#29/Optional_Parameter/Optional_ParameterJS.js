// z là optional paramater có hoặc không đều được

let sum4 = (x, y, z) => {
    console.log(">>> check z: ", z);
    if(z){
        return x + y + z;
    }
    return x + y; // thông thường với số nếu không truyền vào sẽ là NaN or undifine 
}

console.log(">>> check sum4 = ", sum4(2, 3));

