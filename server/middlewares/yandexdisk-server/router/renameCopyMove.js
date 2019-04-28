'use strict';

module.exports = ({ config, req, res, handleError }) => {
  return handleError(Object.assign(
      new Error(`All items must be from one folder`),
      { httpCode: 501 }
  ));
};
