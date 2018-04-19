const Blog = require('../models/blog_model');
const User = require('../models/user_model');

module.exports ={
     //Add post by specific user
     AddBlog: async(req, res) => {
        //Find the User
        const user = await User.findById(req.user._id)
        const data = req.value.body;
        data.user = user;
        const blog = new Blog(data);
        await blog.save();

        //add post to user model
        user.blog.push(blog)
        await user.save();
        //we are done
        res.status(200).json({ sucess: true });
    },
    //Get All Post
    GetAllBlog: async(req, res) => {
        const AllBlog= await Blog.find({}).populate('user');
        res.status(200).json(Blog);
    },

     //Get All post by specific user
     GetAllBlogBySpecificUser: async(req, res) => {
        const blog = await Blog.find({ user: req.user._id }).sort({ date: -1 });
        res.status(200).json(blog);
    },

}