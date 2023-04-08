import { getTestData } from '../../getTestCase';

describe('hello world test', () => {
  test('get text test', () => {
    expect(getTestData(__filename)).toBe('Hello, world!')
  })
})