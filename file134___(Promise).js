// Promise means ke future mein koi value aye gi iss mein

//Promise is a constructor which has executer

// It returns a value 

// const bucket = ['coffee', 'chips', 'vegetable', 'salt', 'rice'];

// const friedRicePromise = new Promise((resolve, reject) => {
//     if(bucket.includes("vegetable") && bucket.includes("salt") && bucket.includes("rice")){
//         resolve("Fried Rice");
//     }
//     else{
//         reject("Can't make it because all ingredients are not present");
//     }
// });

// friedRicePromise.then(
//     // When promise is resolved
//     (abc)=>{
//         console.log("Let's eat ", abc);
//     },
        // When promise is rejected
//     (rejection) => {
//         console.log(rejection);
//     }
// )

//_____________________________________________________________________________________________

// We can show it in form of error too

// const bucket = ['coffee', 'chips', 'vegetable', 'rice'];

// const friedRicePromise = new Promise((resolve, reject) => {
//     if(bucket.includes("vegetable") && bucket.includes("salt") && bucket.includes("rice")){
//         resolve("Fried Rice");
//     }
//     else{
//         reject(new Error("Can't make it because all ingredients are not present"));
//     }
// });

// friedRicePromise.then(
//     // Value of resolve
//     (abc)=>{
//         console.log("Let's eat ", abc);
//     },
//     (rejection) => {
//         console.log(rejection);
//     }
// )

//____________________________________________________________________________________________________

// First value to .then is the value of resolve and the second value of .then is the value of reject

// reject value can be catched using .catch

// const bucket = ['coffee', 'chips', 'vegetable', 'rice'];

// const friedRicePromise = new Promise((resolve, reject) => {
//     if(bucket.includes("vegetable") && bucket.includes("salt") && bucket.includes("rice")){
//         resolve("Fried Rice");
//     }
//     else{
//         reject("Can't make it because all ingredients are not present");
//     }
// });

// friedRicePromise.then(
//     // Value of resolve
//     (abc)=>{
//         console.log("Let's eat ", abc);
//     }).catch(
//         (rejection) =>{
//             console.log(rejection);
//         }
//     )

//_____________________________________________________________________________________________________________

// Following thing will tell you that the Promise is Asynchronuc

console.log("Script Start");

const bucket = ['coffee', 'chips', 'vegetable', 'rice'];

const friedRicePromise = new Promise((resolve, reject) => {
    if(bucket.includes("vegetable") && bucket.includes("salt") && bucket.includes("rice")){
        resolve("Fried Rice");
    }
    else{
        reject("Can't make it because all ingredients are not present");
    }
});

friedRicePromise.then(
    // Value of resolve
    (abc)=>{
        console.log("Let's eat ", abc);
    }).catch(
        (rejection) =>{
            console.log(rejection);
        }
    );

    console.log("Script end");

// Output is:
// Script Start
// Script end
// Can't make it because all ingredients are not present

//________________________________________________________________________________________________

// The Promises are handled by the Web Api's but when they get executed they are moved to Micro Task Queue

// The setTimeout was going to the callback queue but the promises are going to the Micro task queue after execution

// The results of Micro task queues are moved to the GEC prior to the Call Back Queue 

//_____________________________________________________________________________________________________