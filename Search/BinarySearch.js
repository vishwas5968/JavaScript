function binarySearch(array,value) {
    let start=0
    let end=array.length-1
    while (start <= end){
        let mid=Math.floor((start+end)/2)
        if (array[mid]===value)
            return mid
        else if (value>array[mid])
            start=mid+1
        else
            end=mid-1
    }
    return -1
}

console.log(binarySearch([1,2,3,4,5,6],4))
