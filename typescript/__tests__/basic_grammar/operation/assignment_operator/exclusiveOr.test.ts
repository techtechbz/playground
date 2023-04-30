import { 
  exclusiveOrAssignmentOperator,
  decimalExclusiveOrAssignmentOperator,
  negativeExclusiveOrAssignmentOperator
} from '@/grammar/operation/assignment_operator/exclusiveOr';
import { getTestCases } from '../../../getTestCase';

const testCases = getTestCases(__filename)


describe('exclusive or assignment operator test', () => {
  test('get test data test', () => {
    expect(testCases.length).toBe(3)
  })

  test('exclusive or assignment operator case test', () => {
    expect(Number(testCases[0])).toBe(exclusiveOrAssignmentOperator())
  })

  test('decimal exclusive or assignment operator case test', () => {
    expect(Number(testCases[1])).toBe(decimalExclusiveOrAssignmentOperator())
  })
  
  test('negative exclusive or assignment operator case test', () => {
    expect(Number(testCases[2])).toBe(negativeExclusiveOrAssignmentOperator())
  })
})