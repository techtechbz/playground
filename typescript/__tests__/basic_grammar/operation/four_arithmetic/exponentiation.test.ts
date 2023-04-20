import {
  exponentiationOperator,
  exponentiationFunction,
  numberNumberExponentiation,
  decimalNumberExponentiation,
  numberDecimalExponentiation,
  decimalDecimalExponentiation,
  negativePositiveExponentiation,
  positiveNegativeExponentiation,
  negativeNegativeExponentiation,
  numberZeroExponentiation,
  zeroNumberExponentiation
} from '@/grammar/operation/four_arithmetic/exponentiation';
import { getTestCases } from '../../../getTestCase';

const testCases = getTestCases(__filename)

describe('exponentiation test', () => {
  test('get test data test', () => {
    expect(testCases.length).toBe(11)
  })
  
  test('exponentiation operator test', () => {
    expect(testCases[0]).toBe(exponentiationOperator.toString())
  })
  
  test('exponentiation function test', () => {
    expect(testCases[1]).toBe(exponentiationFunction.toString())
  })

  test("number number exponentiation test", () => {
    expect(testCases[2]).toBe(numberNumberExponentiation.toString())
  })

  test("decimal number exponentiation test", () => {
    expect(testCases[3]).toBe(decimalNumberExponentiation.toString())
  })

  test("number decimal exponentiation test", () => {
    expect(testCases[4]).toBe(numberDecimalExponentiation.toString())
  })

  test("decimal decimal exponentiation test", () => {
    expect(testCases[5]).toBe(decimalDecimalExponentiation.toString())
  })

  test("negative positive exponentiation test", () => {
    expect(testCases[6]).toBe(negativePositiveExponentiation.toString())
  })

  test("positive negative exponentiation test", () => {
    expect(testCases[7]).toBe(positiveNegativeExponentiation.toString())
  })

  test("negative negative exponentiation test", () => {
    expect(testCases[8]).toBe(negativeNegativeExponentiation.toString())
  })

  test("number zero exponentiation test", () => {
    expect(testCases[9]).toBe(numberZeroExponentiation.toString())
  })

  test("zero number exponentiation test", () => {
    expect(testCases[10]).toBe(zeroNumberExponentiation.toString())
  })
})