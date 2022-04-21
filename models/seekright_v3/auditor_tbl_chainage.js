const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('auditor_tbl_chainage', {
    row_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    lhs_chainage_covered: {
      type: DataTypes.STRING(1000),
      allowNull: true,
      defaultValue: "[]"
    },
    rhs_chainage_covered: {
      type: DataTypes.STRING(1000),
      allowNull: true,
      defaultValue: "[]"
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'auditor_tbl_chainage',
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
    ]
  });
};
