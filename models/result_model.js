const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const ResultSchema = new Schema( {
    title :{
        type :String,
        required:true
    },
    description :{
        type :String,
        required:true
    },
    image:String,  
   
    date: { type: Date, default: Date.now }
})


module.exports = mongoose.model('result', ResultSchema);