var config = require('./config.json')
var fs = require("fs")
var replaceInFile = require('replace-in-file')
var bigNumber = require('big-number')

console.log("filePath1: ", config.filePath1)
console.log("filePath2: ", config.filePath2)

var xml = fs.readFileSync(config.filePath1, 'utf8')
// console.log("xml:",xml)

const regex = /TrialSerialNumber\">([0-9]*)/gm

var oldTrialSerialNumber, newTrialSerialNumber
var newTrialSerialNumberString = ''

while (match = regex.exec(xml)) {
	oldTrialSerialNumber = match[1]
}

console.log("oldTrialSerialNumber:", oldTrialSerialNumber)
var newNumber = bigNumber(oldTrialSerialNumber).add(10)
newTrialSerialNumber = newNumber.number.reverse()

for (var k = 0; k < newTrialSerialNumber.length; k += 1) {
	newTrialSerialNumberString = newTrialSerialNumberString + newTrialSerialNumber[k]
}
newTrialSerialNumberString = newTrialSerialNumberString.toString()

console.log("newTrialSerialNumber:", newTrialSerialNumberString)

templateOptions = {
	files: [
		config.filePath1,
		config.filePath2
	],
	from: [
		oldTrialSerialNumber
	],
	to: [
		newTrialSerialNumberString
	]
}
try {
	const changes = replaceInFile.sync(templateOptions)
	console.log('changes:', changes)
}
catch (error) {
	console.error('Error occurred:', error)
}
