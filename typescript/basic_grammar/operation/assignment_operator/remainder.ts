export const remainderAssignmentOperator = () => {
  let a = 51
  a %= 7
  return a
}

export const decimalRemainderAssignmentOperator = () => {
  let a = 51
  a %= 3.5
  return a
}

export const negativeRemainderAssignmentOperator = () => {
  let a = 51
  a %= -7
  return a
}

console.log(remainderAssignmentOperator())
console.log(decimalRemainderAssignmentOperator())
console.log(negativeRemainderAssignmentOperator())
