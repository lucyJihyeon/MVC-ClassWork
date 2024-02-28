// TODO: Add a comment indicating how this file fits into the MVC framework (is it a Model, a View, or a Controller?) and what it is responsible for handling.
// it fits into Controller because the route commands to the model and view parts
const router = require('express').Router();

// TODO: Add a comment describing the purpose of the get route
//GET route to the root URL 
router.get('/', async (req, res) => {
//TODO: Add a comment describing the purpose of the render method
// it renders the content in the 'all.handlebars' 
  res.render('all');
});

module.exports = router;
