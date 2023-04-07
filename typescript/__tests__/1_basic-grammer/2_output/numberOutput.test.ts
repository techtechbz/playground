import { getTestData } from '../../getTestCase';

describe('number output test', () => {
  test('get text test', () => {
    expect(getTestData(__filename)).toBe('123')
  })
})