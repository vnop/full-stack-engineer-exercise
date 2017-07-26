module.exports = (sequelize, DataTypes) => {
  const Address = sequelize.define('address', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    street: {
      type: DataTypes.STRING,
      required: true,
      allowNull: false
    },
    suite: {
      type: DataTypes.STRING
    },
    city: {
      type: DataTypes.STRING,
      required: true
    },
    zipcode: {
      type: DataTypes.STRING,
      required: true
    }
  });
  return Address;
};
