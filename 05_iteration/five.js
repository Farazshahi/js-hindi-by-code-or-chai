const coding = ["js","ruby","java","python","cpp"]
// coding.forEach(function (item){
    // console.log(item);
    
// })

coding.forEach((item) => {
   
    // console.log(item);
    
})

function printMe (item){
    console.log(item);
    

}
function printMe (item,index,arr){
    // console.log(item,index,arr);
    

}

coding.forEach(printMe)




const MyCoding = [
    {
        languageName: "javascript",
        languageFileName : "js"
    },
    {
        languageName: "jpython",
        languageFileName : "pyu"
    },
    {
        languageName: "ruby",
        languageFileName : "rb"
    }
]

MyCoding.forEach((item) =>{

    console.log(item.languageFileName);
    

})