const promiseOne = new Promise (function(resolve,reject){
    // do async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log("aync task is complete");
        resolve()
        
    }, 1000);
    
    
})
promiseOne.then(function(){
    console.log("promise consumed");
    
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("asnc task 2");
        resolve()
    },1000)
    
}).then(function(){
    console.log("async 2 resolved");
    
})


const promiseThree = new Promise (function(resolve,reject){

    setTimeout(function(){

        resolve({username:"faraz", email:"farazshahid2002@gmail.com"})
    },1000)

})
promiseThree.then(function(user){
    console.log(user);
    
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "hitesh", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    },1000)
})
promiseFour.then(function(user){
return user.username
}).then(function(username){
    console.log(username);
    
}).catch(function(error){
    console.log(error);
    
}).finally(function(){
    console.log("The promise is either resolved or rejected");
    
})

const promiseFive =  new Promise (function(resolve,reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    },1000)
})
 

async function consumePromiseFive(){

     try {
        const response = await promiseFive
        console.log(response);
        
        
     } catch (error) {
        console.log(error);
        
     }
}
consumePromiseFive()

// async function getAllUsers(){
//     try {
//          const response = await fetch ('https://api.github.com/users/Farazshahi')
//         //  console.log(response);
//          const data = await response.json()
//          console.log(data);
//          console.log(typeof data);
         
         
         
//     } catch (error) {
//         console.log("E!!",error);
        
//     }
// }
// getAllUsers()



fetch('https://api.github.com/users/Farazshahi')
.then(function(response){
    return response.json()
}).then(function(data){
    console.log(data);
    
}).catch(function(error){
    console.log(error);
    
})