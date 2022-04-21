const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_site_statics', {
    row_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    org_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tbl_organisation',
        key: 'org_id'
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
    total_distance_covered: {
      type: DataTypes.FLOAT(6,2),
      allowNull: true
    },
    chainage_covered: {
      type: DataTypes.STRING(2000),
      allowNull: true
    },
    created_on: {
      type: DataTypes.DATEONLY,
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
    tableName: 'tbl_site_statics',
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
        name: "org_id",
        using: "BTREE",
        fields: [
          { name: "org_id" },
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
