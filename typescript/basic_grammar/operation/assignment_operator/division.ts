export const divisionAssignmentOperator = () => {
  let a = 64
  for (let i = 0; i <  5; i++) {
    a /= 2
  }
  return a
}

export const decimalDivisionAssignmentOperator = () => {
  let a = 243
  for (let i = 0; i < 5; i++) {
    a /= 1.5
  }
  return a
}

export const negativeDivisionAssignmentOperator = () => {
  let a = 64
  for (let i = 0; i < 5; i++) {
    a /= -2
  }
  return a
}

console.log(divisionAssignmentOperator())
console.log(decimalDivisionAssignmentOperator())
console.log(negativeDivisionAssignmentOperator())
