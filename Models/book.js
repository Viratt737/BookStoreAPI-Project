const mongoose = require('mongoose');
const bookSchema = new mongoose.Schema({
    title:{
        type:String,
        required :['true','Book title is required'],
        trim: true,
        maxlength:[100,'Book title cannot be more than 100 characters' ],
    },
    author:{
        type:String,
        required :['true','author name is required'],
        trim: true,
    },
    year:{
        type:Number,
        required:['true','year should be required '],
    },
    createdAt:{
        type:Date,
        default: Date.now,
    }
});

module.exports = mongoose.model('Book',bookSchema);