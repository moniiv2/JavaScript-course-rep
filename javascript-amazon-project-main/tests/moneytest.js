import { formatCurrrency } from "../scripts/utils/money.js";

console.log('test suite: format currency')

console.log('convert cents to dollars')
if (formatCurrrency(2095) === '20.95') {
  console.log('passed')
} else {
  console.log('failed')
}

console.log('works with zero')
if (formatCurrrency(0) === '0.00') {
  console.log('passed')
} else console.log('failed')


console.log('rounds up to the nearest cent')
if (formatCurrrency(2000.5) === '20.01') {
  console.log('passed')
} else console.log('failed')


console.log('rounds down to the nearest cent')
if (formatCurrrency(2000.4) === '20.00') {
  console.log('passed')
} else console.log('failed')