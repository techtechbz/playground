import {
  numberAndNumberToNumberQuotient,
  decimalAndDecimalToNumberQuotient,
  numberAndNumberToDecimalQuotient,
  decimalAndNumberToDecimalQuotient,
  numberAndDecimalToDecimalQuotient,
  decimalAndDecimalToDecimalQuotient,
  negativeAndPositiveToNegativeQuotient,
  positiveAndNegativeToNegativeQuotient,
  negativeAndNegativeToPositiveQuotient,
  divideByZeroQuotient,
  zeroDivision  
} from '@/grammar/operation/four_arithmetic/quotient';
import { getTestCases } from '../../../getTestCase';

const testCases = getTestCases(__filename)

describe('quotient test', () => {
  test('get test data test', () => {
    expect(testCases.length).toBe(11)
  })
  
  test('number and number to number quotient case test', () => {
    expect(Number(testCases[0])).toBe(numberAndNumberToNumberQuotient)
  })
  
  test('decimal and decimal to number quotient case test', () => {
    expect(Number(testCases[1])).toBe(decimalAndDecimalToNumberQuotient)
  })

  test("number and number to decimal quotient case test", () => {
    expect(Number(testCases[2])).toBe(numberAndNumberToDecimalQuotient)
  })

  test("decimal and number to decimal quotient case test", () => {
    expect(Number(testCases[3])).toBe(decimalAndNumberToDecimalQuotient)
  })

  test("number and decimal to decimal quotient case test", () => {
    expect(Number(testCases[4])).toBe(numberAndDecimalToDecimalQuotient)
  })

  test("decimal and decimal to decimal quotient case test", () => {
    expect(Number(testCases[5])).toBe(decimalAndDecimalToDecimalQuotient)
  })
  
  test("negative and positive to negative quotient case test", () => {
    expect(Number(testCases[6])).toBe(negativeAndPositiveToNegativeQuotient)
  })

  test("positive and negative to negative quotient case test", () => {
    expect(Number(testCases[7])).toBe(positiveAndNegativeToNegativeQuotient)
  })

  test("negative and negative to positive quotient case test", () => {
    expect(Number(testCases[8])).toBe(negativeAndNegativeToPositiveQuotient)
  })

  test("divide by zero quotient test", () => {
    expect(Number(testCases[9]) === divideByZeroQuotient).toBeTruthy()
  })

  test("zero division test", () => {
    expect(Number(testCases[10])).toBe(zeroDivision)
  })
})