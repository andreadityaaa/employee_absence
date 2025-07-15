const router = require ('express').Router()
const authentication = require('../middlewares/authentication')
const AbsenceController = require ('../controllers/absence')

router.post('/add', authentication, AbsenceController.addAbsence)
router.get('/all', authentication, AbsenceController.getAllAbsence)
// router.post('/register', authentication, UserController.registerUser)
// router.post('/update', authentication, UserController.updateUser)
// router.get('/selecteduser/:id', authentication, UserController.getSelectedUser)
// router.post('/update/:id', authentication, UserController.updateUser)

module.exports = router