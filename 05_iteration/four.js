const MyObject = {
      js: "javascript",
      cpp: "c++",
      rb: "ruby",
      swift: "swift by apple"
}

for (const key in MyObject) {
    // console.log(key,":-",MyObject[key]);

    // console.log(`${key} is the shortcut of ${MyObject[key]}`);
    

}

const programming = ["java","python","c++","ruby"]

for (const key in programming) {
//    console.log(programming[key]);
   
        
   } 

   const map = new Map()

map.set("IND","India")
map.set("SA","United State Of America")
map.set("FR","France")

for (const key in map) {

        console.log(map[key]);
        
    
}