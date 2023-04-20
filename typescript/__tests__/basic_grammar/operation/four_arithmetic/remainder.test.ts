import {
  calculatingNaturalNumberRemainder, 
  naturalNumberRemainder, 
  zeroRemainder,
  zeroByDecimalRemainder,
  divideByNaturalNumberRemainder,
  divideNaturalNumberByDecimalRemainder,
  remainderOfNegativeNumber,
  divideByNegativeNumberRemainder,
  positiveNumberRemainder,
  divideByZeroRemainder,
  zeroDivision
} from '@/grammar/operation/four_arithmetic/remainder';
import { getTestCases } from '../../../getTestCase';

const testCases = getTestCases(__filename)

describe('remainder test', () => {
  test('get test data test', () => {
    expect(testCases.length).toBe(11)
  })
  
  test('calculating natural number remainder test', () => {
    expect(testCases[0]).toBe(calculatingNaturalNumberRemainder.toString())
  })
  
  test('natural number remainder test', () => {
    expect(testCases[1]).toBe(naturalNumberRemainder.toString())
  })

  test("zero remainder test", () => {
    expect(testCases[2]).toBe(zeroRemainder.toString())
  })

  test("zero by decimal remainder test", () => {
    expect(testCases[3]).toBe(zeroByDecimalRemainder.toString())
  })

  test("divide by natural number remainder test", () => {
    expect(testCases[4]).toBe(divideByNaturalNumberRemainder.toString())
  })

  test("divide natural number by decimal remainder test", () => {
    expect(testCases[5]).toBe(divideNaturalNumberByDecimalRemainder.toString())
  })

  test("remaider of negative number test", () => {
    expect(testCases[6]).toBe(remainderOfNegativeNumber.toString())
  })

  test("devide by negative number remainder test", () => {
    expect(testCases[7]).toBe(divideByNegativeNumberRemainder.toString())
  })

  test("positive number remainder test", () => {
    expect(testCases[8]).toBe(positiveNumberRemainder.toString())
  })

  test("divide by zero remainder test", () => {
    expect(testCases[9]).toBe(divideByZeroRemainder.toString())
  })

  test("zero division test", () => {
    expect(testCases[10]).toBe(zeroDivision.toString())
  })
})