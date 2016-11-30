const { PROJECT_ENV } = process.env;
const ENV_WHITELIST = ['local', 'testing', 'staging'];
import winston from 'winston';

/* istanbul ignore if */
if (!PROJECT_ENV || ENV_WHITELIST.includes(PROJECT_ENV) === -1) {
  throw new Error(`PROJECT_ENV: must be one of ${ENV_WHITELIST}`);
}

const k = require(`../env/${PROJECT_ENV}`);

export default k;