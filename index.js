const fs = require('fs')
const { xsltProcess, xmlParse } = require('xslt-processor')

const { input, output, xsl } = require('./file-config.json')

const inputString = fs.readFileSync(input).toString()
const xslString = fs.readFileSync(xsl).toString()

const outXmlString = xsltProcess(
  xmlParse(inputString),
  xmlParse(xslString)
)

console.log('INPUT: ', inputString)
console.log('OUTPUT: ', outXmlString)

fs.writeFileSync(output, outXmlString)
