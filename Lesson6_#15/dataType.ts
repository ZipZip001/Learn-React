function handleException (errMessage: string):never {
    throw Error(errMessage);
}

function runInfinity(): never {
    console.log(">> run inside runInfinity");
    while (true) {
        // console.log("running... ")
    }
}

// handleException("Just a test err");
let a = runInfinity();
console.log(">>> check a: ", a);