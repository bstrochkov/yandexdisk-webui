'use strict';

const getClientIp = require('../utils/get-client-ip');

const {
  getSorter,
  getChildren,
} = require('./lib');

module.exports = async ({
  config,
  req,
  res,
  handleError,
  path: userPath
}) => {
  try {
      config.logger.info(`Children for ${userPath} requested by ${getClientIp(req)}`);

      const children = await getChildren({config, path: userPath});
      children.items = children.items.sort(getSorter({
          caseSensitive: false,
          orderBy: req.query.orderBy,
          orderDirection: req.query.orderDirection
      }));

      return res.json(children);
  } catch (err) {
      return handleError(err);
  }
};
