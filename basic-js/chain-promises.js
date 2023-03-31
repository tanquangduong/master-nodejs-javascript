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

doStuff(true).then (
    ()=>{
        let a = false;
        console.log("First doStuff resolved");
        return doStuff(a);
    }
).then(
    ()=>{
        console.log("Second doStuff resolved");
    }
).catch(
    ()=>{
        console.log("An error occured")
    }
)