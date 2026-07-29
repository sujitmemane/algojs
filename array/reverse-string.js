const sample_string = ["h", "e", "l", "l", "o"];


function reverseString(s){
    let x=0
    let y=s.length-1
    while(x<y){
        // [s[x],s[y]]=[s[y],s[x]]
        let temp = s[x]
        s[x] = s[y]
        s[y] = temp
        x++
        y--
    }
}


export function runDemo() {
  console.log('Input:', sample_string);
  reverseString(sample_string)
  console.log('Output:', sample_string);
}