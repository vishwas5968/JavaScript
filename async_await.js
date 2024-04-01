// async function get(){
//     console.log(await fetch("https://dummyjson.com/products/1"))
//     console.log("hello")
//     // console.log(result)
//     console.log("hello")
// }
// get()

async function processData() {
    console.log('Processing started...');
    const result = await fetch('https://dummyjson.com/products/1');
    console.log('Processing complete:', result.json());
}

processData();
console.log("hello")
