const router = require('express').Router();
const Dish = require('../../models/Dish');

// route to create/add a dish
router.post('/', async (req, res) => {
  try { 
    const dishData = await Dish.create({
    dish_name: req.body.dish_name,
    description: req.body.description,
    guest_name: req.body.guest_name,
    has_nuts: req.body.has_nuts,
  });
  res.status(200).json(dishData)
} catch (err) {
  res.status(400).json(err);
}
});

// TODO: According to MVC, what is the role of this action method?
// controller becaus it controlls the route and request to interact with the model
router.put('/:id', async (req, res) => {
  // TODO: Where is this action method sending the data from the body of the fetch request? Why?
  //it sends te data from the body of the PUT request to update the dish in the database with the mathing id
  try {
    const dish = await Dish.update(
    {
      dish_name: req.body.dish_name,
      description: req.body.description,
      guest_name: req.body.guest_name,
      has_nuts: req.body.has_nuts,
    },
    {
      where: {
        id: req.params.id,
      },
    });
    // TODO: If the database is updated successfully, what happens to the updated data below?
    // the data will be sent as a json object to the client 
    res.status(200).json(dish);
  } catch (err) {
      res.status(500).json(err);
    };
});

module.exports = router;
