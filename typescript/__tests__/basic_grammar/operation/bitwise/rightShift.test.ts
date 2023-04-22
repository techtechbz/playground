import { 
  numberAndNumberRightShift,
  negativeAndPositiveRightShift,
  positiveAndNegativeRightShift,
  negativeAndNegativeRightShift,
  decimalAndNumberRightShift,
  numberAndDecimalRightShift,
  decimalAndDecimalRightShift
} from '@/grammar/operation/bitwise/rightShift';
import { getTestCases } from '../../../getTestCase';

const testCases = getTestCases(__filename)

describe('right shift test', () => {
  test('get test data test', () => {
    expect(testCases.length).toBe(7)
  })

  test('number and number right shift case test', () => {
    expect(Number(testCases[0])).toBe(numberAndNumberRightShift)
  })
  
  test('negative and positive right shift case test', () => {
    expect(Number(testCases[1])).toBe(negativeAndPositiveRightShift)
  })
  
  test('positive and negative right shift case test', () => {
    expect(Number(testCases[2])).not.toBe(positiveAndNegativeRightShift)
    expect(positiveAndNegativeRightShift).toBe(0)
  })

  test('negative and negative right shift case test', () => {
    expect(Number(testCases[3])).not.toBe(negativeAndNegativeRightShift)
    expect(negativeAndNegativeRightShift).toBe(-1)
  })
  
  test('decimal and number right shift case test', () => {
    expect(Number(testCases[4])).toBe(decimalAndNumberRightShift)
  })
  
  test('number and decimal right shift case test', () => {
    expect(Number(testCases[5])).toBe(numberAndDecimalRightShift)
  })

  test('decimal and decimal right shift case test', () => {
    expect(Number(testCases[6])).toBe(decimalAndDecimalRightShift)
  })
})