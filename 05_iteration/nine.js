const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const totalVal = myNums.reduce ( function (acc,curVal){

//     console.log(` acc: ${acc} and curVal:  ${curVal}`);

//     return acc + curVal 

// },0)

// const totalVal = myNums.reduce((acc, curVal) => acc+curVal, 0)
// console.log(totalVal);

const shoppingCourse = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "python course",
        price: 3999
    },
    {
        itemName: "c++ course",
        price: 4999
    },
    {
        itemName: "ruby course",
        price: 5999
    }
]


const totalVal = shoppingCourse.reduce ( (acc,item)=> acc+item.price,0)

console.log(totalVal);

