export const numberAndNumberLeftShift = 50 << 2
export const negativeAndPositiveLeftShift = -50 << 2
// マイナスの値で左シフトした場合、桁あふれにより「-2147483648」が出力される。
export const positiveAndNegativeLeftShift = 50 << -2
export const negativeAndNegativeLeftShift = -50 << -2
// 小数が含まれている場合、小数点以下を切り捨てた値で実行される
export const decimalAndNumberLeftShift = 50 << 2.9
export const numberAndDecimalLeftShift = 50.9 << 2
export const decimalAndDecimalLeftShift = 50.9 << 2.9

console.log(numberAndNumberLeftShift)
console.log(negativeAndPositiveLeftShift)
console.log(positiveAndNegativeLeftShift)
console.log(negativeAndNegativeLeftShift)
console.log(decimalAndNumberLeftShift)
console.log(numberAndDecimalLeftShift)
console.log(decimalAndDecimalLeftShift)
