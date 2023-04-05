import fs from 'node:fs';

const data = fs.readFileSync('./testcase/1_basic-grammer/1_coding-rule/line-break.txt', { encoding: 'utf-8' })

describe('line break test', () => {
  test('get text test', () => {
    expect(data).toBe('柿食えば鐘が鳴るなり法隆寺')
  })
})