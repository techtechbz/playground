import { 
  remainderAssignmentOperator,
  decimalRemainderAssignmentOperator,
  negativeRemainderAssignmentOperator
} from '@/grammar/operation/assignment_operator/remainder';
import { getTestCases } from '../../../getTestCase';

const testCases = getTestCases(__filename)


describe('remainder assignment operator test', () => {
  test('get test data test', () => {
    expect(testCases.length).toBe(3)
  })

  test('remainder assignment operator case test', () => {
    expect(Number(testCases[0])).toBe(remainderAssignmentOperator())
  })

  test('decimal remainder assignment operator case test', () => {
    expect(Number(testCases[1])).toBe(decimalRemainderAssignmentOperator())
  })
  
  test('negative remainder assignment operator case test', () => {
    expect(Number(testCases[2])).toBe(negativeRemainderAssignmentOperator())
  })
})