// //1
// let promis1 = new Promise(function(resolve,reject){
//     resolve("Resolved successfull...");
// });
// promis1.then((msg)=>{
//     console.log(msg);
// })

//2
// let promis2 = new Promise(function(resolve,reject){
//     reject(new Error("Rejected!!!"));
// });
// promis2.catch((value) => {
//     console.log(value);
// })
// console.log("Hello")
//
//
// //3
// let solution = new Promise((resolve,reject)=>{
//     if(resolve){
//         resolve("Resolved");
//     }else{
//         reject("Rejected");
//     }
// });
// solution.then((result)=>{
//     console.log(result);
// }).catch((result)=>{
//     console.log(result);
// })
//
// //4
// let sum = new Promise((resolve,reject)=>{
//     return resolve(3);
// });
// sum.then((result)=>{
//     return result+=3;
// }).then((value) => {
//     return value+=10;
// }).then((value) => {
//     value+=4;
//     console.log(value);
// })

//5
// async function sqr(a){
//     return new Promise((resolve, reject)=>{
//         console.log(a*a);
//         resolve();
//     })
// }
// sqr(2).then((res)=>{
//     sqr(3).then((res)=>{
//         sqr(4).then(()=>{})
//     })
// })
// async function call () {
//     await sqr(2)
//     await sqr(3)
//     await sqr(4)
// }
// call()

// Function to fetch data from a specified URL
function fetchData(url) {
    return new Promise((resolve, reject) => {
        // Using fetch to make an HTTP GET request
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                // Parse the JSON response and return it
                return resolve(response.json());
            })
            .catch(error => {
                // If any error occurs during the process, reject the promise with the error
                reject(error);
            });
    });
}

// Example usage:
const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1'; // Sample API endpoint
fetchData(apiUrl)
    .then(data => {
        console.log('Data fetched successfully:', data);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
