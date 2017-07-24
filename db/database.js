const config = require('./config').development;
const Sequelize = require('sequelize');

const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.geo = require('./models/geo')(sequelize, Sequelize);
db.address = require('./models/address')(sequelize, Sequelize);
db.company = require('./models/company')(sequelize, Sequelize);
db.user = require('./models/user')(sequelize, Sequelize);

db.geo.belongsTo(db.address);
db.address.hasOne(db.geo);
db.address.belongsTo(db.user);
db.user.hasOne(db.address);
db.company.belongsTo(db.user);
db.user.hasOne(db.company);

db.sequelize.sync();

module.exports = db;
