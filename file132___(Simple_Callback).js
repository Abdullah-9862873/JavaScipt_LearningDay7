// Simple call back functions


function getTwoNumbers(num1, num2, onSuccess, onFail){
    if(typeof num1 === "number" && typeof num2 === "number"){
        onSuccess(num1, num2);
    }else{
        onFail();
    }
}

function success(num1, num2){
    console.log(num1 + num2);
}

function fail(){
    console.log("Wrong DataType");
    console.log("Please enter the correct datatype");
}

getTwoNumbers(2, 3, success, fail);