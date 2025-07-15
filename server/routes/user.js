const router = require ('express').Router()
const authentication = require('../middlewares/authentication')
const UserController = require ('../controllers/user')

router.post('/login', UserController.loginUser)
router.post('/register', authentication, UserController.registerUser)
router.post('/update', authentication, UserController.updateUser)
router.get('/alluser', authentication, UserController.getAllUser)
router.get('/selecteduser/:id', authentication, UserController.getSelectedUser)
router.post('/update/:id', authentication, UserController.updateUser)

module.exports = router