const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync('./content/subfolder/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

writeFileSync('./content/result-sync.txt', `Here is the Result: ${first}, ${second}`, { flag : 'a' })