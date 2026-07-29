/*

// so this is a question where we have to check max consective times 1 appeared 
// so one variable will be tracking the max times happened and one will track the current 
// tracking index

so i missed one thing this is binary arr either one or zero we will track the current count and 
max count will loop through arr start with 1 then will count till current items equal to zero if 
i encounter any i will just replace max count to current count and current count as 0

*/

const nums = [1,1,0,1,1,1,0,1,1,1,1,1]


const maxConsectiveTimeOne = (nums)=>{
  let currentCount=0
  let maxCount=0
  for(let i=0;i<nums.length;i++){
    if(nums[i]===1){
        currentCount++
        maxCount=Math.max(maxCount,currentCount)
    }else{
        if(currentCount>maxCount){
            maxCount=currentCount          
        }
        currentCount=0
    }
  }
  return maxCount
}


export function runDemo(){
   const maxNumOfCount =maxConsectiveTimeOne(nums)
  console.log("Max Number of 1 appeared consectively",maxNumOfCount)
}