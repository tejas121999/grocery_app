const express = require("express")
const router = express.Router()
const controller = require('../controller/Product')

router.post('/get', controller.getProduct)
router.post('/post', controller.addProduct)
router.post('/update', controller.updateProduct)
router.post('/delete', controller.deleteProduct)

module.exports = router