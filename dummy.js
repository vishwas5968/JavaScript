let str = "Vishwas Ramesh" //sawhsiv hsemare
console.log(str.length)
// str=str+" "
let reverse = ""
let finalStr=""
console.log(str.length)
for (let i = 0; i < str.length; i++){
    reverse=str[i] + reverse
    if (str[i] == ' '||i==str.length-1) {
        if (i==str.length-1) {
            reverse=" "+reverse
        }
        finalStr = finalStr + reverse
        reverse=''
    }
}
console.log(finalStr.trim())