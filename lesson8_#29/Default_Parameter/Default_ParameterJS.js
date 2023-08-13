let sum6 = (x, y, z = false) => {
    if(z === false){
        return x + y;
    }
    if(z){
        return x + y + z; 
    }
    
}

console.log(">>> check sum5 = ", sum6(2, 3), " OR", sum6(2, 3, 9));