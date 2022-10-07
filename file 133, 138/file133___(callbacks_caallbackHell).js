

const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");


// Callback hell and Pyramid of Doom

// setTimeout(()=>{
//     heading1.textContent = "one";
//     heading1.style.color = "violet";

//     setTimeout(()=>{
//         heading2.textContent = "two";
//         heading2.style.color = "purple";

//         setTimeout(()=>{
//             heading3.textContent = "three";
//             heading3.style.color = "red";

//             setTimeout(()=>{
//                 heading4.textContent = "four";
//                 heading4.style.color = "pink";

//                 setTimeout(()=>{
//                     heading5.textContent = "five";
//                     heading5.style.color = "green";

//                     setTimeout(()=>{
//                         heading6.textContent = "six";
//                         heading6.style.color = "blue";

//                         setTimeout(()=>{
//                             heading7.textContent = "seven";
//                             heading7.style.color = "brown";
//                         }, 1000)

//                     }, 3000)
//                 }, 1000)
//             }, 2000)
//         }, 2000)
//     }, 2000)
// }, 1000)


//__________________________________________________________________________

// function changeText(element, text, color, time, callback){
//     setTimeout(()=>{
//         if(element){
//             element.textContent = text;
//             element.style.color = color;

//             if(callback){
//                 callback();
//             }
//         }else{
//             console.log("Element does not exist");
//         }
//     }, time)
// };

// changeText(heading1, "one", "purple", 1000, ()=>{
//     changeText(heading2, "two", "green", 2000, ()=>{
//         changeText(heading3, "three", "red", 1000);
//     });
// });

//__________________________________________________________________


// callback hell and pyramid of doom

function changeText(element, text, color, time, onSuccessCallback, onFailureCallback){
    setTimeout(()=>{
        if(element){
            element.textContent = text;
            element.style.color = color;

            if(onSuccessCallback){
                onSuccessCallback();
            }
        }else{
            if(onFailureCallback){
                onFailureCallback();
            }
        }
    }, time)
};



// changeText(heading1, "one", "violet", 2000, ()=>{
//     changeText(heading2, "two", "purple", 2000, ()=>{
//         changeText(heading3, "three", "red", 1000, ()=>{
//             changeText(heading4, "four", "pink", 2000, ()=>{
//                 changeText(heading5, "five", "green", 1000, ()=>{
//                     changeText(heading6, "six", "blue", 1000, ()=>{
//                         changeText(heading7, "seven", "brown", 1000, ()=>{
                        
//                         }, ()=>{
//                             console.log("heading7 does not exist")})
//                     }, ()=>{
//                         console.log("heading6 does not exist")})
//                 }, ()=>{
//                     console.log("heading5 does not exist")})    
//             }, ()=>{
//                 console.log("heading4 does not exist")})    
//         }, ()=>{
//             console.log("heading3 does not exist")})    
//     }, ()=>{
//         console.log("heading2 does not exist")})    
// }, ()=>{
//     console.log("heading1 does not exist")});