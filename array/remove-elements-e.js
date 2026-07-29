
function removeElements(arr,val) {
    let x=0;
    for (let i=0;i<arr.length;i++){
        if(arr[i]!=val){
            arr[x]=arr[i]
            x++
        }
    }
    console.log(arr)
    return x

}

    

export function runDemo() {
  const sample = [1, 2, 2, 3, 4, 4, 5];
  console.log('Input:', sample);
  console.log('Output:', removeElements(sample, 2));
}
