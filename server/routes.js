const userRoutes = require('../routes/user');
const blogRoutes = require('../routes/blog');
const cmntRoutes = require('../routes/comments');
const adminRoutes = require('../routes/admin');
module.exports= (app) => {
    app.use('/siu', userRoutes);
    app.use('/siu/blog', blogRoutes);
    app.use('/cmnt', cmntRoutes);
    app.use('/admin', adminRoutes);


}