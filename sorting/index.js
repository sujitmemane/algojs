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





function insertionSort(nums) {
    const n = nums.length;

    for (let i = 1; i < n; i++) {
        let curr = nums[i];
        let prev = i - 1;

        while (prev >= 0 && nums[prev] > curr) {
            nums[prev + 1] = nums[prev];
            prev--;
        }

        nums[prev + 1] = curr;
    }

    return nums;
}

console.log(insertionSort([5, 4, 3, 2, 1]));






console.log(insertionSort(nums))