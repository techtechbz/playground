import { 
  disjunctionAssignmentOperator,
  decimalDisjunctionAssignmentOperator,
  negativeDisjunctionAssignmentOperator
} from '@/grammar/operation/assignment_operator/disjunction';
import { getTestCases } from '../../../getTestCase';

const testCases = getTestCases(__filename)


describe('disjunction assignment operator test', () => {
  test('get test data test', () => {
    expect(testCases.length).toBe(3)
  })

  test('disjunction assignment operator case test', () => {
    expect(Number(testCases[0])).toBe(disjunctionAssignmentOperator())
  })

  test('decimal disjunction assignment operator case test', () => {
    expect(Number(testCases[1])).toBe(decimalDisjunctionAssignmentOperator())
  })
  
  test('negative disjunction assignment operator case test', () => {
    expect(Number(testCases[2])).toBe(negativeDisjunctionAssignmentOperator())
  })
})