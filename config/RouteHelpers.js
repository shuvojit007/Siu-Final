//Object schema description language and validator for JavaScript objects.
//validate the params or body 
const Joi = require('joi');
module.exports = {
    validateParam: (schema, name) => {
        return (req, res, next) => {
            const result = Joi.validate({ param: req['params'][name] }, schema);
            if (result.error) {
                return res.status(400).json(result.error);
            } else {
                if (!req.value)
                    req.value = {};
                if (!req.value['params'])
                    req.value['params'] = {};

                req.value['params'][name] = result.value.param;
                next();
            }
        }
    },
   
    validateBody: (schema) => {
        return (req, res, next) => {
            const result = Joi.validate(req.body, schema);
            if (result.error) {
                return res.status(400).json(result.error);
            } else {
                if (!req.value)
                    req.value = {};
                if (!req.value['body'])
                    req.value['body'] = {};

                req.value['body'] = result.value;
                next();
            }

        }
    },

    schemas: {

        authSignInSchema: Joi.object().keys({
            email: Joi.string().email().required(),
            password: Joi.string().required()
        }),
        authSignUpSchema: Joi.object().keys({
            email: Joi.string().email().required(),
            password: Joi.string().required(),
            firstName: Joi.string().required(),
            lastName: Joi.string().required(),
            phnNumber: Joi.string().required(),
            accountType: Joi.string().required(),
        })
    }
}