export function removeDuplicates(values) {
//   if (!Array.isArray(values)) {
//     throw new Error('Expected an array of values');
//   }

//   return [...new Set(values)];

let x = 0
for (let i=0;i<values.length;i++){
    if(values[i]>values[x]){
        values[x+1]=values[i]
        x++
    }
}

return values.slice(0, x+1);


}

export function runDemo() {
  const sample = [1, 2, 2, 3, 4, 4, 5];
  console.log('Input:', sample);
  console.log('Output:', removeDuplicates(sample));
}
