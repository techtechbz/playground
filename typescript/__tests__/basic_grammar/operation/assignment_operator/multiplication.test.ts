import { 
  multiplicationAssignmentOperator,
  decimalMultiplicationAssignmentOperator,
  negativeMultiplicationAssignmentOperator
} from '@/grammar/operation/assignment_operator/multiplication';
import { getTestCases } from '../../../getTestCase';

const testCases = getTestCases(__filename)


describe('multiplication assignment operator test', () => {
  test('get test data test', () => {
    expect(testCases.length).toBe(3)
  })

  test('multiplication assignment operator case test', () => {
    expect(Number(testCases[0])).toBe(multiplicationAssignmentOperator())
  })

  test('decimal multiplication assignment operator case test', () => {
    expect(Number(testCases[1])).toBe(decimalMultiplicationAssignmentOperator())
  })
  
  test('negative multiplication assignment operator case test', () => {
    expect(Number(testCases[2])).toBe(negativeMultiplicationAssignmentOperator())
  })
})