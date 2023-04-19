export const exponentiationOperator = 3 ** 2
export const exponentiationFunction = Math.pow(3, 2)
export const numberNumberExponentiation = 3 ** 2
export const decimalNumberExponentiation = 1.5 ** 2
export const numberDecimalExponentiation = 4 ** 1.5
export const decimalDecimalExponentiation = 0.4 ** 1.5
// 負の数の累乗を計算したい場合は、負の数をパーレンで囲む。
// そうしなければ、エラーが出力される。
export const negativePositiveExponentiation = (-3) ** 2
export const positiveNegativeExponentiation = 3 ** -2
export const negativeNegativeExponentiation = (-3) ** -2
export const numberZeroExponentiation = 3 ** 0
export const zeroNumberExponentiation = 0 ** 2

console.log(exponentiationOperator)
console.log(exponentiationFunction)
console.log(numberNumberExponentiation)
console.log(decimalNumberExponentiation)
console.log(numberDecimalExponentiation)
console.log(decimalDecimalExponentiation)
console.log(negativePositiveExponentiation)
console.log(positiveNegativeExponentiation)
console.log(negativeNegativeExponentiation)
console.log(numberZeroExponentiation)
console.log(zeroNumberExponentiation)
