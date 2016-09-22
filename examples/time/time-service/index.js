'use strict'

const utils = require('microscopic-utils');
const IP = utils.ip

const Microscopic = require('microscopic');
const microscopic = new Microscopic({
  etcd: {
    hosts: [ 'http://etcd:2379' ]
  }
})

const timeService = microscopic.createService('time-service', {
  transport: { type: 'microscopic-http-transport' },
  loadbalancer: 'microscopic-random-load-balancer',
})

timeService.addMethod({
  name: 'getTime',
  handler: (request, reply) => {
    reply({ time: new Date().toTimeString(), ip: IP.getIP() })
  }
})

timeService.start()
