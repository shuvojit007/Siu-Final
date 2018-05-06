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




router.route('/result')
.post(AdminController.AddNewResult)
.get(AdminController.ReadAllResult);
router.route('/:resultId')
    .put(AdminController.UpdateResult)
    .delete(AdminController.DeleteResultById);


module.exports =router;