// thay vi any dung tat ca nhu nayTyoe

function addNumberOrString (a: number | string, b: number | string){
    if(typeof a === 'number' && typeof b === 'number'){
        return a + b;
    }
    if(typeof a === 'string' && typeof b === 'string'){
        return a.concat(b);
    }
    throw new Error('Paramenters must be numbers or strings');
}

console.log(">>> check: ",addNumberOrString("haha"," is a number") );

// dich loi khi complie -> dich code