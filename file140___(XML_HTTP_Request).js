// XHR ---> XML(Extensible Markup Language) HTTP Request


//_______________________________________________________________________________________


// const URL = "https://jsonplaceholder.typicode.com/posts";

// const xhr = new XMLHttpRequest;
// // console.log(xhr);
// console.log(xhr.readyState);

// xhr.open("GET", URL);
// console.log(xhr.readyState);

// xhr.send();
// console.log(xhr.readyState);

// // xhr.onreadystatechange = function(){
// //     console.log(xhr.readyState);
// // }

//_______________________________________________________________________________________

// const URL = "https://jsonplaceholder.typicode.com/posts";

// readystate has values from 0 to 4 you can search "xhr readystate mdn".... When the readystate is 4 that means the function is done

// If we want to store the response then we do the following

// const xhr = new XMLHttpRequest;

// xhr.open("GET", URL);

// xhr.onreadystatechange = function(){
//     if(xhr.readyState === 4){
//         const response = xhr.response;
//         // We are getting the resonse as strings... You can look at by typeof
//         // Now we have to convert it to JSON
//         const data = JSON.parse(response);
//         console.log(data);
//         console.log(typeof data);
//     }
// }

// xhr.send();

//_______________________________________________________________________________________________________

// We don't have to check for the if condition that when the readystate become 4 then do the work... We can simply use onLoad when works when the readystate becomes 4

const URL = "https://jsonplaceholder.typicode.com/posts";

const xhr = new XMLHttpRequest;
xhr.open("GET", URL);

xhr.onload = function(){
    const response = xhr.response;
    const data = JSON.parse(response);
    console.log(data);
}

xhr.send();