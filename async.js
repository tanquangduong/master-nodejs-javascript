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

add(3,7, (c) => console.log(c)) // inline function