var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  
  const User = require('../models/User'); // Import the User model
  User.find()
    .then(users => res.json(users))
    .catch(err => {
      console.error('Error fetching users:', err);
      res.status(500).send('Internal Server Error');
    });
});

router.post('/', function(req, res, next) {
  const User = require('../models/User'); // Import the User model
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    age: req.body.age
  });
  newUser.save()
    .then(() => console.log('User created:', newUser))
    .catch(err => console.error('Error creating user:', err));
  res.send('User created');
});

module.exports = router;
