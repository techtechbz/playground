import fs from 'node:fs';

const data = fs.readFileSync('./testcase/1_basic-grammer/2_output/number-output.txt', { encoding: 'utf-8' })

describe('number output test', () => {
  test('get text test', () => {
    expect(data).toBe('123')
  })
})