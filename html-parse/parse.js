const fs = require('fs')
const html = fs.readFileSync('./sample.html', { encoding: 'utf8' })

const tokenize = require('./tokenize')


console.log(tokenize(html))
// console.log(tokenize('<h1 style="background: true">I am THE text</h1>'))