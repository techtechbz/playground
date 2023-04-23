import { 
  subtractionAssignmentOperator,
  backSubtractionAssignmentOperator,
  frontSubtractionAssignmentOperator,
  decimalSubtractionAssignmentOperator,
  negativeSubtractionAssignmentOperator
} from '@/grammar/operation/assignment_operator/subtraction';
import { getTestCases } from '../../../getTestCase';

const testCases = getTestCases(__filename)


describe('subtraction assignment operator test', () => {
  test('get test data test', () => {
    expect(testCases.length).toBe(5)
  })

  test('subtraction assignment operator case test', () => {
    expect(Number(testCases[0])).toBe(subtractionAssignmentOperator())
  })
  
  test('back subtraction assignment operator case test', () => {
    expect(Number(testCases[1])).toBe(backSubtractionAssignmentOperator())
  })

  test('front subtraction assignment operator case test', () => {
    expect(Number(testCases[2])).toBe(frontSubtractionAssignmentOperator())
  })

  test('decimal subtraction assignment operator case test', () => {
    expect(Number(testCases[3])).toBe(decimalSubtractionAssignmentOperator())
  })
  
  test('negative subtraction assignment operator case test', () => {
    expect(Number(testCases[4])).toBe(negativeSubtractionAssignmentOperator())
  })
})