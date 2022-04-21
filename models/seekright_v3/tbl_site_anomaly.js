const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_site_anomaly', {
    row_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    master_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tbl_site_asset',
        key: 'row_id'
      }
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
    test_image_path: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    master_image_path: {
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
    current_status: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tbl_asset_status',
        key: 'status_id'
      }
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
    },
    comment: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    remark: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    wo_status: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    wo_duration: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    wo_comments: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    wo_anomaly_status: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: "Anomaly"
    },
    complete_image_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    completed_on: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ok_desk_error: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ok_desk_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    wo_created_on: {
      type: DataTypes.DATE,
      allowNull: true
    },
    wo_ignored_on: {
      type: DataTypes.DATE,
      allowNull: true
    },
    wo_ignored_till: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tbl_site_anomaly',
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
        name: "master_id",
        using: "BTREE",
        fields: [
          { name: "master_id" },
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
