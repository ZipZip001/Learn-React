type minhType = number | String

function addNOrS(a: minhType, b: minhType){
    if(typeof a === 'number' && typeof b === 'number'){
        return a + b;
    }
    if(typeof a === 'string' && typeof b === 'string'){
        return a.concat(b);
    }
    throw new Error('Paramenters must be numbers or strings');
}

console.log(">>> check: ",addNOrS("haha"," is a number") );