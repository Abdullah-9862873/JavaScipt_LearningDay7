// Promise Resolve
// Promise Chaining

//_____________________________________________________________________

// const myPromise = Promise.resolve(5);
// myPromise.then((value) => {
//     console.log(value);
// })


// Promise.resolve will give the value of resolve 

//_____________________________________________________________________

function myPromise(){
    return new Promise((resolve, reject) => {
        resolve("foo");
    })
}

// You can give one value also and that will be the value in case of Promise resolve

// myPromise()
//     .then((value) => {
//         console.log(value);
//         value += "bar";
//         return value;
//     })
//     .then((value) => {
//         console.log(value);
//     })

// Here when I am appending a string to the value.. And returning it then it is basically returning a Promise not a string... and I can perform the function .then to the Promise

// IN this way I can form a chain


myPromise()
    .then((value) => {
        console.log(value);
        value += "bar";
        return value;
    })
    .then((value) => {
        console.log(value);
        value+= " Third value";
        return value;
    }).then((value) => {
        console.log(value);
    })