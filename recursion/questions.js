// Factorial Of Number
const nums = [1,2,3,4,5]

function factorialOfNum(num){
    if(num===0)return 1
    return num*factorialOfNum(num-1)
}


// Sum of elememnts of arr
function sumOfElementsOfArr(nums,index=0){
    if(nums.length===index)return 0
    return nums[index] + sumOfElementsOfArr(nums,index+1)
 
}


// Reverse a string using recursion

function reverseAString(string,index){
    if(index<0) return ""
    return string[index]+reverseAString(string,index-1)

}





function checkPalindrome(string,left=0,right=string.length-1){
    if(left>=right){
        return true
    }
    if(string[left]!==string[right])return false
    return checkPalindrome(string,left+1,right-1)
}







// const factorial = factorialOfNum(5)
// console.log(factorial)


// const sum = sumOfElementsOfArr(nums)
// console.log(sum)



// const reverse = reverseAString("sujit",4)
// console.log(reverse)



const check = checkPalindrome("aaa")
console.log(check)