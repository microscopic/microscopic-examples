'use strict'

const Joi = require('joi')

module.exports = {
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
}
