const userRoutes = require('../routes/user');
const blogRoutes = require('../routes/blog');
const cmntRoutes = require('../routes/comments');
module.exports= (app) => {
    app.use('/siu', userRoutes);
    app.use('/siu/blog', blogRoutes);
    app.use('/siu/cmnt', cmntRoutes);

}