import { 
  numberAndNumberExclusiveOr,
  positiveAndNegativeExclusiveOr,
  negativeAndPositiveExclusiveOr,
  negativeAndNegativeExclusiveOr,
  decimalAndNumberExclusiveOr,
  numberAndDecimalExclusiveOr,
  decimalAndDecimalExclusiveOr
} from '@/grammar/operation/bitwise/exclusiveOr';
import { getTestCases } from '../../../getTestCase';

const testCases = getTestCases(__filename)

describe('exclusive or test', () => {
  test('get test data test', () => {
    expect(testCases.length).toBe(7)
  })

  test('number and number exclusive or case test', () => {
    expect(Number(testCases[0])).toBe(numberAndNumberExclusiveOr)
  })
  
  test('positive and negative exclusive or case test', () => {
    expect(Number(testCases[1])).toBe(positiveAndNegativeExclusiveOr)
  })

  test('negative and positive exclusive or case test', () => {
    expect(Number(testCases[2])).toBe(negativeAndPositiveExclusiveOr)
  })

  test('negative and negative exclusive or case test', () => {
    expect(Number(testCases[3])).toBe(negativeAndNegativeExclusiveOr)
  })
  
  test('decimal and number exclusive or case test', () => {
    expect(Number(testCases[4])).toBe(decimalAndNumberExclusiveOr)
  })
  
  test('number and decimal exclusive or case test', () => {
    expect(Number(testCases[5])).toBe(numberAndDecimalExclusiveOr)
  })

  test('decimal and decimal exclusive or case test', () => {
    expect(Number(testCases[6])).toBe(decimalAndDecimalExclusiveOr)
  })
})