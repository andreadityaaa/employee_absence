const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { getTodayDateTime } = require('../helpers/getDate')

const { User } = require ('../models')

class UserController {
    static registerUser (req, res, next) {
        let data = {
            ...req.body,
            phone: Number('62' + req.body.phone),
            createdBy: req.jwt ? req.jwt.name : 'System',
            createdAt: getTodayDateTime(),
            updatedAt: getTodayDateTime(),
        }
        User.create(
            data    
        ).then(user => {
            res.status(200).send({
                status: 'Success',
                message: 'Successfully Created User',
                data: user
            })
        }).catch((err) => {
            res.status(400).send({
                status: 'Error',
                message: err.message
            })
            next(err)
        })
    }

    static updateUser (req, res, next) {
        let { id } = req.params
        let data = {
            ...req.body,
            updatedBy: req.jwt ? req.jwt.name : 'System',
            updatedAt: getTodayDateTime(),
        }
        User.update(data, { 
            where: { id }
        }
        ).then(user => {
            res.status(200).send({
                status: 'Success',
                message: `User ${id} Successfully Updated`,
            })
        }).catch((err) => {
            res.status(400).send({
                status: 'Error',
                message: err.message
            })
            next(err)
        })
    }

    static loginUser (req, res, next) {
        const {email, password} = req.body
        User.findOne ({
            where : {
                email
            }
        }).then (user => {
            if (!user) {   
                throw {
                    message: `Wrong Email / Password`
                }
            }
            const validPassword = bcryptjs.compareSync(password, user.password)
            if (validPassword) {
                const access_token = jwt.sign({
                    id : user.id,
                    name: user.name,
                    email : user.email,
                }, process.env.JWT_SECRET)
                res.status(200).json({
                    data: {
                        id : user.id,
                        name: user.name,
                        email: user.email,
                        token: access_token
                    }
                })
            } else {
                throw {
                    message : `Wrong Email / Password`
                }
            }
        }).catch (err => {
            console.log('...', err)
            res.status(400).send({
                status: 'Error',
                message: err.message
            })
        })
    }

    static getAllUser (req, res, next) {
        console.log('>', req.jwt)
        User.findAll({
            attributes: { exclude: ['password'] }
        })
        .then(data => {
            res.status(200).send(data)
        })
        .catch(err => {
            res.status(400).send({
                status: 'Error',
                message: err.message
            })
        })
    }

    static getSelectedUser (req, res, next) {
        let { id } = req.params
        User.findAll({
            where: {
                id
            },
            attributes: { exclude: ['password'] }
        })
        .then(data => {
            res.status(200).send(data)
        })
        .catch(err => {
            res.status(400).send({
                status: 'Error',
                message: err.message
            })
        })
    }
}

module.exports = UserController