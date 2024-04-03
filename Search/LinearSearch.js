function linearSearch(array,element) {
    for (let i = 0; i < array.length-1; i++) {
        if (array[i]===element){
            return i
        }
    }
    return -1
}

console.log(linearSearch([1,2,3,7,0,4,5,6],4))