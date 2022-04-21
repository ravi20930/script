const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('auditor_anomaly_audit', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Pos: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    Side: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    Asset: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    Frame_Master: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Chainage: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    Frame_Test: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    video_name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    Created_on: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    Deleted_on: {
      type: DataTypes.DATE,
      allowNull: true
    },
    speed: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    IsAudited: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    Audited_on: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Comments: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Audit_status: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    Audit_value: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    IsUploaded: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    Uploaded_on: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Group_name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Plaza: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    Extra_Image: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    Algorithm: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'auditor_anomaly_audit',
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
