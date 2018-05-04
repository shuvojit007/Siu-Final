const mongoose = require('mongoose')
const Schema = mongoose.Schema
const uniqueValidator = require('mongoose-unique-validator')
const bcrypt = require('bcryptjs');
const passwordReg = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
const validator =require('validator')

const UserSchema = new Schema({
    firstName: {
        type: String,
        required: [true, 'FirstName is required'],
        trim: true
    },
    lastName: {
        type: String,
        required: [true, 'LastName is required'],
        trim: true,
    },
     email: {
        type: String,
        unique: true,
        required: [true, 'Email is Required!'],
        trim: true,
        validate: {
            validator(email) {
                return validator.isEmail(email)
            },
            message: '{VALUE} is not a valid Email!'
        }
    },
    blog: [{
        type: Schema.Types.ObjectId,
        ref: 'blog'
    }],
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'comments'
    }],
    password: {
        type: String,
        required: [true, 'password is required'],
        trim: true,
        minlength: [6, 'Password need to be longer!'],
        validate: {
            validator(password) {
                return passwordReg.test(password)
            },
            message: '{VALUE} is not a valid password'
        }
    },
    accountType:String,
    method: {
        type: String,
        enum: ['student', 'teacher','alumni'],
        require: true
    },
    student:{
        roll_no:{
            type:Number,
            default:null,
            require : true
        },
        semester:{
            type:String,
            default:null,
            require : true
        },
        reg:{
            type:Number,
            default:null,
            require : true
        }
    },
    alumni:{
        designation:{
            type :String,
            default:null,
            require : true,
        },
        batch:{
            type :String,
            default:null,
            require : true,
        },
        current_status:{
            type:String,
            default:null,
            require : true,
        },
        passing_year :{
            type:Number,
            default:null,
            require : true,
        }
    },
    teacher:{
        designation:{
            type :String,
            default:null,
            require : true,
        },
        education:{
            type :String,
            default:null,
            require : true,
        }
    }
}, {
    timestamps: true
})

    //To chekc is the given pass is correct or not
    UserSchema.methods.isValidPassword = async function(newPass) {
        try {
            return await bcrypt.compare(newPass, this.password)
        } catch (error) {
            throw new Error(error);
        }
    }

module.exports= mongoose.model('user',UserSchema);