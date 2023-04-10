import { naturalNumberMultiplicationCase, naturalNumberResultMultiplicationCase, decimalResultCase, multiplyingDecimalCase,
  decimalByDecimalReturnsNaturalNumberCase, multiplicationOverNegativeNumbersCase, negativeNumberResultMultiplicationCase, negativeNumberCalculatingMultiplicationCase } from '@/grammar/calculation/multiplication';
import { getTestCases } from '../../getTestCase';

const testCases = getTestCases(__filename)

describe('multiplication test', () => {
  test('get test data test', () => {
    expect(testCases.length).toBe(8)
  })

  test('natural number multiplication test', () => {
    expect(testCases[0]).toBe(naturalNumberMultiplicationCase.toString())
  })
  
  test('natural number result multiplication case test', () => {
    expect(testCases[1]).toBe(naturalNumberResultMultiplicationCase.toString())
  })
  
  test('decimal result case test', () => {
    expect(testCases[2]).toBe(decimalResultCase.toString())
  })

  test('multiplicating decimal case test', () => {
    expect(testCases[3]).toBe(multiplyingDecimalCase.toString())
  })

  test('decimal by decimal returns natural number case test', () => {
    expect(testCases[4]).toBe(decimalByDecimalReturnsNaturalNumberCase.toString())
  })

  test('multiplication over negative numbers case test', () => {
    expect(testCases[5]).toBe(multiplicationOverNegativeNumbersCase.toString())
  })

  test("negative number's multiplication result test", () => {
    expect(testCases[6]).toBe(negativeNumberResultMultiplicationCase.toString())
  })

  test("subtract negative number test", () => {
    expect(testCases[7]).toBe(negativeNumberCalculatingMultiplicationCase.toString())
  })
})