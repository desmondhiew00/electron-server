const Sequelize = require('sequelize');

const primaryKey = { type: Sequelize.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true };

function foreignKey(field, model, {
  referenceKey = 'id', onDelete = 'SET NULL', onUpdate = 'CASCADE', allowNull = true, extra = {},
} = {}) {
  return {
    type: Sequelize.INTEGER.UNSIGNED,
    allowNull,
    field,
    references: {
      model,
      key: referenceKey,
    },
    onDelete,
    onUpdate,
    ...extra,
  };
}

const AT_RECORDER = {
  createdAt: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
    field: 'created_at',
  },
  updatedAt: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
    field: 'updated_at',
  },
  deletedAt: {
    type: Sequelize.DATE,
    allowNull: true,
    field: 'deleted_at',
  },
};

const BY_RECORDER = {
  createdBy: {
    type: Sequelize.INTEGER.UNSIGNED,
    allowNull: true,
    field: 'created_by',
    references: {
      model: 'users',
      key: 'id',
    },
    onDelete: 'SET NULL',
  },
  updatedBy: {
    type: Sequelize.INTEGER.UNSIGNED,
    allowNull: true,
    field: 'updated_by',
    references: {
      model: 'users',
      key: 'id',
    },
    onDelete: 'SET NULL',
  },
  deletedBy: {
    type: Sequelize.INTEGER.UNSIGNED,
    allowNull: true,
    field: 'deleted_by',
    references: {
      model: 'users',
      key: 'id',
    },
    onDelete: 'SET NULL',
  },
};

const active = {
  type: Sequelize.BOOLEAN,
  allowNull: false,
  defaultValue: true,
};

module.exports = {
  primaryKey, foreignKey, AT_RECORDER, BY_RECORDER, active,
};
