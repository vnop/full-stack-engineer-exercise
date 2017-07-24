const path = require('path');
const db = require('../db/database');

module.exports = {
  home: function(req, res) {
    res.sendFile(path.join(__dirname, '../index.html'));
  },
  getUsers: function(req, res) {
    db.user
      .findAll({
        attributes: { exclude: ['createdAt', 'updatedAt'] },
        include: [
          {
            model: db.address,
            attributes: { exclude: ['createdAt', 'updatedAt', 'id', 'userId'] },
            include: {
              model: db.geo,
              attributes: { exclude: ['createdAt', 'updatedAt', 'id', 'addressId'] }
            }
          },
          {
            model: db.company,
            attributes: { exclude: ['createdAt', 'updatedAt', 'id', 'userId'] }
          }
        ]
      })
      .then(user => {
        res.json(user);
      })
      .catch(err => console.error(err));
  }
};
