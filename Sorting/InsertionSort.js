function insertionSort(array){
    let n=array.length
    for (let i = 1; i < n; i++) {
        let key=array[i]
        let j=i-1
        while (j>=0 && array[j]>key){
            array[j+1]=array[j]
            j = j-1
        }
        array[j+1]=key
    }
}

let n=[8,5,1,6,2,4]
insertionSort(n)
console.log(n)