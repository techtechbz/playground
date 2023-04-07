import { decimalMultiplicationCase, naturalNumberMultiplicationCase, negativeNumberCalculatingMultiplicationCase, negativeNumberResultMultiplicationCase } from '@/grammer/3_calculation/multiplication';
import { getTestCases } from '../../getTestCase';

const testCases = getTestCases(__filename)

describe('multiplication test', () => {
  test('get test data test', () => {
    expect(testCases.length).toBe(4)
  })

  test('natural number multiplication test', () => {
    expect(testCases[0]).toBe(naturalNumberMultiplicationCase.toString())
  })
  
  test('decimal multiplication test', () => {
    expect(testCases[1]).toBe(decimalMultiplicationCase.toString())
  })

  test("negative number's multiplication result test", () => {
    expect(testCases[2]).toBe(negativeNumberResultMultiplicationCase.toString())
  })

  test("subtract negative number test", () => {
    expect(testCases[3]).toBe(negativeNumberCalculatingMultiplicationCase.toString())
  })
})