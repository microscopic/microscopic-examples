'use strict'

const utils = require('microscopic-utils');
const IP = utils.ip

const Microscopic = require('microscopic');
const microscopic = new Microscopic({
  etcd: {
    hosts: [ 'http://etcd:2379' ]
  }
})

const dateService = microscopic.createService('date-service', {
  transport: { type: 'microscopic-tcp-transport' },
  loadbalancer: 'microscopic-roundrobin-load-balancer',
})

dateService.addMethod({
  name: 'getDate',
  handler: (request, reply) => {
    reply({ date: new Date().toDateString(), ip: IP.getIP() })
  }
})

dateService.start()
