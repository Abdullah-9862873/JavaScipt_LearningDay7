// callback hell to flat code using Promises

const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");

function changeText(element, text, color, time){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(element){
                element.textContent = text;
                element.style.color = color;
                resolve();
            }else{
                reject("Element not found");
            }
        }, time)
    })
};

// changeText(heading1, "one", "red", 1000)
//     .then(()=>{
//         changeText(heading2, "two", "purple", 1000)
//             .then(()=>{
//                 changeText(heading3, "three", "green", 1000)
//                     .then(()=>{
//                         changeText(heading4, "four", "cyan", 1000)
//                             .then(()=>{
//                                 changeText(heading5, "five", "blue", 1000)
//                                     .then(()=>{
//                                         changeText(heading6, "six", "hotpink", 1000)
//                                             .then(()=>{
//                                                 changeText(heading7, "seven", "yellow", 1000);
//                                             })
//                                     })
//                             })
//                     })
//             })
//     })

// Here at each point the Promise is returned

//___________________________________________________________________________

// You can also do it like

changeText(heading1, "one", "red", 1000)
.then(()=>changeText(heading2, "two", "purple", 1000))
.then(()=>changeText(heading3, "three", "cyan", 1000))
.then(()=>changeText(heading4, "four", "blue", 1000))
.then(()=>changeText(heading5, "five", "green", 1000))
.then(()=>changeText(heading6, "six", "hotpink", 1000))
.then(()=>changeText(heading7, "seven", "purple", 1000))
.catch((error)=>{
    alert(error);
})

//_____________________________________________________________