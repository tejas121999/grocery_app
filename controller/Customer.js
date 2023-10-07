const { Customer } = require('../model')
const bcrypt = require("bcrypt")
const { createTokens } = require("../middleware/JWT")

exports.getCustomer = async (req, res) => {
    try {
        const getCustomer = await Customer.findAndCountAll({
            where: {
                isDelete: false
            },
            limit: req.body.limit,
            offset: req.body.offset,
        })

        if (!getCustomer) {
            return res.status(200).json({
                message: "Data not found",
                data: getCustomer
            })
        } else {
            return res.status(200).json({
                message: "Success",
                data: getCustomer
            })
        }
    } catch (error) {
        return res.status(500).json({
            message: "Server Error",
            error
        })
    }
}

// register user
exports.addCustomer = async (req, res) => {
    try {
        const { customer } = req.body
        const find_customer = await Customer.findOne({
            where: {
                customer_email: customer.customer_email,
                isDelete: false
            }
        })
        if (find_customer) {
            return res.status(400).json({
                message: "Customer already exist"
            })
        } else {
            await bcrypt.hash(customer.password, 10).then(async (hash) => {
                customer.password = hash
                await Customer.create(customer).then((result) => {
                    const accessToken = createTokens(createUser)
                    return res.status(200).json({
                        message: "Customer register Successfully",
                        accessToken,
                        result
                    })
                }).catch((err) => {
                    return res.status(400).json({
                        message: "Something went's wrong",
                    })
                });
            })
        }
    } catch (error) {
        return res.status(500).json({
            message: "Server error",
            error
        })
    }
}

exports.updateCustomer = async (req, res) => {
    try {
        const { customer } = req.body
        await Customer.update(customer, {
            where: {
                id: customer.id
            }
        }).then((resp) => {
            return res.status(200).json({
                message: "Customer update successfully",
                resp
            })
        }).catch((err) => {
            return res.status(400).json({
                message: "Something went's wrong",
                err
            })
        })
    } catch (error) {
        return res.status(500).json({
            message: "Server error",
            error
        })
    }
}

exports.deleteCustomer = async (req, res) => {
    try {
        const { customer } = req.body
        await Customer.update(customer, {
            where: {
                id: customer.id
            }
        }).then((resp) => {
            return res.status(200).json({
                message: "Customer deleted successfully",
                resp
            })
        }).catch((err) => {
            return res.status(400).json({
                message: "Something went's wrong",
                err
            })
        })
    } catch (error) {
        return res.status(500).json({
            message: "Server error",
            error
        })
    }
}
