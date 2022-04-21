const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('auditor_video_uploads', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    file_name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    file_path: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    day_type: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    asset_type: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    is_processed: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    created_on: {
      type: DataTypes.DATE,
      allowNull: false
    },
    processed_on: {
      type: DataTypes.DATE,
      allowNull: true
    },
    progressed_on: {
      type: DataTypes.DATE,
      allowNull: true
    },
    progress_value: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    is_deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    gps_file: {
      type: DataTypes.STRING(200),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'auditor_video_uploads',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
