const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TransactionSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    completed_date: {
        type: Date,
        required: true
    },
    dollars: {
        type: Number,
        required: true
    }
});

module.exports = Transaction = mongoose.model('transaction', TransactionSchema);