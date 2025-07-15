const jwt = require ('jsonwebtoken')
const { User } = require ('../models')

function authentication (req, res, next) {
    const decoded = jwt.verify(req.headers.authorization, process.env.JWT_SECRET)

    if (decoded) {
        User.findByPk(decoded.id)
            .then(user => {
                if (user) {
                    req.jwt = decoded
                    next ()
                } else {
                    throw {
                        name : `Unauthorized User`
                    }
                }
            }).catch (err => {
                next(err)
            })
    } else {
        next({
            name: `Unauthorized User`
        })
    }
}

module.exports = authentication