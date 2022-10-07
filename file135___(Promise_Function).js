// Promise function


function ricePromise(){
    const bucket = ['coffee', 'chips', 'vegetable', 'salt', 'rice'];
    return new Promise((resolve, reject) => {
        if(bucket.includes("vegetable") && bucket.includes("salt") && bucket.includes("rice")){
            resolve("Fried Rice");
        }else{
            reject("Couldn't make it");
        }
    })
}

ricePromise().then(
    (friedRice) => {
        console.log("Let's eat", friedRice);
    }
).catch(
    (rejection)=>{
        console.log(rejection);
    }
)

