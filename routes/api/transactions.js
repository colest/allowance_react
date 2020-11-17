const express = require('express');
const Transaction = require('../../models/Transaction');
const router = express.Router();

router.get('/', (req, res) => {
    Transaction.find()
        .sort({'completed_date': -1})
        .limit(5)
        .exec()
        .then(transactions=> res.json(transactions))
});

router.post('/', (req, res) => {  
    const newTransaction = new Transaction({
        name: req.body.name,
        dollars: req.body.dollars,
        completed_date: Date.now()
        
    });

    newTransaction.save()
            .then(transaction => res.json(transaction));
});

module.exports = router;