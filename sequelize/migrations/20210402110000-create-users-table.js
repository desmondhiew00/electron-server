const { primaryKey, AT_RECORDER } = require('../sequelize-column');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.createTable('users', {
        id: primaryKey,
        name: { type: Sequelize.STRING },
        ...AT_RECORDER,
      });
      return Promise.resolve();
    } catch (e) {
      return Promise.reject(e);
    }
  },

  down: async (queryInterface) => queryInterface.dropTable('users'),
};
