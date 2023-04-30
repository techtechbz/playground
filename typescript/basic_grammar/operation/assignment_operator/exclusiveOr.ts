export const exclusiveOrAssignmentOperator = () => {
  let a = 50
  a ^= 21
  return a
}

export const decimalExclusiveOrAssignmentOperator = () => {
  let a = 50
  a ^= 21.9
  return a
}

export const negativeExclusiveOrAssignmentOperator = () => {
  let a = 50
  a ^= -21
  return a
}

console.log(exclusiveOrAssignmentOperator())
console.log(decimalExclusiveOrAssignmentOperator())
console.log(negativeExclusiveOrAssignmentOperator())