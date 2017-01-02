'use strict'

const Microscopic = require('microscopic');
const microscopic = new Microscopic({
  etcd: {
    hosts: [ 'http://localhost:2379' ]
  }
})

const calculatorServiceClient = microscopic.createClient('calculator-service')

console.log(calculatorServiceClient);

calculatorServiceClient.send('add', { params: { a: 1, b: 2 } }, (error, response) => {
  console.log(`ADD: ${response.result}`)
})

calculatorServiceClient.send('subtract', { params: { a: 1, b: 2 } }, (error, response) => {
  console.log(`SUBTRACT: ${response.result}`)
})
