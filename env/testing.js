/*
 * Testing Environment - used by automated endpoint tests.
 */
module.exports = {
  REQUEST_LOGS: false,
  MYSQL: {
    host: 'localhost',
    user: 'root',
    password: 'test',
    database: 'ucc-v3-backend-test',
  },
};
