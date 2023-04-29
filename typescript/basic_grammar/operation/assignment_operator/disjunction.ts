export const disjunctionAssignmentOperator = () => {
  let a = 50
  a |= 21
  return a
}

export const decimalDisjunctionAssignmentOperator = () => {
  let a = 50
  a |= 21.9
  return a
}

export const negativeDisjunctionAssignmentOperator = () => {
  let a = 50
  a |= -21
  return a
}

console.log(disjunctionAssignmentOperator())
console.log(decimalDisjunctionAssignmentOperator())
console.log(negativeDisjunctionAssignmentOperator())