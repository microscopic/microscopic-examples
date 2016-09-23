'use strict'

const Microscopic = require('microscopic');
const microscopic = new Microscopic({
  etcd: {
    hosts: [ 'http://etcd:2379' ]
  }
})

const dateServiceClient = microscopic.createClient('date-service')
const timeServiceClient = microscopic.createClient('time-service')

setInterval(() => {
  dateServiceClient.send('getDate', {}, (error, response) => {
    const date = response.result.date

    console.log(`DATE FROM: ${response.result.ip}`)

    timeServiceClient.send('getTime', {}, (error, response) => {
      const time = response.result.time

      console.log(`TIME FROM ${response.result.ip}`)

      console.log(`${date} ${time}`)
    })
  })
}, 100)
