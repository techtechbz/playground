import fs from 'node:fs';

const data = fs.readFileSync('./testcase/1_basic-grammer/1_coding-rule/indent.txt', {encoding: 'ascii'})

describe('indent test', () => {
  test('get text test', () => {
    expect(data).toBe(`0\r\n1\r\n2\r\n3\r\n4`)
  })
})