// let a = 300
// if (true){
//       let a = 5
//       const b = 55
//       var c = 60
//       console.log("inner a",a);


//   }
//   console.log(a);
//   console.log(b);  
//   console.log(c);


// function one() {

//   const username = "faraz"

//   function two() {

//     const website = "youtube"
//     console.log(username);

//   }
//   two()

// }
// one()

// if (true){
//   const username = "faraz"
//   if (username === "faraz"){
//     const website = "youtube"
//     console.log(username + website);
    
//   }
//   console.log(website);
  
// }
// console.log(username);

// +++++++++++++++++++++++++++++ intresting +++++++++++++++

console.log(addone(5));

function addone (num){
  return num + 1
}
console.log(addtwo(5));

const addtwo = function addtwo (num){
  return num + 1
}
