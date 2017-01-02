'use strict'

module.exports = {
  name: 'add',
  handler: (request, reply) => {
    reply(request.params.a + request.params.b)
  }
}
