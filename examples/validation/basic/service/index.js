'use strict'

const Microscopic = require('microscopic');
const microscopic = new Microscopic({
  etcd: {
    hosts: [ 'http://etcd:2379' ]
  }
})

const service = microscopic.createService('service', {
  transport: {
    type: 'microscopic-tcp-transport'
  }
})

service.register(require('microscopic-validation'))

service.addMethod({
  name: 'validation',
  params: {
    age: (value) => value > 18 || 'Must be > 18',
    name: [
      (value) => typeof value === 'string' || 'Must be a string',
      (value) => value && value.length > 3 && value.length < 20 || 'Must be at least 3  and no more than 20',
    ]
  },
  handler: (request, reply) => {
    reply('Ok')
  }
})

service.start()
