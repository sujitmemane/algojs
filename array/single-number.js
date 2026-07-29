const nums = [4,1,2,1,2]


function findSingleInNumArr(nums){
 const hash= {}
 for(let i=0;i<nums.length;i++)
  {
    if(!hash[nums[i]]){
        hash[nums[i]]=1
    }else{
        hash[nums[i]]+=1
    }
}

for (const key in hash){
    if(hash[key]===1){
        return Number(key)
    }
}
return -1
}


export function runDemo(){
console.log("-------RUN_DEMO________")
findSingleInNumArr(nums)
}


