const prices = [7, 1, 5, 3, 6, 4,11];


// - Time Complexity - O(n^2)
// - Space Complexity - 0(1)
function maxProfitBruteForce(prices){
let maxProfit = 0;
for(let i=0;i<prices.length;i++){
    for(let j=i+1;j<prices.length;j++){
        const priceDifference = prices[j]-prices[i]
        if(priceDifference>maxProfit){
            maxProfit=priceDifference
        }
    }
}
return maxProfit ?? 0
}


// Will not work because j will be incremented 
// function maxProfitSecondWay(prices){
//     let j=0
//     let maxProfit=0
//     for(let i=j+1;i<prices.length;i++){
//        const maxDiff = prices[i]-prices[j]
//        if(maxDiff>maxProfit){
//         maxProfit=maxDiff
//        }
//        j++
//     }

//     return maxProfit
     
// }


/// Time Complexity  - O(n)
/// Space Complexity - O(1)


function maxProfitOptimized(prices){
    let min=prices[0]
    let max=0
    for(let i=1;i<prices.length;i++){
        if(prices[i]<min){
            min=prices[i]
        }else{
            max = Math.max(max,prices[i]-min)
        }
    }
    return max
}



export function runDemo() {
// const maxProfit = maxProfitBruteForce(prices)
const maxProfit=maxProfitOptimized(prices)
console.log(maxProfit)



}








