'use strict'

const Microscopic = require('microscopic');
const microscopic = new Microscopic({
  etcd: {
    hosts: [ 'http://etcd:2379' ]
  }
})

const calculatorService = microscopic.createService('calculator-service', {
  transport: {
    type: 'microscopic-rabbitmq-transport',
    url: 'amqp://rabbitmq-server:5672'
  }
})

calculatorService.addMethod({
  name: 'add',
  handler: (request, reply) => {
    reply(request.params.a + request.params.b)
  }
})

calculatorService.addMethod({
  name: 'subtract',
  handler: (request, reply) => {
    reply(request.params.a - request.params.b)
  }
})

setTimeout(() => {
  calculatorService.start()
}, 5 * 1000)
