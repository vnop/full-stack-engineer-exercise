const db = require('./database');
const fs = require('fs');
const path = require('path');
const userData = JSON.parse(fs.readFileSync(path.join(__dirname, '../exercise-api-result.json'), 'utf8'));

userData.forEach(item => {
  let user = {
    name: item.name,
    username: item.username,
    email: item.email,
    phone: item.phone,
    website: item.website
  };
  let address = {
    street: item.address.street,
    suite: item.address.suite,
    city: item.address.city,
    zipcode: item.address.zipcode
  };
  let company = {
    name: item.company.name,
    catchPhrase: item.company.catchPhrase,
    bs: item.company.bs
  };
  let geo = {
    lat: item.address.geo.lat,
    lng: item.address.geo.lng
  };

  db.user
    .create(user)
    .then(() => {
      db.user.findOrCreate({ where: { username: user.username } }).spread((user, created) => {
        db.address
          .create({
            userId: user.get('id'),
            street: address.street,
            suite: address.suite,
            city: address.city,
            zipcode: address.zipcode
          })
          .then(() => {
            db.address.findOrCreate({ where: { street: address.street } }).spread((addy, created) => {
              db.geo.create({
                addressId: addy.get('id'),
                lat: geo.lat,
                lng: geo.lng
              });
            });
          });
        db.company.create({
          userId: user.get('id'),
          name: company.name,
          catchPhrase: company.catchPhrase,
          bs: company.bs
        });
      });
    })
    .catch(err => console.error(err));
});
