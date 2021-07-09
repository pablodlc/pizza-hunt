const router = require('express').Router();

const {
    getAllPizzas,
    getPizzaById,
    createPizza,
    updatePizza,
    deletePizza
} = require('../../controllers/pizza-controller');

// /api/pizzas
router
    .route('/')
    .get(getAllPizzas)
    .post(createPizza);

// /api/pizzas/:id
router
    .route('/:id')
    .get(getPizzaById)
    .put(updatePizza)
    .delete(deletePizza);

module.exports = router;