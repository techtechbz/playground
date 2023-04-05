import fs from 'node:fs';

const data = fs.readFileSync('./testcase/1_basic-grammer/2_output/hello-world.txt', { encoding: 'utf-8' })

describe('hello world test', () => {
  test('get text test', () => {
    expect(data).toBe('Hello, world!')
  })
})