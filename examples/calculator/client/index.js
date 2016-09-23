'use strict'

const Microscopic = require('microscopic');
const microscopic = new Microscopic({
  etcd: {
    hosts: [ 'http://etcd:2379' ]
  }
})

setTimeout(() => {
  const calculatorServiceClient = microscopic.createClient('calculator-service')

  calculatorServiceClient.send('add', { params: { a: 1, b: 2 } }, (error, response) => {
    console.log(`ADD: ${response.result}`)
  })

  calculatorServiceClient.send('subtract', { params: { a: 1, b: 2 } }, (error, response) => {
    console.log(`SUBTRACT: ${response.result}`)
  })
}, 6 * 1000)
