/*



*/


const nums=[3,0,1]
function missingNumber(nums){
    const n = nums.length
    const sumOfFullArr = n*(n+1)/2
    let totalSum=0
    for(let i=0;i<nums.length;i++){
        totalSum+=nums[i]
    }

    return sumOfFullArr-totalSum

}


export function runDemo(){
    console.log("----RUN_DEMO----")
    const missingNum = missingNumber(nums)
    console.log(missingNum)

}