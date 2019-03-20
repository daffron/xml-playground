const fs = require('fs')
const { xsltProcess, xmlParse } = require('xslt-processor')
const parser = require('xml-js')

const { input, output, xsl } = require('./file-config.json')

const inputString = fs.readFileSync(input).toString()
const xslString = fs.readFileSync(xsl).toString()

const outXmlString = xsltProcess(
  xmlParse(inputString),
  xmlParse(xslString)
)

console.log('INPUT: ', inputString)
console.log('XMl OUTPUT: ', outXmlString)

function nativeType(value) {
  const nValue = Number(value)
  if (!isNaN(nValue)) {
    return nValue
  }
  const bValue = value.toLowerCase()
  if (bValue === 'true') {
    return true
  } else if (bValue === 'false') {
    return false
  }
  return value
}

const removeJsonTextAttribute = function(value, parentElement) {
  try {
    const keyNo = Object.keys(parentElement._parent).length
    const keyName = Object.keys(parentElement._parent)[keyNo - 1]
    parentElement._parent[keyName] = nativeType(value)
  } catch (e) {}
}

const options = {
  compact: true,
  trim: true,
  ignoreDeclaration: true,
  ignoreInstruction: true,
  ignoreAttributes: true,
  ignoreComment: true,
  ignoreCdata: true,
  ignoreDoctype: true,
  textFn: removeJsonTextAttribute
}

const json = JSON.parse(parser.xml2json(outXmlString, options))

console.log('OUTPUT: ', json)

fs.writeFileSync(output, JSON.stringify(json, null, 2))
