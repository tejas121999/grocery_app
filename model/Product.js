const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Product extends Model {
        static associate(models) {
            Product.hasOne(models.Cart, {
                foreignKey: "product_id"
            })

            Product.hasOne(models.Order, {
                foreignKey: "product_id"
            })
        }
    }

    Product.init({
        Product_name: {
            type: DataTypes.STRING,
            field: 'Product_name'
        },
        Product_price: {
            type: DataTypes.STRING,
            field: 'Product_price'
        },
        Product_desc: {
            type: DataTypes.STRING,
            field: 'Product_desc'
        },
        brand_name: {
            type: DataTypes.STRING,
            field: 'brand_name'
        },
        expiry_date: {
            type: DataTypes.DATE,
            field: 'expiry_date'
        },
        Product_img: {
            type: DataTypes.STRING,
            field: 'Product_img'
        },
        isDelete: {
            type: DataTypes.BOOLEAN,
            field: 'isDelete',
            defaultValue: false,
        }
    }, {
        sequelize,
        tableName: 'Product',
        modelName: 'Product',
        timestamps: true
    })
    return Product
}