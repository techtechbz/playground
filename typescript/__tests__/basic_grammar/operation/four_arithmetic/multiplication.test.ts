import {
  numberAndNumberMultiplication,
  decimalAndNumberMultiplication,
  numberAndDecimalMultiplication,
  decimalAndDecimalMultiplication,
  decimalAndDecimalToNumberMultiplication,
  negativeAndPositiveToNegativeMultiplication,
  positiveAndNegativeToNegativeMultiplication,
  negativeAndNegativeToPositiveMultiplication
} from '@/grammar/operation/four_arithmetic/multiplication';
import { getTestCases } from '../../../getTestCase';

const testCases = getTestCases(__filename)

describe('multiplication test', () => {
  test('get test data test', () => {
    expect(testCases.length).toBe(8)
  })

  test('number and number multiplication case test', () => {
    expect(Number(testCases[0])).toBe(numberAndNumberMultiplication)
  })
  
  test('decimal and number multiplication case test', () => {
    expect(Number(testCases[1])).toBe(decimalAndNumberMultiplication)
  })
  
  test('number and decimal multiplication case test', () => {
    expect(Number(testCases[2])).toBe(numberAndDecimalMultiplication)
  })

  test('decimal and decimal multiplication case test', () => {
    expect(Number(testCases[3])).toBe(decimalAndDecimalMultiplication)
  })

  test('decimal and decimal to number multiplication case test', () => {
    expect(Number(testCases[4])).toBe(decimalAndDecimalToNumberMultiplication)
  })

  test('negative and positive to negative multiplication case test', () => {
    expect(Number(testCases[5])).toBe(negativeAndPositiveToNegativeMultiplication)
  })

  test("positive and negative to negative multiplication case test", () => {
    expect(Number(testCases[6])).toBe(positiveAndNegativeToNegativeMultiplication)
  })

  test("negative and negative to positive multiplication case test", () => {
    expect(Number(testCases[7])).toBe(negativeAndNegativeToPositiveMultiplication)
  })
})