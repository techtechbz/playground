export const numberAndNumberRightShift = 50 >> 2
export const negativeAndPositiveRightShift = -50 >> 2
// 自然数をマイナスの値で右シフトした場合、桁あふれにより「0」が出力される。
export const positiveAndNegativeRightShift = 50 >> -2
// 負の整数をマイナスの値で右シフトした場合、桁あふれにより「-1」が出力される。
export const negativeAndNegativeRightShift = -50 >> -2
// 小数が含まれている場合、小数点以下を切り捨てた値で実行される
export const decimalAndNumberRightShift = 50 >> 2.9
export const numberAndDecimalRightShift = 50.9 >> 2
export const decimalAndDecimalRightShift = 50.9 >> 2.9

console.log(numberAndNumberRightShift)
console.log(negativeAndPositiveRightShift)
console.log(positiveAndNegativeRightShift)
console.log(negativeAndNegativeRightShift)
console.log(decimalAndNumberRightShift)
console.log(numberAndDecimalRightShift)
console.log(decimalAndDecimalRightShift)
