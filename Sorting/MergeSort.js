function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const middle = Math.floor(arr.length / 2);
    // console.log(" middle ",middle)
    const left = mergeSort(arr.slice(0, middle));
    // console.log(middle+" left ",middle)
    const right = mergeSort(arr.slice(middle));
    // console.log(middle+" right ",middle)
    return merge(left, right, middle);
}

function merge(left, right,mid) {
    console.log(left,right,mid)
    let result = [];

    while ( left.length && right.length) {
        if (left[0] < right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
    console.log("Sorted array:", [...result,...left,...right]);
    return [...result,...left,...right]
}

const arr = [8, 3, 1, 6, 4, 7, 2, 5];
console.log("Original array:", arr);
const sortedArr = mergeSort(arr);
console.log("Sorted array:", sortedArr);
