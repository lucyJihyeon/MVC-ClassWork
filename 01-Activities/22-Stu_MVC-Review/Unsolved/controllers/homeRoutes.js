const router = require('express').Router();
const { User } = require('../models');

router.get('/', async (req, res) => {
  // TODO: Render template with Sequelize data
  try {
    const userData = await User.findAll();
    const users = userData.map((user) => {
      return user.get({ plain: true })
    });
    res.render('homepage', {users});
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
