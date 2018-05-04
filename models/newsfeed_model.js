const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const NewFeedSchema = new Schema( {
    title :{
        type :String,
        required:true
    },
    description :{
        type :String,
        required:true
    },
   
    date: { type: Date, default: Date.now }
})


module.exports = mongoose.model('newsfeed', NewFeedSchema);