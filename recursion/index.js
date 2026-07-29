
const arr = [1,223,232,232,12,34]



function fun(num) {
  if (num < 0) return ;
  console.log("Num is", num);
  fun(num - 1);
}



function sumOfN(n){
    if(n<=0)return 0
   return  n+sumOfN(n-1)

}



function sumOfAllElementsInArr(nums,index=0){
if(nums.length===index) return 0
return nums[index]+sumOfAllElementsInArr(nums,index+1)
}


function factorialUsingRecursion(num){
    if(num===1) return 1
    return num * factorialUsingRecursion(num-1)
}
/*

so we get a number we need to find out is number power of 2 for example we got num 
12 we need to get the base raise to - 2^0,2^1,2^2,^3 -> 12/2 
ohk got one hint if any power dividing by itself it will reach or equal to one point of time 


*/

function isPowerOf2(num) {
    if (num === 0) return false;
    if (num === 1) return true;

    if (num % 2 !== 0) return false;

    return isPowerOf2(num / 2);
}


/*
so in above question what will happen that 
5 will go inside and it will return 5+sum(4)
then code will xecut with sum(4) = 4+sum(3)
then sum(3) = 3+sum(2)



*/


export function runDemo() {
  console.log("Recursion demo started");
//   fun(5);
//   const sum = sumOfN(5)
//   console.log(sum,"Sum of N")
// const sum = sumOfAllElementsInArr(arr)
// console.log(sum)
// console.log("Recursion demo ended");
// const factorial = factorialUsingRecursion(5)
// console.log(factorial)
const isPower2 =isPowerOf2(8)
console.log(isPower2,"Is Power 2")
}

runDemo();