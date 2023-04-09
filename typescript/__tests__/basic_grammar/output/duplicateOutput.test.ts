import { getTestData } from '../../getTestCase';

describe('duplicate output test', () => {
  test('get text test', () => {
    expect(getTestData(__filename)).toBe(`ab\r\ncd`)
  })
})