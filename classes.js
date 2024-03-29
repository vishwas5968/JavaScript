const x = () => {
  return new Promise((resolve, reject)=>{
      console.log("I am a promise")
      resolve("success")
      // reject("error")
  })
}

let promise=x()
promise.then((res)=>{
    console.log("promise fulfilled",res)
})
promise.catch((err)=>{
    console.log(err)
})