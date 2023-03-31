// function add(a, b) {
//     return (a+b);
// }
// console.log(add(2,3))

function add(a, b, callback){
    callback(a+b);
}

// function print(c){
//     console.log(c);
// }

// add(1, 2, print); 

// add(3,2, function(c){
//     console.log(c)
// });

// add(3,2, (c)=>{
//     console.log(c)
// })

// add(3,7, (c) => console.log(c)) // inline function


// var a = 10;
// if(true){
//     var a = 20;
//     console.log(a);
// }

// console.log(a)

var a = 5
if (true) {
    let a = 10;
    console.log(a)
}
console.log(a)