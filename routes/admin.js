const router = require('express-promise-router')();
const AdminController = require('../controllres/admin');



router.route('/')
.post(AdminController.GoToAdminPage);

router.route('/notice')
.post(AdminController.AddNewNotice)
.get(AdminController.ReadAllNotice);


router.route('/event')
.post(AdminController.AddNewEvent)
.get(AdminController.ReadAllEvent);


router.route('/newsfeed')
.post(AdminController.AddNewNews)
.get(AdminController.ReadAllNews);



//Result
router.route('/result')
.post(AdminController.AddNewResult)
.get(AdminController.ReadAllResult);
router.route('/result/:resultId')
    .put(AdminController.UpdateResult)
    .delete(AdminController.DeleteResultById);

    

// Student Project
router.route('/student')
.get(AdminController.GetAllProject)
.post(AdminController.AddNewProject);
router.route('/:studentId')
    .delete(AdminController.DeleteProjectById);

router.route('/adminuser')
.get(AdminController.GetAllUser)

router.route('/adminuser/:userId')
    .delete(AdminController.DeleteUserById);

module.exports =router;