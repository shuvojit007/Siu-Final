const userRoutes = require('../routes/user');
const blogRoutes = require('../routes/blog');
module.exports= (app) => {
    app.use('/siu', userRoutes);
    app.use('/siu/blog', blogRoutes);

}