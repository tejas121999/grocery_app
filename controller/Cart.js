const { Cart } = require('../model')

exports.getCart = async (req, res) => {
    try {
        const getCart = await Cart.findAndCountAll({
            where: {
                isDelete: false
            },
            limit: req.body.limit,
            offset: req.body.offset,
        })

        if (!getCart) {
            return res.status(200).json({
                message: "Data not found",
                data: getCart
            })
        } else {
            return res.status(200).json({
                message: "success",
                data: getCart
            })
        }
    } catch (error) {
        return res.status(500).json({
            message: "Server error"
        })
    }
}

exports.addCart = async (req, res) => {
    try {
        const { cart } = req.body
        await Cart.create(cart).then((result) => {
            return res.status(200).json({
                message: "item added successfully",
                data: result
            })
        }).catch((err) => {
            return res.status(400).json({
                message: "something went's wrong",
                error: err
            })
        });
    } catch (error) {
        return res.status(500).json({
            message: "Server error"
        })
    }
}

exports.updateCart = async (req, res) => {
    try {
        const { cart } = req.body
        await Cart.update(cart, {
            where: {
                id: cart.id
            }
        }).then((result) => {
            return res.status(200).json({
                message: "item update successfully",
                data: result
            })
        }).catch((err) => {
            return res.status(400).json({
                message: "something went's wrong",
                error: err
            })
        });
    } catch (error) {
        return res.status(500).json({
            message: "Server error"
        })
    }
}

exports.deleteCart = async (req, res) => {
    try {
        const { cart } = req.body
        await Cart.update(cart, {
            where: {
                id: cart.id
            }
        }).then((result) => {
            return res.status(200).json({
                message: "item delete successfully",
                data: result
            })
        }).catch((err) => {
            return res.status(400).json({
                message: "something went's wrong",
                error: err
            })
        });
    } catch (error) {
        return res.status(500).json({
            message: "Server error"
        })
    }
}

