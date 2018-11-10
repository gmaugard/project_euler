const range = length => [...Array(length).keys()]
const sumArrayOfNumber = (accumulator, value) => accumulator + value
const filterMultipleofThreeOrFive = n => n % 3 === 0 || n % 5 === 0

const sumMultipleOfThreeOrFive = n => range(n).filter(filterMultipleofThreeOrFive).reduce(sumArrayOfNumber)

console.log(sumMultipleOfThreeOrFive(1000))
