const express = require('express');
const Balance = require('../../models/Balance');
const router = express.Router();



// GET api/items
// Get all items
// access = public

router.get('/', (req, res) => {
    Balance.find()
        .then(balance=> res.json(balance))
});

router.post('/', (req, res) => {  //could this be a put/
 //   Goal.deleteMany({}, err => {console.log(err)});
    const newBalance = new Balance({
        dollars: req.body.dollars
    });

    newBalance.save()
            .then(balance => res.json(balance));
});
// PUT api/items
// Create an item
// access = public

router.put('/:id', (req, res) => {
    Balance.findOneAndUpdate(req.params.id, req.body, (err, bal) =>{
        res.json(bal);
    })

});

module.exports = router;