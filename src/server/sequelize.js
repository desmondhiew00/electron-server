/* eslint-disable no-console */
import { app } from 'electron';
import { Sequelize } from 'sequelize';
import path from 'path';
import Umzug from 'umzug';

const dbName = process.env.DB_NAME;
const storage = path.resolve(app.getPath('appData'), dbName);

export const db = new Sequelize({
  dialect: 'sqlite',
  storage,
  logging: false,
  dialectOptions: { decimalNumbers: true },
  define: {
    paranoid: true,
    timestamps: true,
    freezeTableName: true,
    underscored: true
  },
});

export const migrate = async () => {
  try {
    const sequelize = db;
    const umzug = new Umzug({
      storage: 'sequelize',
      storageOptions: { sequelize },
      migrations: {
        params: [sequelize.getQueryInterface(), Sequelize],
        path: path.join(app.getAppPath(), './sequelize/migrations'),
      },
    });
    await umzug.up();
    console.log(`${dbName}: Successfully run migration`);
    return Promise.resolve(sequelize);
  } catch (e) {
    console.log(`${dbName}: ${e.message}`);
    return Promise.reject(e);
  }
};

export default db;
