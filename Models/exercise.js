const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const exerciseSchema = new Schema ({
    name: {
    type: String,
    trim: true, 
    required: "Enter a name for this workout"
    },
    value: {
    type: Number,
    required: "Enter the duration"
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Excercise = mongoose.model('Exercise', excerciseSchema);

module.exports = Excercise;