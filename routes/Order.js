const express = require("express")
const router = express.Router()
const controller = require('../controller/Order')

router.post('/get', controller.getOrder)
router.post('/post', controller.addOrder)
router.post('/update', controller.updateOrder)
router.post('/delete', controller.deleteOrder)

module.exports = router