const nums = [0,1,0,3,12]

/*
The solution I am thinking we will record the current positoning of index and one 
i will be iterating over elements which checks if non zero move to the latest position once we are done with arr 
for example i am done with shifting [1,3,12,3,12] then how will i place zeroes at end
one thing is sorted relative positiong of non zero elements of arr 
swaping was also the option i forgot damn



*/


const moveZeroesToEnd = (nums)=>{
    let x=0
    for(let i=0;i<nums.length;i++){
        if(nums[i]!==0){
            [nums[x],nums[i]]=[nums[i],nums[x]]
            x++
        }
    }
}




export function runDemo(){
   console.log("Nums at start",nums)
moveZeroesToEnd(nums)
console.log("Nums at end",nums)


}