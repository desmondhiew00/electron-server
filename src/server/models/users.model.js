import Sequelize from 'sequelize';
import { db } from '../sequelize';
import { primaryKey, AT_RECORDER } from '../../../sequelize/sequelize-column';

const Users = db.define(
  'Users',
  {
    id: primaryKey,
    name: { type: Sequelize.STRING },
    ...AT_RECORDER,
  },
  {
    tableName: 'users',
    underscored: false,
  }
);

export { Users };
export default Users;
