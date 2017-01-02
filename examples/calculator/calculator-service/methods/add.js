'use strict'

module.exports = {
  name: 'add',
  handler: (request, reply) => {
    console.log(this)
    reply(request.params.a + request.params.b)
  }
}
