import fs from 'node:fs';

const data = fs.readFileSync('./testcase/1_basic-grammer/2_output/comment.txt', { encoding: 'utf-8' })

describe('comment test', () => {
  test('get text test', () => {
    expect(data).toBe('Hello, world!')
  })
})