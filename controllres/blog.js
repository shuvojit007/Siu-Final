const Blog = require('../models/blog_model');
const User = require('../models/user_model');

module.exports ={
     //Add post by specific user
     AddBlog: async(req, res) => {
        //Find the User
        const user = await User.findById(req.user._id)
        const data = req.body;
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
        res.status(200).json(AllBlog);
    },

     //Get All post by specific user
     GetAllBlogBySpecificUser: async(req, res) => {
        const blog = await Blog.find({ user: req.user._id }).sort({ date: -1 });
        res.status(200).json(blog);
    },
     //Get post by post Id
     GetBlogById: async(req, res) => {
        const blog = await Blog
            .findById(req.value.params.blogId).populate("user");
        res.status(200).json(blog);
    },

    //Update Post
    UpdateBlog: async(req, res) => {
        const blog = await Blog
            .findByIdAndUpdate(req.value.params.blogId,
                req.value.body);
        res.status(200).json({ sucess: true });
    },

    //Delete post
    DeleteBlogById: async(req, res) => {
        const blog = await Blog.findById(req.value.params.blogId);
        if (!blog) {
            return res.status(404).json({ error: "Blog doesn\'t exist" })
        }
        const user = await User.findById(blog.user);
        user.blog.pull(blog)
        await user.save()
        await blog.remove();
        res.status(200).json({ sucess: true });
    }


}