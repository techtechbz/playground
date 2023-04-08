import { decimalSubtractionCase, naturalNumberSubtractionCase, negativeNumberResultSubtractionCase,
   subtractFromNegativeNumberCase, subtractingNegativeNumberCase  } from '@/grammer/3_calculation/subtraction';
import { getTestCases } from '../../getTestCase';

const testCases = getTestCases(__filename)

describe('subtraction test', () => {
  test('get test data test', () => {
    expect(testCases.length).toBe(5)
  })

  test('natural number subtraction test', () => {
    expect(testCases[0]).toBe(naturalNumberSubtractionCase.toString())
  })
  
  test('decimal subtraction test', () => {
    expect(testCases[1]).toBe(decimalSubtractionCase.toString())
  })

  test("negative number's subtraction result test", () => {
    expect(testCases[2]).toBe(negativeNumberResultSubtractionCase.toString())
  })

  test("subtract negative number test", () => {
    expect(testCases[3]).toBe(subtractFromNegativeNumberCase.toString())
  })

  test("subtract negative number test", () => {
    expect(testCases[4]).toBe(subtractingNegativeNumberCase.toString())
  })
})