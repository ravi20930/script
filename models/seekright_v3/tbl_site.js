const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_site', {
    site_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    site_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    org_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tbl_organisation',
        key: 'org_id'
      }
    },
    direction: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tbl_direction',
        key: 'direction_id'
      }
    },
    start_chinage: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    end_chinage: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    total_km: {
      type: DataTypes.FLOAT(6,2),
      allowNull: false
    },
    site_value: {
      type: DataTypes.INTEGER,
      allowNull: true
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
    end_latitude: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    end_longitude: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    start_latitude: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    start_longitude: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    actual_start_chinage: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    actual_end_chinage: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tbl_site',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "site_id" },
        ]
      },
      {
        name: "direction",
        using: "BTREE",
        fields: [
          { name: "direction" },
        ]
      },
      {
        name: "org_id",
        using: "BTREE",
        fields: [
          { name: "org_id" },
        ]
      },
    ]
  });
};
