import { getTestData } from "../../getTestCase"

describe('minimize test', () => {
  test('get text test', () => {
    expect(getTestData(__filename)).toBe(`ab\r\ncd`)
  })
})