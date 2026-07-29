console.log("-------LEARNING_______SEARCHING------------")

const nums = [-4, 5, 12, 34, 121, 144]

function searchElements(arr, target) {
    let left = 0
    let right = arr.length - 1
    while (left <= right) {
        const mid = Math.floor((left + right) / 2)
        if (arr[mid] == target) return mid
        if (arr[mid] > target) {
            right = mid - 1
        }
        else {
            left = mid + 1
        }



    }
    return -1
}


console.log(searchElements(nums, 5))