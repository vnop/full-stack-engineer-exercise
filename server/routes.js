const router = require('express').Router();
const controllers = require('./controllers');

router.get('/', controllers.home);

router.get('/api/users', controllers.getUsers);

router.get('*', controllers.home);

module.exports = router;
