// Error Handling

//_____________________________________________________________________________________________________________

// Network errors are observed by the browser and we can handle them by using onerror

// If I change the posts from the URL to postss then it is an HTTP Request error and we can handle it by

// const URL = "https://jsonplaceholder.typicode.com/posts";

// const xhr = new XMLHttpRequest;

// xhr.open("GET", URL);

// xhr.onload = function(){
//     if(xhr.status >= 200 && xhr.status <300){
//         const data = JSON.parse(xhr.response);
//         console.log(data);
//     }else{
//         console.log("Status Error");
//     }
// }

// xhr.onerror = function(){
//     console.log("Network Error");
// }

// xhr.send();

//____________________________________________________________________________________________________________________

// If we want to access a response with id 4 then what we can do

const URL = "https://jsonplaceholder.typicode.com/posts";

const xhr = new XMLHttpRequest;

xhr.open("GET", URL);

xhr.onload = function(){
    if(xhr.status >= 200 && xhr.status <300){
        const data = JSON.parse(xhr.response);
        console.log(data);

        const id = data[3].id;
        const URL2 = `${URL}/${id}`;
        // console.log(URL2);

        const xhr2 = new XMLHttpRequest;
        xhr2.open("GET", URL2);

        xhr2.onload = function(){
            const data2 = JSON.parse(xhr2.response);
            console.log(data2);
        }

        xhr2.send();

    }else{
        console.log("Status Error");
    }
}

xhr.onerror = function(){
    console.log("Network Error");
}

xhr.send();

// This is making a call back hell and we must avoid it