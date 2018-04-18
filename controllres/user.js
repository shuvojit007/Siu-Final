const JWT = require('jsonwebtoken');
const User = require('../models/user_model');
const bcrypt = require('bcryptjs');
const { JWT_SECRET } = require('../config/config');

signToken = (user) => {
    return JWT.sign({
        iss: 'CRUX',
        sub: user._id,
        iat: new Date().getTime(),
        exp: new Date().setDate(new Date().getDate() + 1)
    }, JWT_SECRET);
}
module.exports = {

    Signup : async(req,res)=>{
        const { email, password, firstName, lastName, accountType,phnNumber } = req.body;
        const salt = await bcrypt.genSalt(10)
        const passHash = await bcrypt.hash(password, salt)

        const newUser = new User({
            method: accountType,
            email,
            password : passHash,
            firstName,
            lastName,
            phnNumber,
            accountType
        })

        const user = await newUser.save();
        console.log(user)
        const token = signToken(newUser);
        res.status(200).json({ token })
    },
    SignIn: async(req, res) => {
        const token = signToken(req.user);
        res.status(200).json({ token });
    },
    User: async(req, res) => {
        const user = await User.findById(req.user._id)
        console.log(user)
        res.status(200).json(user);
    },
    UpdatePro: async(req, res) => {
        const user = await User.findByIdAndUpdate(req.user._id, req.value.body);
        res.status(200).json({ sucess: true });
    }
}