import fs from 'node:fs';

const data = fs.readFileSync('./testcase/1_basic-grammer/2_output/duplicate-output.txt', { encoding: 'utf-8' })

describe('duplicate output test', () => {
  test('get text test', () => {
    expect(data).toBe(`ab\r\ncd`)
  })
})