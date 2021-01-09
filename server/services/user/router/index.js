const router = require('express').Router()
const UserController = require("../controllers/user-controller")

router.get("/", UserController.getUser)
router.post("/", UserController.createUser)
router.put("/:id", UserController.updateUser)
router.delete("/:id", UserController.deleteUser)

module.exports = router