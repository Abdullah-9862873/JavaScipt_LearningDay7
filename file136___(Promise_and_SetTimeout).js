// I want the promise to get executed after two seconds

function myPromise(){
    return new Promise((resolve, reject) => {
            const value = true;
            setTimeout(()=>{
        
            if(value){
                console.log("Resolved");
            }else{
                console.log("Rejcted");
            }
        })
    }, 2000)
};

myPromise()
    .then((abc) => {
        console.log(abc);
    })
    .catch((bca) => {
        console.log(bca);
    })