'use strict'

const Microscopic = require('microscopic');
const microscopic = new Microscopic({
  etcd: {
    hosts: [ 'http://etcd:2379' ]
  }
})

const serviceClient = microscopic.createClient('service')

serviceClient.send('validation', { params: { a: 1, b: 2 } }, (error, response) => {
  console.log(error, response)
})

serviceClient.send('validation', {
  params: {
    age: 20,
    name: 'asd1231sda'
  }
}, (error, response) => {
  console.log(error, response)
})
