function doSomething(i) {
    return new Promise((resolve, reject)=>{
        resolve(i)
    })
}

async function process(array) {
    for (const i of array) {
        await doSomething(i).then((val)=>{
            console.log(i)
        });

    }
    console.log("end")
}
process([1,2,3])

console.log("end 2")
