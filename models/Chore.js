const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ChoreSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    last_completed_date: {
        type: Date,
        default: '1/1/2000'
    },
    dollars: {
        type: Number,
        required: true
    },
    complete: {
        type: Boolean,
        default: false
    }
});

module.exports = Chore = mongoose.model('chore', ChoreSchema);