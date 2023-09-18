module.exports = (sequelize, DataTypes) => {
  const studentsmanagement = sequelize.define("studentsmanagement", {
    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    contact: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    faculty: {
      type: DataTypes.STRING,
      allowNull: false
    },
    bloodGroup: {
      type: DataTypes.STRING,
      allowNull: false
    },

  });
  return studentsmanagement;
};