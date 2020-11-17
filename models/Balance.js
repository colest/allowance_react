const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BalanceSchema = new Schema({
    dollars: {
        type: Number,
        required: true
    }

});

module.exports = Balance = mongoose.model('balance', BalanceSchema);