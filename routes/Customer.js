const express = require("express")
const router = express.Router()
const controller = require('../controller/Customer')

router.post('/get', controller.getCustomer)
router.post('/post', controller.addCustomer)
router.post('/update', controller.updateCustomer)
router.post('/delete', controller.deleteCustomer)

module.exports = router