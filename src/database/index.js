import Sequelize from 'sequelize';
import envs from '../project-env';
import winston from 'winston';

const MYSQL = envs.MYSQL;

const instance = new Sequelize(
    MYSQL.database,
    MYSQL.user,
    MYSQL.password,
  {
    host: MYSQL.host,
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      idle: 10000,
    },
  },
);

if (process.env.resetdb) {
  instance.sync({ force: true }).then(() => {
    winston.info('All data has been reset');
  }, (err) => {
    winston.info('An error occurred while creating the table:', err);
  });
}

export default instance;
