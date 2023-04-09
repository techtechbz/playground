import { getTestData } from '../../getTestCase';

describe('comment test', () => {
  test('get text test', () => {
    expect(getTestData(__filename)).toBe('Hello, world!')
  })
})