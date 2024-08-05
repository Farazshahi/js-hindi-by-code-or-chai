// function calculateCartPrice (num1){
//     return num1
// }
// console.log(calculateCartPrice(2));
// function calculateCartPrice (...num1){
//     return num1
// }
// console.log(calculateCartPrice(2,500,600));
// function calculateCartPrice (val1,val2,...num1){
//     return num1
// }
// console.log(calculateCartPrice(2,500,600,800,900));

const user = {
    username : "faraz",
    price : 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

// handleObject(user)
handleObject({
    username : "faraz",
    price : 399
})

const newArray = [200,400,600]

function returnSecondValue(getArray){

    return getArray[1]
}
console.log(returnSecondValue(newArray));
console.log(returnSecondValue([200,400,600]));
