import { 
  additionAssignmentOperator,
  backAdditionAssignmentOperator,
  frontAdditionAssignmentOperator,
  decimalAdditionAssignmentOperator,
  negativeAdditionAssignmentOperator,
  stringAdditionAssignmentOperator
} from '@/grammar/operation/assignment_operator/addition';
import { getTestCases } from '../../../getTestCase';

const testCases = getTestCases(__filename)


describe('addition assignment operator test', () => {
  test('get test data test', () => {
    expect(testCases.length).toBe(7)
  })

  test('addition assignment operator case test', () => {
    expect(Number(testCases[0])).toBe(additionAssignmentOperator())
  })
  
  test('back addition assignment operator case test', () => {
    expect(Number(testCases[1])).toBe(backAdditionAssignmentOperator())
  })

  test('front addition assignment operator case test', () => {
    expect(Number(testCases[2])).toBe(frontAdditionAssignmentOperator())
  })

  test('decimal addition assignment operator case test', () => {
    expect(Number(testCases[3])).toBe(decimalAdditionAssignmentOperator())
  })
  
  test('negative addition assignment operator case test', () => {
    expect(Number(testCases[4])).toBe(negativeAdditionAssignmentOperator())
  })
  
  test('string addition assignment operator case test', () => {
    expect(testCases[5]).toBe(stringAdditionAssignmentOperator())
  })
})