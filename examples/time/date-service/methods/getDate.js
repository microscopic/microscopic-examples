'use strict'

const utils = require('microscopic-utils');
const IP = utils.ip

module.exports = {
  name: 'getDate',
  handler: (request, reply) => {
    reply({ date: new Date().toDateString(), ip: IP.getIP() })
  }
}
