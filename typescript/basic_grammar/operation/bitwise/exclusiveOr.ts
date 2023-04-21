export const numberAndNumberExclusiveOr = 50 ^ 21
export const positiveAndNegativeExclusiveOr = 50 ^ -21
export const negativeAndPositiveExclusiveOr = -50 ^ 21
export const negativeAndNegativeExclusiveOr = -50 ^ -21
// 論理積の演算で小数が含まれている場合、小数点以下を切り捨てた値で実行される
export const decimalAndNumberExclusiveOr = 50 ^ 21.9
export const numberAndDecimalExclusiveOr = 50.9 ^ 21
export const decimalAndDecimalExclusiveOr = 50.9 ^ 21.9

console.log(numberAndNumberExclusiveOr)
console.log(positiveAndNegativeExclusiveOr)
console.log(negativeAndPositiveExclusiveOr)
console.log(negativeAndNegativeExclusiveOr)
console.log(decimalAndNumberExclusiveOr)
console.log(numberAndDecimalExclusiveOr)
console.log(decimalAndDecimalExclusiveOr)
