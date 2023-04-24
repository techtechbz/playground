import { 
  divisionAssignmentOperator,
  decimalDivisionAssignmentOperator,
  negativeDivisionAssignmentOperator
} from '@/grammar/operation/assignment_operator/division';
import { getTestCases } from '../../../getTestCase';

const testCases = getTestCases(__filename)


describe('division assignment operator test', () => {
  test('get test data test', () => {
    expect(testCases.length).toBe(3)
  })

  test('division assignment operator case test', () => {
    expect(Number(testCases[0])).toBe(divisionAssignmentOperator())
  })

  test('decimal division assignment operator case test', () => {
    expect(Number(testCases[1])).toBe(decimalDivisionAssignmentOperator())
  })
  
  test('negative division assignment operator case test', () => {
    expect(Number(testCases[2])).toBe(negativeDivisionAssignmentOperator())
  })
})