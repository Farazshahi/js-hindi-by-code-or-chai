//const tinderUser = new Object() singleton object 

const tinderUser = {}

tinderUser.id = "123abc",
    tinderUser.name = "sammy",
    tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "somelodalsm@mail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "khan",
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = { 1: "a", 2: "b", 3: "c" }
const obj2 = { 4: "a", 5: "b", 6: "c" }
const obj3 = { 7: "a", 8: "b", 9: "c" }

const obj4 = { obj1, obj2, obj3 }
console.log(obj4);
const obj5 = Object.assign({ obj1, obj2, obj3 })
console.log(obj4);
const obj6 = { ...obj1, ...obj2, ...obj3 }
console.log(obj6);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty(`isLoggedIn`));
console.log(tinderUser.hasOwnProperty(`isLogged`));

