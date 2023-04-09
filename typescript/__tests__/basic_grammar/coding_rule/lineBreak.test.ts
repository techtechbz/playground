import { lineBreakHaiku } from "@/grammar/coding_rule/lineBreak"
import { getTestData } from "../../getTestCase"

describe('line break test', () => {
  test('get text test', () => {
    expect(getTestData(__filename)).toBe(lineBreakHaiku)
  })
})