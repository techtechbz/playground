export const numberAndNumberSubtraction = 5 - 2
export const decimalAndNumberSubtraction = 5 - 2.1

// 小数から数値を引く減算の場合、丸め誤差が生じる。
export const numberAndDecimalSubtraction = (51 - 20) / 10
export const decimalAndDecimalSubtraction = (51 - 22) / 10
// export const numberAndDecimalSubtraction = 5.1 - 2
// export const decimalAndDecimalSubtraction = 5.1 - 2.2

// 結果が整数の場合でも同様だが、Math.round関数を利用して丸めることもできる。
export const decimalAndDecimalToNumberSubtraction = Math.round(5.1 - 2.1)
// export const decimalAndDecimalToNumberSubtraction = 5.1 - 2.1

export const positiveAndNegativeToNegativeSubtraction = 4 - 8
export const negativeAndPositiveToNegativeSubtraction = -3 - 1
export const negativeAndNegativeToPositiveSubtraction = -2 - (-4)
export const negativeZero = -0

console.log(numberAndNumberSubtraction)
console.log(decimalAndNumberSubtraction)
console.log(numberAndDecimalSubtraction)
console.log(decimalAndDecimalSubtraction)
console.log(decimalAndDecimalToNumberSubtraction)
console.log(positiveAndNegativeToNegativeSubtraction)
console.log(negativeAndPositiveToNegativeSubtraction)
console.log(negativeAndNegativeToPositiveSubtraction)
console.log(negativeZero)
