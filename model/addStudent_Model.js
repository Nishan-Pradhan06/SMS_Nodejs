module.exports = (sequelize, DataTypes) => {
  const studentsmanagement = sequelize.define("studentsmanagement", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,

    },
    address: {
      type: DataTypes.STRING,
      allowNull: true
    },
    contact: {
      type: DataTypes.STRING,
      allowNull: false
    },
    class: {
      type: DataTypes.STRING,
      allowNull: false
    },
    bloodgroup: {
      type: DataTypes.STRING,
      allowNull: false
    },

  });
  return studentsmanagement;
};