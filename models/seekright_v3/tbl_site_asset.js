const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_site_asset', {
    row_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    asset_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tbl_asset',
        key: 'asset_id'
      }
    },
    site_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tbl_site',
        key: 'site_id'
      }
    },
    Chainage: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    latitude: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    longitude: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    image_path: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    lhs_rhs: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tbl_direction',
        key: 'direction_id'
      }
    },
    number_anomaly: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    recent_anomaly: {
      type: DataTypes.DATE,
      allowNull: true
    },
    current_status: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tbl_asset_status',
        key: 'status_id'
      }
    },
    asset_type: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tbl_asset_type',
        key: 'type_id'
      }
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
    }
  }, {
    sequelize,
    tableName: 'tbl_site_asset',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "row_id" },
        ]
      },
      {
        name: "asset_id",
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
      {
        name: "current_status",
        using: "BTREE",
        fields: [
          { name: "current_status" },
        ]
      },
      {
        name: "lhs_rhs",
        using: "BTREE",
        fields: [
          { name: "lhs_rhs" },
        ]
      },
      {
        name: "site_id",
        using: "BTREE",
        fields: [
          { name: "site_id" },
        ]
      },
    ]
  });
};
