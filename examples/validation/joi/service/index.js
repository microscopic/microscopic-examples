'use strict'

const Joi = require('joi')

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

service.register(require('microscopic-validation-joi'), { abortEarly: false })

service.addMethod({
  name: 'validation',
  params: {
    username: Joi.string().alphanum().min(3).max(30).required(),
    password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
    access_token: [ Joi.string(), Joi.number() ],
    birthyear: Joi.number().integer().min(1900).max(2016),
    email: Joi.string().email()
  },
  handler: (request, reply) => {
    reply('Ok')
  }
})

service.start()
