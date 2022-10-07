// XHR using promises


const URL = "https://jsonplaceholder.typicode.com/posts";

function sendRequest(method, source){
    return new Promise((resolve, reject)=>{
        const xhr = new XMLHttpRequest;

        xhr.open(method, source);
        xhr.onload = function(){
            if(xhr.status >= 200 && xhr.status <300){
                resolve(xhr.response);
            }else{
                reject(new Error("Something went wrong"));
            }
        }

        xhr.onerror = function(){
            console.log("Network Error");
        }

        xhr.send();
    })
}

sendRequest("GET", URL)
    .then(response => {
        const data = JSON.parse(response);
        return data;
    })
    .then(data => {
        const id = data[3].id;
        return id;
    })
    .then(id => {
        const url2 = `${URL}/${id}`;
        return url2;
    })
    .then(newUrl => {
        return sendRequest("GET", newUrl);
    })
    .then(newResponse => {
        console.log(JSON.parse(newResponse));
    })
    .catch(error => {
        console.log(error);
    })