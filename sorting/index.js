// Bubble Sort
const nums = [5,2,4,1]


/*
Time complexity of bubble sort will be
O(N^2)
*/

function bubbleSort(nums){
     const n = nums.length
     for(let i=0;i<n-1;i++){
        let swapped=false
        for(let j=0;j<n-i-1;j++){
            if(nums[j]>nums[j+1]){
                [nums[j],nums[j+1]] =[nums[j+1],nums[j]]
                swapped=true
            }

        }
        if(!swapped)break
     }
 
    return nums

}



/*
Time complexity of selection sort is O(n^2)
*/


function selectionSort(nums){
  const n = nums.length
  for(let i=0;i<n-1;i++){
    let min = i
    for(let j=i+1;j<n;j++){
        if(nums[j]<nums[min]){
            min=j
        }
    }
    if(min!==i){
        [nums[min],nums[i]]=[nums[i],nums[min]]
    }
  }
  return nums
}

console.log(selectionSort(nums))


