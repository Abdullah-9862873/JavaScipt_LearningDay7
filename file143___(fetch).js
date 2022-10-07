// fetch

// const URL = "https://jsonplaceholder.typicode.com/posts";

// fetch(URL)
// .then((response) => {
//         return response.json();
//     }
// )
// .then(data=>{
//     console.log(data);
// })
// .catch(error =>{
//     console.log("Inside catch");
//     console.log("Something went wrong");
// })

//___________________________________________________________________________________________________________________

// this fetch is only rejected when the network is not available

// But in order to make this promise reject whenever something gets wrongs like 404 error we can use ok status

// const URL = "https://jsonplaceholder.typicode.com/postssss";

// fetch(URL)
// .then((response) => {
//         return response.json();
//     }
// )
// .then(data=>{
//     console.log(data);
// })
// .catch(error =>{
//     console.log("Inside catch");
//     console.log("Something went wrong");
// })

// Here I have changed the URL's posts to postssss but it is not making the promise to go to reject

//_________________________________________________________________________________________________________________________

// const URL = "https://jsonplaceholder.typicode.com/posts";

// fetch(URL)
// .then((response) => {
//     if(response.ok){
//         return response;
//     }else{
//         throw error("Something went wrong");
//     }
// })
// .then(data=>{
//     console.log(data);
// })
// .catch(error =>{
//     console.log("Inside catch");
//     console.log("Something went wrong");
// })

//____________________________________________________________________________________________________________________

// We are adding something

const URL = "https://jsonplaceholder.typicode.com/posts";

fetch(URL, {
    method: 'POST',
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
})
.then((response) => {
    if(response.ok){
        return response.json();
    }else{
        throw error("Something went wrong");
    }
})
.then(data=>{
    console.log(data);
})
.catch(error =>{
    console.log("Inside catch");
    console.log("Something went wrong");
})