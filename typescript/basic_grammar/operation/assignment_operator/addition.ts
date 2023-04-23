export const additionAssignmentOperator = () => {
  let a = 0
  for (let i = 0; i <  5; i++) {
    a += 2
  }
  return a
}

export const backAdditionAssignmentOperator = () => {
  let a = 0
  for (let i = 0; i < 5; i++) {
    a++
  }
  return a
}

export const frontAdditionAssignmentOperator = () => {
  let a = 0
  for (let i = 0; i < 5; i++) {
    ++a
  }
  return a
}

export const decimalAdditionAssignmentOperator = () => {
  let a = 0
  for (let i = 0; i < 5; i++) {
    a += 1.5
  }
  return a
}

export const negativeAdditionAssignmentOperator = () => {
  let a = 0
  for (let i = 0; i < 5; i++) {
    a += -2
  }
  return a
}

export const stringAdditionAssignmentOperator = () => {
  let s = ""
  for (let i = 0; i < 5; i++) {
    s += "A"
  }
  return s
}

console.log(additionAssignmentOperator())
console.log(backAdditionAssignmentOperator())
console.log(frontAdditionAssignmentOperator())
console.log(decimalAdditionAssignmentOperator())
console.log(negativeAdditionAssignmentOperator())
console.log(stringAdditionAssignmentOperator())
