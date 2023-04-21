import {
  numberAndNumberRemainder,
  decimalAndDecimalRemainder,
  numberAndNumberToZeroRemainder,
  decimalAndDecimalToZeroRemainder,
  decimalAndNumberRemainder,
  numberAndDecimalRemainder,
  negativeAndPositiveRemainder,
  positiveAndNegativeRemainder,
  negativeAndNegativeRemainder,
  divideByZeroRemainder,
  zeroDivision  
} from '@/grammar/operation/four_arithmetic/remainder';
import { getTestCases } from '../../../getTestCase';

const testCases = getTestCases(__filename)

describe('remainder test', () => {
  test('get test data test', () => {
    expect(testCases.length).toBe(11)
  })
  
  test('number and number remainder case test', () => {
    expect(Number(testCases[0])).toBe(numberAndNumberRemainder)
  })
  
  test('decimal and decimal remainder case test', () => {
    expect(Number(testCases[1])).toBe(decimalAndDecimalRemainder)
  })

  test("number and number to zero remainder case test", () => {
    expect(Number(testCases[2])).toBe(numberAndNumberToZeroRemainder)
  })

  test("decimal and decimal to zero remainder case test", () => {
    expect(Number(testCases[3])).toBe(decimalAndDecimalToZeroRemainder)
  })

  test("decimal and number remainder case test", () => {
    expect(Number(testCases[4])).toBe(decimalAndNumberRemainder)
  })

  test("number and decimal remainder case test", () => {
    expect(Number(testCases[5])).toBe(numberAndDecimalRemainder)
  })

  test("negative and positive remainder case test", () => {
    expect(Number(testCases[6])).toBe(negativeAndPositiveRemainder)
  })

  test("positive and negative remainder case test", () => {
    expect(Number(testCases[7])).toBe(positiveAndNegativeRemainder)
  })

  test("negative and negative remainder case test", () => {
    expect(Number(testCases[8])).toBe(negativeAndNegativeRemainder)
  })

  test("divide by zero remainder test", () => {
    expect(Number(testCases[9])).toBe(divideByZeroRemainder)
  })

  test("zero division test", () => {
    expect(Number(testCases[10])).toBe(zeroDivision)
  })
})