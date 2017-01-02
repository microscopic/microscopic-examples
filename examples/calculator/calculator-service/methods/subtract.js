'use strict'

module.exports = {
  name: 'subtract',
  handler: (request, reply) => {
    reply(request.params.a - request.params.b)
  }
}
