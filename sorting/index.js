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


function selectionSort(nums){

}


