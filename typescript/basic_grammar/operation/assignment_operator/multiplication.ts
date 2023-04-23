export const multiplicationAssignmentOperator = () => {
  let a = 1
  for (let i = 0; i <  5; i++) {
    a *= 2
  }
  return a
}

export const decimalMultiplicationAssignmentOperator = () => {
  let a = 1
  for (let i = 0; i < 5; i++) {
    a *= 1.5
  }
  return a
}

export const negativeMultiplicationAssignmentOperator = () => {
  let a = 1
  for (let i = 0; i < 5; i++) {
    a *= -2
  }
  return a
}

console.log(multiplicationAssignmentOperator())
console.log(decimalMultiplicationAssignmentOperator())
console.log(negativeMultiplicationAssignmentOperator())
