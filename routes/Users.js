const router = require('express').Router();
let User = require('../models/User.js');

console.log("Test")

router.route('/add').post((req, res) => {
    const { username, score } = req.body;
    const newUser = new User({username, score});

    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error ' + err));
});

module.exports = router;
