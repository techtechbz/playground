import { calculatingNaturalNumberQuotient, naturalNumberQuotient, decimalQuotient, divideByNaturalNumberQuotient, divideNaturalNumberByDecimalQuotient, calculatingDecimalQuotient,
  quotientOfNegativeNumber, divideByNegativeNumberQuotient, positiveNumberQuotient, divideByZeroQuotient, zeroDivision } from '@/grammar/calculation/quotient';
import { getTestCases } from '../../getTestCase';

const testCases = getTestCases(__filename)

describe('quotient test', () => {
  test('get test data test', () => {
    expect(testCases.length).toBe(11)
  })
  
  test('calculating natural number quotient test', () => {
    expect(testCases[0]).toBe(calculatingNaturalNumberQuotient.toString())
  })
  
  test('natural number quotient test', () => {
    expect(testCases[1]).toBe(naturalNumberQuotient.toString())
  })

  test("decimal quotient test", () => {
    expect(testCases[2]).toBe(decimalQuotient.toString())
  })

  test("divide by natural number quotient test", () => {
    expect(testCases[3]).toBe(divideByNaturalNumberQuotient.toString())
  })

  test("divide natural number by decimal quotient test", () => {
    expect(testCases[4]).toBe(divideNaturalNumberByDecimalQuotient.toString())
  })

  test("calculating decimal quotient test", () => {
    expect(testCases[5]).toBe(calculatingDecimalQuotient.toString())
  })
  
  test("divide by negative number quotient test", () => {
    expect(testCases[6]).toBe(divideByNegativeNumberQuotient.toString())
  })

  test("quotient of negative number test", () => {
    expect(testCases[7]).toBe(quotientOfNegativeNumber.toString())
  })

  test("positive number quotient test", () => {
    expect(testCases[8]).toBe(positiveNumberQuotient.toString())
  })

  test("divide by zero quotient test", () => {
    expect(testCases[9]).toBe(divideByZeroQuotient.toString())
  })

  test("zero division test", () => {
    expect(testCases[10]).toBe(zeroDivision.toString())
  })
})