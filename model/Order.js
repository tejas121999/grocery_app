const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Order extends Model {
        static associate(models) {
            Order.belongsTo(models.Customer, {
                foreignKey: "customer_id",
                as: "customer_data"
            })

            Order.belongsTo(models.Product, {
                foreignKey: "product_id",
                as: "product_data"
            })
        }
    }

    Order.init({
        customer_id: {
            type: DataTypes.INTEGER,
            field: 'customer_id'
        },
        product_id: {
            type: DataTypes.INTEGER,
            field: 'product_id'
        },
        total_cost: {
            type: DataTypes.INTEGER,
            field: 'total_cost'
        },
        payment_method: {
            type: DataTypes.STRING,
            field: 'payment_method'
        },
        isDelivered: {
            type: DataTypes.BOOLEAN,
            field: 'isDelivered',
            defaultValue: false,
        },
        isDelete: {
            type: DataTypes.BOOLEAN,
            field: 'isDelete',
            defaultValue: false,
        }
    }, {
        sequelize,
        tableName: 'Order',
        modelName: 'Order',
        timestamps: true
    })
    return Order
}