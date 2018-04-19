const router = require('express-promise-router')();
const BlogControllers = require('../controllres/blog');
const { validateBody, schemas } = require('../config/RouteHelpers')
const passport = require('passport');
const passportSignIn = passport.authenticate('local', { session: false });
const passportSignJWT = passport.authenticate('jwt', { session: false });

router.route('/')
    //get all post
    .get(BlogControllers.GetAllBlog)
    //add new Post
    .post(validateBody(schemas.blogSchema), passportSignJWT, BlogControllers.AddBlog);

router.route('/userpost')
    //get the specific user post
    .get(passportSignJWT, BlogControllers.GetAllBlogBySpecificUser)

// router.route('/:postId')
//     .get(validateParam(schemas.idSchema, 'postId'), BlogControllers.GetPostById)
//     .put([validateParam(schemas.idSchema, 'postId'),
//             validateBody(schemas.updateSchema)
//         ],
//         passportSignJWT,
//         BlogControllers.UpdatePost)
//     .delete(validateParam(schemas.idSchema, 'postId'),
//         passportSignJWT,
//         BlogControllers.DeletePostById);

module.exports = router;