// set Timeout

// set timeout is used to set an timeout for a particular code which restricts to code to run after that timeout... It can take more time but we set the minimum time...

// You can also write 0 which is (zero millisecond)...

// Web Apis are used to handle set timeout... When the code is executed then whatever is written insdide the set timeout is given to the web api which counts the time timeout... After that time, the web api send the code to event loop... Even loop sees whether the GEC(Global Execution Context) is free or not... And when it gets free... The code is transferred from event loop to the GEC and then it is executed...

// console.log("Script Start");

// function hello(){
//     console.log("hello");
// }

// setTimeout(hello, 1000);

// for(let i=0; i<=100; i++){
//     console.log("inside for loop");
// }

// console.log("Script end");

//_____________________________________________________________________________

// console.log("Script Start");

// setTimeout(() => {
//     console.log("inside timeout");
// }, 1000);

// console.log("Script end");

//_________________________________________________________________________________

// SetTimeout return an id and we can store that id


// console.log("Script Start");

// const id = setTimeout(() => {
//     console.log("inside timeout");
// }, 1000);

// console.log(id);
// console.log("Script end");



//______________________________________________________________________________

// if we clear the id then we can tell the browser to forget about the setTimeout

console.log("Script Start");

const id = setTimeout(() => {
    console.log("inside timeout");
}, 1000);

console.log(id);
clearTimeout(id);
console.log("Script end");

// Now the timeout will not get executed