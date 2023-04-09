import { getTestData } from "../../getTestCase"

describe('indent test', () => {
  test('get text test', () => {
    expect(getTestData(__filename)).toBe(`0\r\n1\r\n2\r\n3\r\n4`)
  })
})