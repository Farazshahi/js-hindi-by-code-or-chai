 const course = {
    coursename :"js in hindi",
    fee : "999",
    courseInstructor : "hitesh"

 }

// console.log(course.courseInstructor)

// const{courseInstructor}= course // you can chng name also if nams look big
const {courseInstructor: instructor}= course 

console.log(instructor);

