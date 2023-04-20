import { 
numberAndNumberAddition,
decimalAndNumberAddition,
numberAndDecimalAddition,
decimalAndDecimalAddition,
decimalAndDecimalToNumberAddition,
positiveAndNegativeToNegativeAddition,
stringAndStringAddition,
} from '@/grammar/operation/four_arithmetic/addition';
import { getTestCases } from '../../../getTestCase';

const testCases = getTestCases(__filename)

describe('addition test', () => {
  test('get test data test', () => {
    expect(testCases.length).toBe(9)
  })

  test('number and number addition case test', () => {
    expect(Number(testCases[0])).toBe(numberAndNumberAddition)
  })
  
  test('decimal and number addition case test', () => {
    expect(Number(testCases[1])).toBe(decimalAndNumberAddition)
  })

  test('number and decimal addition case test', () => {
    expect(Number(testCases[2])).toBe(numberAndDecimalAddition)
  })

  test('decimal and decimal addition case test', () => {
    expect(Number(testCases[3])).toBe(decimalAndDecimalAddition)
  })
  
  test('decimal and decimal to number addition case test', () => {
    expect(Number(testCases[4])).toBe(decimalAndDecimalToNumberAddition)
  })
  
  test('positive and negative to negative addition case test', () => {
    expect(Number(testCases[5])).toBe(positiveAndNegativeToNegativeAddition)
  })

  test('string and string addition case test', () => {
    expect(testCases[6]).toBe(stringAndStringAddition)
  })
})