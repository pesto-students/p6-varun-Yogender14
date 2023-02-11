//  Exercise 4.1  Promise Polyfill 


function getNumber(){
    var randomNum = Math.floor(Math.random() * 100 );
    console.log(  `Random Number = ${randomNum}`);
    return randomNum;
}

function resolve(success){
    console.log(success);
}

function reject(error){
    console.log(error);
}

function divisibleBy5(getNumber , resolve , reject){
    const num = getNumber();
    if( num % 5 == 0 ){
        reject("REJECTED : The number is divisible by 5.");
    }else{
        resolve("RESOLVE : The number is not divisible by 5.");
    }
}
divisibleBy5( getNumber , resolve , reject );





// console.log("**Using Promises**")
// // getNumber() is used same as above
// // here i used same resolve and reject name but they belong to the promises not the global function
// // Don't get confused.

// const myPromise = new Promise(function(resolve , reject){
//     var num = getNumber();
//     if( num % 5 == 0 ){
//         reject("REJECTED : The number is divisible by 5.")
//     }else{
//         resolve("RESOLVE : The number is not divisible by 5.");
//     }
// });

// myPromise.then(function(successMsg){
//     console.log(successMsg);
// }).catch(function(errorMsg){
//     console.log(errorMsg);
// })