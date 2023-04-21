export const numberAndNumberDisjunction = 50 | 21
export const positiveAndNegativeDisjunction = 50 | -21
export const negativeAndPositiveDisjunction = -50 | 21
export const negativeAndNegativeDisjunction = -50 | -21
// 論理積の演算で小数が含まれている場合、小数点以下を切り捨てた値で実行される
export const decimalAndNumberDisjunction = 50 | 21.9
export const numberAndDecimalDisjunction = 50.9 | 21
export const decimalAndDecimalDisjunction = 50.9 | 21.9

console.log(numberAndNumberDisjunction)
console.log(positiveAndNegativeDisjunction)
console.log(negativeAndPositiveDisjunction)
console.log(negativeAndNegativeDisjunction)
console.log(decimalAndNumberDisjunction)
console.log(numberAndDecimalDisjunction)
console.log(decimalAndDecimalDisjunction)
