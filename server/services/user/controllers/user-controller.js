const { User } = require("../models/index")

class UserController {

    static getUser(req, res) {
        User.findAll()
        .then(result => {
            res.status(200).json(result)
        })
        .catch(error => {
            res.status(500).json(error)
        })
    }

    static createUser(req, res) {
        const { username, email, password } = req.body

        User.create({
            username, email, password
        }, {
            returning: true
        })
        .then(result => {
            res.status(200).json(result)
        })
        .catch(error => {
            res.status(500).json(error)
        })
    }

    static updateUser(req, res) {
        const idParam = +req.params.id
        const { username, email, password } = req.body

        User.update({
            username, email, password
        }, {
            where: {
                id: idParam
            },
            returning: true
        })
        .then(result => {
            res.status(200).json(result[1])
        })
        .catch(error => {
            res.status(500).json(error)
        })
    }

    static deleteUser(req, res) {
        const idParam = +req.params.id

        User.destroy({
            where: {
                id: idParam
            }
        })
        .then(result => {
            res.status(200).json("deleted succesfully")
        })
        .catch(error => {
            res.status(500).json(error)
        })
    }
}

module.exports = UserController