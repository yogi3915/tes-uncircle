const router = require('express').Router()
const ItemController = require("../controllers/item-controller")

router.get("/", ItemController.getItem)
router.post("/", ItemController.createItem)
router.put("/:id", ItemController.updateItem)
router.delete("/:id", ItemController.deleteItem)

module.exports = router