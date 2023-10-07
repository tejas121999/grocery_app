const { Order } = require('../model')

exports.getOrder = async (req, res) => {
    try {
        const getOrder = await Order.findAndCountAll({
            where: {
                isDelete: false
            },
            limit: req.body.limit,
            offset: req.body.offset,
        })

        if (!getOrder) {
            return res.status(200).json({
                message: "Data not found",
                data: getOrder
            })
        } else {
            return res.status(200).json({
                message: "success",
                data: getOrder
            })
        }
    } catch (error) {
        return res.status(500).json({
            message: "Server error"
        })
    }
}

exports.addOrder = async (req, res) => {
    try {
        const { order } = req.body
        await Order.create(order).then((result) => {
            return res.status(200).json({
                message: "order place successfully",
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

exports.updateOrder = async (req, res) => {
    try {
        const { order } = req.body
        await Order.update(order, {
            where: {
                id: order.id
            }
        }).then((result) => {
            return res.status(200).json({
                message: "order update successfully",
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

exports.deleteOrder = async (req, res) => {
    try {
        const { order } = req.body
        await Order.update(order, {
            where: {
                id: order.id
            }
        }).then((result) => {
            return res.status(200).json({
                message: "order delete successfully",
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