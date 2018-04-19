const router = require('express-promise-router')();
const ComntControllers = require('../controllres/comments');
const { validateParam, validateBody, schemas } = require('../config/RouteHelpers');
const passport = require('passport');
const passportSignJWT = passport.authenticate('jwt', { session: false });

router.route('/:blogId')

//get All comments
.get(validateParam(schemas.idSchema, 'blogId'), ComntControllers.GetAllBlogComntById)

//post a new Comment 
.post([validateParam(schemas.idSchema, 'blogId'),
        validateBody(schemas.commentsSchema)
    ],
    passportSignJWT,
    ComntControllers.BlogComment);

module.exports = router;