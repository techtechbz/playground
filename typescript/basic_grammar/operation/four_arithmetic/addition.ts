export const numberAndNumberAddition = 1 + 2
export const decimalAndNumberAddition = 1.1 + 2
export const numberAndDecimalAddition = 1 + 2.1
export const decimalAndDecimalAddition = (21 + 42) / 10
// 小数同士の計算では丸め誤差が生じる。ただし、結果が整数になる加算の場合、丸め誤差は生じない
// export const decimalAndDecimalAddition = 2.1 + 4.2
export const decimalAndDecimalToNumberAddition = 2.1 + 4.9
export const positiveAndNegativeToNegativeAddition = 4 + -8
export const stringAndStringAddition = "Hello, " + "world!"

console.log(numberAndNumberAddition)
console.log(decimalAndNumberAddition)
console.log(numberAndDecimalAddition)
console.log(decimalAndDecimalAddition)
console.log(decimalAndDecimalToNumberAddition)
console.log(positiveAndNegativeToNegativeAddition)
console.log(stringAndStringAddition)

// 単にコンソールへ出力するという場合は以下のような書き方でも連結できる
// console.log("Hello,", "world!")