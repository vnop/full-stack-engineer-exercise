module.exports = (sequelize, DataTypes) => {
  const Geo = sequelize.define('geo', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    addressId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    lat: {
      type: DataTypes.STRING
    },
    lng: {
      type: DataTypes.STRING
    }
  });
  return Geo;
};
