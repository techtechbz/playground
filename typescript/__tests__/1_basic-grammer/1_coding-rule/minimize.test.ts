import fs from 'node:fs';

const data = fs.readFileSync('./testcase/1_basic-grammer/1_coding-rule/minimize.txt', { encoding: 'ascii' })

describe('minimize test', () => {
  test('get text test', () => {
    expect(data).toBe(`ab\r\ncd`)
  })
})