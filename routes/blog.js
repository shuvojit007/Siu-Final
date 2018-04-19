const router = require('express-promise-router')();
const BlogControllers = require('../controllres/blog');
const { validateBody,  validateParam, schemas } = require('../config/RouteHelpers')
const passport = require('passport');
const passportSignIn = passport.authenticate('local', { session: false });
const passportSignJWT = passport.authenticate('jwt', { session: false });

router.route('/')
    //get all post
    .get(BlogControllers.GetAllBlog)
    //add new Post
    .post(validateBody(schemas.blogSchema), passportSignJWT, BlogControllers.AddBlog);

router.route('/userblog')
    //get the specific user post
    .get(passportSignJWT, BlogControllers.GetAllBlogBySpecificUser)

router.route('/:blogId')
    .get(validateParam(schemas.idSchema, 'blogId'), BlogControllers.GetBlogById)
    .put([validateParam(schemas.idSchema, 'blogId'),
            validateBody(schemas.updateSchema)
        ],
        passportSignJWT,
        BlogControllers.UpdateBlog)
    .delete(validateParam(schemas.idSchema, 'blogId'),
        passportSignJWT,
        BlogControllers.DeleteBlogById);

module.exports = router;