const { Product } = require('../model')

exports.getProduct = async (req, res) => {
    try {
        const getProduct = await Product.findAndCountAll({
            where: {
                isDelete: false
            },
            limit: req.body.limit,
            offset: req.body.offset,
        })

        if (!getProduct) {
            return res.status(200).json({
                message: "Data not found",
                data: getProduct
            })
        } else {
            return res.status(200).json({
                message: "success",
                data: getProduct
            })
        }
    } catch (error) {
        return res.status(500).json({
            message: "Server error"
        })
    }
}

exports.addProduct = async (req, res) => {
    try {
        const { product } = req.body
        await Product.create(product).then((result) => {
            return res.status(200).json({
                message: "product added successfully",
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

exports.updateProduct = async (req, res) => {
    try {
        const { product } = req.body
        await Order.update(product, {
            where: {
                id: product.id
            }
        }).then((result) => {
            return res.status(200).json({
                message: "product update successfully",
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

exports.deleteProduct = async (req, res) => {
    try {
        const { product } = req.body
        await Order.update(product, {
            where: {
                id: product.id
            }
        }).then((result) => {
            return res.status(200).json({
                message: "product deleted successfully",
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