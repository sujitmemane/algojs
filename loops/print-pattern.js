export function printPattern(size = 5) {
  const lines = [];

  for (let i = 1; i <= size; i += 1) {
    lines.push('*'.repeat(i));
  }

  return lines.join('\n');
}

export function runDemo() {
  const size = 5;
  console.log(`Pattern of size ${size}:`);
  console.log(printPattern(size));
}
