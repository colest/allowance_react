const express = require('express');
const Goal = require('../../models/Goal');
const router = express.Router();

// GET api/items
// Get all items
// access = public

router.get('/', (req, res) => {
    Goal.find()
        .then(chores => res.json(chores))
});

// POST api/items
// Create an item
// access = public

router.post('/', (req, res) => {  //could this be a put/
    Goal.deleteMany({}, err => {console.log(err)});
    const newGoal = new Goal({
        name: req.body.name,
        cost: req.body.cost
    });

    newGoal.save()
            .then(goal => res.json(goal));
});

// DELETE api/items/:id
// Deletean item
// access = public

router.delete('/:id', (req, res) => {
    Goal.findById(req.params.id)
        .then(goal => goal.remove()
                .then(() => res.json({success: true})))
                .catch(err => res.status(404).json({success: false}));

});

module.exports = router;