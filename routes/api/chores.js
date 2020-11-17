const express = require('express');
const router = express.Router();
const methodOverride = require('method-override');

const Chore = require('../../models/Chore');
router.use(methodOverride('_method'));
// GET api/items
// Get all items
// access = public

router.get('/', (req, res) => {
    Chore.find()
        .then(chores => res.json(chores))
});

// POST api/items
// Create an item
// access = public

router.post('/', (req, res) => {
    const newChore = new Chore({
        name: req.body.name,
        dollars: req.body.dollars
    });

    newChore.save()
            .then(chore => res.json(chore));
});

// DELETE api/items/:id
// Deletean item
// access = public

router.delete('/:id', (req, res) => {
    Chore.findById(req.params.id)
        .then(chore => chore.remove()
                .then(() => res.json({success: true})))
                .catch(err => res.status(404).json({success: false}));

});

router.put('/:id', (req, res) => {
    Chore.findByIdAndUpdate(req.params.id, {$set:req.body},{new:true}, (err, chore) =>{
        console.log(req.params.id);
        console.log(req.body)
        console.log(chore);
        res.json(chore);
        
    })

});

module.exports = router;