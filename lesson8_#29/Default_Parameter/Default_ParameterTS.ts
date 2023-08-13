let sum7 = (x: number,y: number, z = false) => {
    if(z === false){
        return x + y;
    }
    if(z){
        return x - y ; 
    }
    
}

console.log(">>> check sum5 = ", sum7(2, 3), " OR", sum7(2, 3, true));

// không thể truyện hoặc ít nhất là chưa thể truyền giá trị cụ thể cho 1 tham số