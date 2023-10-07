const express = require("express")
const router = express.Router()
const cart = require('./Cart')
const customer = require('./Customer')
const order = require('./Order')
const product = require('./Product')

router.use('/cart', cart)
router.use('/customer', customer)
router.use('/order', order)
router.use('/product', product)

module.exports = router