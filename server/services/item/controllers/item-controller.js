const { Item } = require("../models/index")

class ItemController {

    static getItem(req, res) {
        Item.findAll()
        .then(result => {
            res.status(200).json(result)
        })
        .catch(error => {
            res.status(500).json(error)
        })
    }

    static createItem(req, res) {
        const { name, price, desc, image_url } = req.body

        Item.create({
            name, price, desc, image_url
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

    static updateItem(req, res) {
        const idParam = +req.params.id
        const { name, price, desc, image_url } = req.body

        Item.update({
            name, price, desc, image_url
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

    static deleteItem(req, res) {
        const idParam = +req.params.id

        Item.destroy({
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

module.exports = ItemController