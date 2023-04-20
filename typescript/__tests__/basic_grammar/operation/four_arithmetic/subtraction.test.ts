import { 
  numberAndNumberSubtraction,
  decimalAndNumberSubtraction,
  numberAndDecimalSubtraction,
  decimalAndDecimalSubtraction,
  decimalAndDecimalToNumberSubtraction,
  positiveAndNegativeToNegativeSubtraction,
  negativeAndPositiveToNegativeSubtraction,
  negativeAndNegativeToPositiveSubtraction,
  negativeZero,
} from '@/grammar/operation/four_arithmetic/subtraction';
import { getTestCases } from '../../../getTestCase';

const testCases = getTestCases(__filename)

describe('subtraction test', () => {
  test('get test data test', () => {
    expect(testCases.length).toBe(9)
  })

  test('number and number subtraction case test', () => {
    expect(Number(testCases[0])).toBe(numberAndNumberSubtraction)
  })
  
  test('decimal and number subtraction case test', () => {
    expect(Number(testCases[1])).toBe(decimalAndNumberSubtraction)
  })

  test("number and decimal subtraction case test", () => {
    expect(Number(testCases[2])).toBe(numberAndDecimalSubtraction)
  })

  test("decimal and decimal subtraction case test", () => {
    expect(Number(testCases[3])).toBe(decimalAndDecimalSubtraction)
  })

  test("decimal and decimal to number subtraction case test", () => {
    expect(Number(testCases[4])).toBe(decimalAndDecimalToNumberSubtraction)
  })
  
  test("positive and negative to negative subtraction case test", () => {
    expect(Number(testCases[5])).toBe(positiveAndNegativeToNegativeSubtraction)
  })
  
  test("negative and positive to negative subtraction case test", () => {
    expect(Number(testCases[6])).toBe(negativeAndPositiveToNegativeSubtraction)
  })

  test("negative and negative to positive subtraction case test", () => {
    expect(Number(testCases[7])).toBe(negativeAndNegativeToPositiveSubtraction)
  })
  
  test("negative zero case test", () => {
    expect(Number(testCases[8]) === negativeZero).toBeTruthy()
  })
})