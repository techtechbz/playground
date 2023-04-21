import { 
  numberAndNumberDisjunction,
  positiveAndNegativeDisjunction,
  negativeAndPositiveDisjunction,
  negativeAndNegativeDisjunction,
  decimalAndNumberDisjunction,
  numberAndDecimalDisjunction,
  decimalAndDecimalDisjunction
} from '@/grammar/operation/bitwise/disjunction';
import { getTestCases } from '../../../getTestCase';

const testCases = getTestCases(__filename)

describe('disjunction test', () => {
  test('get test data test', () => {
    expect(testCases.length).toBe(7)
  })

  test('number and number disjunction case test', () => {
    expect(Number(testCases[0])).toBe(numberAndNumberDisjunction)
  })
  
  test('positive and negative disjunction case test', () => {
    expect(Number(testCases[1])).toBe(positiveAndNegativeDisjunction)
  })

  test('negative and positive disjunction case test', () => {
    expect(Number(testCases[2])).toBe(negativeAndPositiveDisjunction)
  })

  test('negative and negative disjunction case test', () => {
    expect(Number(testCases[3])).toBe(negativeAndNegativeDisjunction)
  })
  
  test('decimal and number disjunction case test', () => {
    expect(Number(testCases[4])).toBe(decimalAndNumberDisjunction)
  })
  
  test('number and decimal disjunction case test', () => {
    expect(Number(testCases[5])).toBe(numberAndDecimalDisjunction)
  })

  test('decimal and decimal disjunction case test', () => {
    expect(Number(testCases[6])).toBe(decimalAndDecimalDisjunction)
  })
})