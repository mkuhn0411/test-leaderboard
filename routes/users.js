const router = require('express').Router();
const User = require('../models/User.js');

router.route('/').get(async (req, res) => {
    const users = await User.find();
    console.log(users)
    return res.status(200).json({
        title: "Express Testing",
        message: "The app is working properly!",
      });
})

router.route('/add').post((req, res) => {
    console.log(req.body)
    const { username, score } = req.body;
    const newUser = new User({username, score});

    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error ' + err));
});

module.exports = router;
