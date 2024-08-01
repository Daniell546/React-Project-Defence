const router = require('express').Router();
const homeController = require('./controllers/homeController');
const userController = require('./controllers/userController');
const perfumeController = require('./controllers/perfumeController');
const commentsController = require('./controllers/commentsController');

router.use(homeController);
router.use('/user', userController)
router.use('/perfumes', perfumeController);
router.use('/comments', commentsController)

module.exports = router;