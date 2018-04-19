const Blog = require('../models/blog_model');
const User = require('../models/user_model');
const Comments = require('../models/comments_model');

module.exports = {
    BlogComment: async(req, res) => {
        const newComment = req.value.body;

        const blog = await Blog.findById(req.value.params.blogId);
        newComment.blog = blog;

        const user = await User.findById(req.user._id);
        newComment.user = user;

        const comment = new Comments(newComment);
        await comment.save();

        blog.comments.push(comment)
        await blog.save();
        blog.comments.push(comment)
        await user.save();

        res.status(200).json({ sucess: true })
    },

    GetAllBlogComntById: async(req, res) => {
        const comment = await Comments.find({ post: req.value.params.blogId }).populate("user");
        res.status(200).json(comment)
    }
}