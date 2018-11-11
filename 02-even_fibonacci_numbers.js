const fibonacci = a => b => sum => a < 4000000 ? fibonacci (b) (a + b) (a % 2 === 0 ? sum += a : sum) : sum

console.log(fibonacci (0) (1) (0))
