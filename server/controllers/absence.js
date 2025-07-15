const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { getTodayDateTime } = require('../helpers/getDate')

const { Absence, User } = require ('../models')

class AbsenceController {
    static addAbsence = async (req, res, next) => {
        console.log('>', req.jwt)
        console.log('>>', req.jwt.id)
        let today = new Date()
        let date = today.toISOString().slice(0, 10)
        let time = today.toISOString().slice(11, -1)
        let checkCheckIn = await Absence.findAndCountAll({ where: { date, userId: req.jwt.id }, attributes: {exlude: ['id']}, raw: true })
        console.log('<', checkCheckIn)
        if (checkCheckIn.count == 2) {
            res.status(400).send({ status: 'Error', message: `User ${req.jwt.name} Has Filled in Today's Absences` })
        } else {
            let data = {
                date,
                time,
                userId: req.jwt.id,
                status: checkCheckIn.count == 1 ? "Check Out" : "Check In",
                createdBy: req.jwt ? req.jwt.name : 'System',
                createdAt: getTodayDateTime(),
                updatedAt: getTodayDateTime(),
            }
            console.log('...', data)
            Absence.create(data)
            .then(data => {
                res.status(200).send({
                    status: 'Success',
                    message: `User ${req.jwt.name} Successfully ${data.status}`,
                    data
                })
            }).catch((err) => {
                res.status(400).send({
                    status: 'Error',
                    message: err.message
                })
                next(err)
            })
        }
    }

    static getAllAbsence (req, res, next) {
        Absence.findAll({
            order: [
                ['userId', 'ASC'],
                ['date', 'ASC']
            ],
            raw: true
        })
        .then( async data => {
            for (let x of data) {
                if (x.userId) {
                    let getName = await User.findOne({
                        where: {
                            id: x.userId
                        },
                        attributes: ['name'],
                        raw: true
                    })
                    x.name = getName.name
                } else {
                    x.name = ''
                }
            }
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

module.exports = AbsenceController