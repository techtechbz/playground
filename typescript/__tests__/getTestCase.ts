import fs from 'node:fs';

export const getTestData = (testFilename: string): string => {
  const filenamePattern = /([a-z]+)([A-Z][a-z]+)?.test.ts/
  const match = testFilename.match(filenamePattern)
  if (match === null) throw new Error('正規表現のパターンを見直してください。')
  
  let testCaseTextFileName = ''
  if (match[2] === undefined) {
    testCaseTextFileName = `${match[1]}.txt`
  } else {
    testCaseTextFileName = `${match[1]}_${match[2].toLowerCase()}.txt`
  }

  const testCaseTextFullPath = testFilename.replace('__tests__', 'testcase').replace(filenamePattern, testCaseTextFileName)
  return fs.readFileSync(testCaseTextFullPath, { encoding: 'utf-8' })
}

export const getTestCases = (testFilename: string): ReadonlyArray<string> => {
  return getTestData(testFilename).split('\r\n')
}