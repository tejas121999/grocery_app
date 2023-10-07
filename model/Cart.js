const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Cart extends Model {
        static associate(models) {
            Cart.belongsTo(models.Customer, {
                foreignKey: "customer_id",
                as: "customer_data"
            })

            Cart.belongsTo(models.Product, {
                foreignKey: "product_id",
                as: "product_data"
            })
        }
    }

    Cart.init({
        customer_id: {
            type: DataTypes.INTEGER,
            field: 'customer_id'
        },
        product_id: {
            type: DataTypes.INTEGER,
            field: 'product_id'
        },
        quantity: {
            type: DataTypes.INTEGER,
            field: 'quantity'
        },
        isOrder: {
            type: DataTypes.BOOLEAN,
            field: 'isOrder',
            defaultValue: false,
        },
        isDelete: {
            type: DataTypes.BOOLEAN,
            field: 'isDelete',
            defaultValue: false,
        }
    }, {
        sequelize,
        tableName: 'Cart',
        modelName: 'Cart',
        timestamps: true
    })
    return Cart
}