let student = {
    firstName: "Quang",
    lastName: "Duong",
    age: 35,
    hobbies: ['reading', 'painting', 'programming'],
    email: "tquangbk@gmail.com",
    website: "academy.tanmax.com"
}

// let firstName = student.firstName
// let lastName = student.lastName

// let {firstName: fName, lastName, nickName = "Not provided", ...details} = student;

// console.log(fName)
// console.log(lastName)
// console.log(nickName)
// console.log(details)

let arr = [10, 20, 30, 40, 50, 60, 70, 80]
let [num1, num2, , num4, num5 = 0, ...numbers] = arr

console.log(num1)
console.log(num2)
console.log(num4)
console.log(num5)
console.log(numbers)