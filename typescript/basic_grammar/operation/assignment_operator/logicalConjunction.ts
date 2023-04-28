export const logicalConjunctionAssignmentOperator = () => {
  let a = 50
  a &= 21
  return a
}

export const decimalLogicalConjunctionAssignmentOperator = () => {
  let a = 50
  a &= 21.9
  return a
}

export const negativeLogicalConjunctionAssignmentOperator = () => {
  let a = 50
  a &= -21
  return a
}

console.log(logicalConjunctionAssignmentOperator())
console.log(decimalLogicalConjunctionAssignmentOperator())
console.log(negativeLogicalConjunctionAssignmentOperator())