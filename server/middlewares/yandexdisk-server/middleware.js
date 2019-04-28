'use strict';

const router = require('./router');
const logger = require('./logger');

module.exports = config => router({
  rootName: config.rootName,
  readOnly: config.readOnly,
  logger: config.logger || logger,
  token: config.token,
});
