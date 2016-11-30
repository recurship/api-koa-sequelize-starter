import Sequelize from 'sequelize';
import envs from '../project-env';
import winston from 'winston';

let MYSQL = envs.MYSQL;

const instance = new Sequelize(
    MYSQL.database,
    MYSQL.user,
    MYSQL.password, {
  host: MYSQL.host,
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
});

if(process.env.resetdb){
  instance.sync({ force: true }).then((err) => {
      console.log('All data has been reset');
  }, function (err) {
      console.log('An error occurred while creating the table:', err);
  });
}

export default instance;
