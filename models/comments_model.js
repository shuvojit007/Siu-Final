const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentsSchema = new Schema({
    comment: {
        type: String,
        required: true
    },
    blog: {
        type: Schema.Types.ObjectId,
        ref: 'blog'
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('comments', CommentsSchema);