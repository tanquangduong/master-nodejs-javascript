// function doStuff(data, callback) {
//     callback("done")
// }

// doStuff(true, (result)=>console.log(result))

function doStuff(data) {
    return new Promise((resolve, reject)=>{
        let successMessage = {
            status: "success",
            message: "All is well"
        };
        let errorMessage = {
            status: "Error",
            message: "Oops. There is an error!"
        };

        if (typeof data === 'boolean' && data === true){
            resolve(successMessage);
        } else {
            reject(errorMessage);
        }
    });
};

doStuff(false).then(
    (successMessage) => {
        console.log(successMessage);
    },
    (errorMessage) => {
        console.log(errorMessage);
    }
)