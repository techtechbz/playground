export const numberAndNumberLogicalConjunction = 50 & 21
export const positiveAndNegativeLogicalConjunction = 50 & -21
export const negativeAndPositiveLogicalConjunction = -50 & 21
export const negativeAndNegativeLogicalConjunction = -50 & -21
// 論理積の演算で小数が含まれている場合、小数点以下を切り捨てた値で実行される
export const decimalAndNumberLogicalConjunction = 50 & 21.9
export const numberAndDecimalLogicalConjunction = 50.9 & 21
export const decimalAndDecimalLogicalConjunction = 50.9 & 21.9

console.log(numberAndNumberLogicalConjunction)
console.log(positiveAndNegativeLogicalConjunction)
console.log(negativeAndPositiveLogicalConjunction)
console.log(negativeAndNegativeLogicalConjunction)
console.log(decimalAndNumberLogicalConjunction)
console.log(numberAndDecimalLogicalConjunction)
console.log(decimalAndDecimalLogicalConjunction)
