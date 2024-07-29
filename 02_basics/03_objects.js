// singleton
// Object.create

// object litrals
const mySym1 = Symbol("key1")

const jsUser = {
    name:"faraz",
    [mySym1]:"myKey1",
    "full name": "Faraz Shahid",
    email:"farazshahid2002@gmail.com",
    add:"tori amma ka ghr",
    isLoggedIn: false
}
console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["full name"]);
// console.log(jsUser.full name);// if key are written in commas you cnt accs the value through dot(.)
console.log(j sUser[mySym1]);
console.log(typeof jsUser[mySym1])
console.log(jsUser)
jsUser.greetingtwo = function (){
    console.log(`hello jsuser, ${this.name}`);
}
console.log(jsUser.greetingtwo());
Object.freeze(jsUser);