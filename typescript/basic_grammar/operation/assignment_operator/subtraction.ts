export const subtractionAssignmentOperator = () => {
  let a = 0
  for (let i = 0; i <  5; i++) {
    a -= 2
  }
  return a
}

export const backSubtractionAssignmentOperator = () => {
  let a = 0
  for (let i = 0; i < 5; i++) {
    a--
  }
  return a
}

export const frontSubtractionAssignmentOperator = () => {
  let a = 0
  for (let i = 0; i < 5; i++) {
    --a
  }
  return a
}

export const decimalSubtractionAssignmentOperator = () => {
  let a = 0
  for (let i = 0; i < 5; i++) {
    a -= 1.5
  }
  return a
}

export const negativeSubtractionAssignmentOperator = () => {
  let a = 0
  for (let i = 0; i < 5; i++) {
    a -= -2
  }
  return a
}

console.log(subtractionAssignmentOperator())
console.log(backSubtractionAssignmentOperator())
console.log(frontSubtractionAssignmentOperator())
console.log(decimalSubtractionAssignmentOperator())
console.log(negativeSubtractionAssignmentOperator())
