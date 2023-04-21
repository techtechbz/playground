import { 
  numberAndNumberLogicalConjunction,
  positiveAndNegativeLogicalConjunction,
  negativeAndPositiveLogicalConjunction,
  negativeAndNegativeLogicalConjunction,
  decimalAndNumberLogicalConjunction,
  numberAndDecimalLogicalConjunction,
  decimalAndDecimalLogicalConjunction
} from '@/grammar/operation/bitwise/logicalConjunction';
import { getTestCases } from '../../../getTestCase';

const testCases = getTestCases(__filename)

describe('logical conjunction test', () => {
  test('get test data test', () => {
    expect(testCases.length).toBe(7)
  })

  test('number and number logical conjunction case test', () => {
    expect(Number(testCases[0])).toBe(numberAndNumberLogicalConjunction)
  })
  
  test('positive and negative logical conjunction case test', () => {
    expect(Number(testCases[1])).toBe(positiveAndNegativeLogicalConjunction)
  })

  test('negative and positive logical conjunction case test', () => {
    expect(Number(testCases[2])).toBe(negativeAndPositiveLogicalConjunction)
  })

  test('negative and negative logical conjunction case test', () => {
    expect(Number(testCases[3])).toBe(negativeAndNegativeLogicalConjunction)
  })
  
  test('decimal and number logical conjunction case test', () => {
    expect(Number(testCases[4])).toBe(decimalAndNumberLogicalConjunction)
  })
  
  test('number and decimal logical conjunction case test', () => {
    expect(Number(testCases[5])).toBe(numberAndDecimalLogicalConjunction)
  })

  test('decimal and decimal logical conjunction case test', () => {
    expect(Number(testCases[6])).toBe(decimalAndDecimalLogicalConjunction)
  })
})