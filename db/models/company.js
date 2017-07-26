module.exports = (sequelize, DataTypes) => {
  const Company = sequelize.define('company', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      required: true
    },
    catchPhrase: {
      type: DataTypes.STRING
    },
    bs: {
      type: DataTypes.STRING
    }
  });
  return Company;
};