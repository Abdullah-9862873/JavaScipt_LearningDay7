// async await

//___________________________________________________________________________________________________________

// async function will always return promises
// await is used to make something wait until it gets resolved

//___________________________________________________________________________________________________________

// const URL = "https://jsonplaceholder.typicode.com/posts";

// async function getPosts(){
//     const response = await fetch(URL);
//     if(response.ok){
//         return response.json();
//     }else{
//         throw new Error("Something went wrong");
//     }
// }

// getPosts()
// .then((data) => {
//     console.log(data);
// })
// .catch((error)=> {
//     console.log("inside catch");
//     console.log(error);
// })

//___________________________________________________________________________________________________________

// Using arrow function

const URL = "https://jsonplaceholder.typicode.com/posts";

const getPosts = async()=>{
    const response = await fetch(URL);
    if(response.ok){
        return response.json();
    }else{
        throw new Error("Something went wrong");
    }
}

getPosts()
.then((data) => {
    console.log(data);
})
.catch((error)=> {
    console.log("inside catch");
    console.log(error);
})