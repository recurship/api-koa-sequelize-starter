import Sequelize from 'sequelize';
import Database from '../../database';

const Demo = Database.define('demo', {
  name: {
    type: Sequelize.STRING,
  },
});

export default Demo;
