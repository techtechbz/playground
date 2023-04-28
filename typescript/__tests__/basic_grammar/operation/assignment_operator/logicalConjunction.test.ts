import { 
  logicalConjunctionAssignmentOperator,
  decimalLogicalConjunctionAssignmentOperator,
  negativeLogicalConjunctionAssignmentOperator
} from '@/grammar/operation/assignment_operator/logicalConjunction';
import { getTestCases } from '../../../getTestCase';

const testCases = getTestCases(__filename)


describe('logical conjunction assignment operator test', () => {
  test('get test data test', () => {
    expect(testCases.length).toBe(3)
  })

  test('logical conjunction assignment operator case test', () => {
    expect(Number(testCases[0])).toBe(logicalConjunctionAssignmentOperator())
  })

  test('decimal logical conjunction assignment operator case test', () => {
    expect(Number(testCases[1])).toBe(decimalLogicalConjunctionAssignmentOperator())
  })
  
  test('negative logical conjunction assignment operator case test', () => {
    expect(Number(testCases[2])).toBe(negativeLogicalConjunctionAssignmentOperator())
  })
})