import { 
  numberAndNumberLeftShift,
  negativeAndPositiveLeftShift,
  positiveAndNegativeLeftShift,
  negativeAndNegativeLeftShift,
  decimalAndNumberLeftShift,
  numberAndDecimalLeftShift,
  decimalAndDecimalLeftShift
} from '@/grammar/operation/bitwise/leftShift';
import { getTestCases } from '../../../getTestCase';

const testCases = getTestCases(__filename)

describe('left shift test', () => {
  test('get test data test', () => {
    expect(testCases.length).toBe(7)
  })

  test('number and number left shift case test', () => {
    expect(Number(testCases[0])).toBe(numberAndNumberLeftShift)
  })
  
  test('negative and positive left shift case test', () => {
    expect(Number(testCases[1])).toBe(negativeAndPositiveLeftShift)
  })
  
  test('positive and negative left shift case test', () => {
    expect(Number(testCases[2])).not.toBe(positiveAndNegativeLeftShift)
    expect(positiveAndNegativeLeftShift).toBe(-2147483648)
  })

  test('negative and negative left shift case test', () => {
    expect(Number(testCases[3])).not.toBe(negativeAndNegativeLeftShift)
    expect(negativeAndNegativeLeftShift).toBe(-2147483648)
  })
  
  test('decimal and number left shift case test', () => {
    expect(Number(testCases[4])).toBe(decimalAndNumberLeftShift)
  })
  
  test('number and decimal left shift case test', () => {
    expect(Number(testCases[5])).toBe(numberAndDecimalLeftShift)
  })

  test('decimal and decimal left shift case test', () => {
    expect(Number(testCases[6])).toBe(decimalAndDecimalLeftShift)
  })
})