const router = require('express-promise-router')();
const UserController = require('../controllres/user');
const { validateBody, schemas } = require('../config/RouteHelpers')
const passport = require('passport');
const passportSignIn = passport.authenticate('local', { session: false });
const passportSignJWT = passport.authenticate('jwt', { session: false });

router.route('/signup')
.post(validateBody(schemas.authSignUpSchema),UserController.Signup)

router.route('/signin')
    .post(validateBody(schemas.authSignInSchema),
        passportSignIn,
        UserController.SignIn
    );

    
router.route('/user')
.get(passportSignJWT, UserController.User)
.put(validateBody(schemas.updateUserPicSchema),
    passportSignJWT,
    UserController.UpdatePro);

module.exports = router;