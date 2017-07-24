module.exports = {
  development: {
    username: 'root',
    password: null,
    database: 'lenndDB',
    host: 'localhost',
    dialect: 'mysql'
  },
  test: {
    username: 'root',
    password: null,
    database: 'lenndDB',
    host: '127.0.0.1',
    dialect: 'mysql'
  },
  production: {
    username: 'root',
    password: 'root',
    database: 'articles',
    host: '127.0.0.1',
    dialect: 'mysql'
  }
};
