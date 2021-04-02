require('../config/env');

const path = require('path');
const appDataPath = require('appdata-path');

const storage = path.resolve(appDataPath(), process.env.DB_NAME);

module.exports = {
  development: {
    dialect: 'sqlite',
    storage,
  },
  staging: {
    dialect: 'sqlite',
    storage,
  },
  production: {
    dialect: 'sqlite',
    storage,
  },
};
