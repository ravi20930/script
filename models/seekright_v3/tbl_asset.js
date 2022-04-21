const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_asset', {
    asset_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    asset_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    created_on: {
      type: DataTypes.DATE,
      allowNull: true
    },
    updated_on: {
      type: DataTypes.DATE,
      allowNull: true
    },
    deleted_on: {
      type: DataTypes.DATE,
      allowNull: true
    },
    deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    asset_type: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tbl_asset_type',
        key: 'type_id'
      }
    },
    asset_synonyms: {
      type: DataTypes.STRING(1000),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tbl_asset',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "asset_id" },
        ]
      },
      {
        name: "asset_id",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "asset_id" },
        ]
      },
      {
        name: "asset_type",
        using: "BTREE",
        fields: [
          { name: "asset_type" },
        ]
      },
    ]
  });
};
