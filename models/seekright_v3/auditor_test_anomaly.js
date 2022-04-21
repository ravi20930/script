const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('auditor_test_anomaly', {
    index: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    Pos: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    Side: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    Asset: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    Frame_Master: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    Chainage: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    Frame_Test: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    video_name: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    speed: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'auditor_test_anomaly',
    timestamps: false,
    indexes: [
      {
        name: "ix_test_anomaly_index",
        using: "BTREE",
        fields: [
          { name: "index" },
        ]
      },
    ]
  });
};
