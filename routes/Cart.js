const express = require("express")
const router = express.Router()
const controller = require('../controller/Cart')

router.post('/get', controller.getCart)
router.post('/post', controller.addCart)
router.post('/update', controller.updateCart)
router.post('/delete', controller.deleteCart)

module.exports = router