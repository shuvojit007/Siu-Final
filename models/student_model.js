const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const StudentSchema = new Schema( {
    title :{
        type :String,
        required:true
    },
    description :{
        type :String,
        required:true
    },
    image: [{
            type:String
    }],  
    date: { type: Date, default: Date.now }
})


module.exports = mongoose.model('student_project', StudentSchema);