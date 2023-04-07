import { naturalNumberAdditionCase, decimalAdditionCase, negativeNumberAdditionCase, stringAdditionCase } from '@/grammer/3_calculation/addition';
import { getTestCases } from '../../getTestCase';

const testCases = getTestCases(__filename)

describe('addition test', () => {
  test('get test data test', () => {
    expect(testCases.length).toBe(6)
  })

  test('natural number addition test', () => {
    expect(testCases[0]).toBe(naturalNumberAdditionCase.toString())
  })
  
  test('decimal addition test', () => {
    expect(testCases[1]).toBe(decimalAdditionCase.toString())
  })

  test('negative number addition test', () => {
    expect(testCases[2]).toBe(negativeNumberAdditionCase.toString())
  })

  test('string addition test', () => {
    expect(testCases[3]).toBe(stringAdditionCase)
  })
})