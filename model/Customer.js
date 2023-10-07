const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Customer extends Model {
        static associate(models) {
            Customer.hasOne(models.Cart, {
                foreignKey: "customer_id"
            })

            Customer.hasOne(models.Order, {
                foreignKey: "customer_id"
            })
        }
    }

    Customer.init({
        customer_name: {
            type: DataTypes.STRING,
            field: 'customer_name'
        },
        customer_email: {
            type: DataTypes.STRING,
            field: 'customer_email'
        },
        password: {
            type: DataTypes.STRING,
            field: 'password'
        },
        phone: {
            type: DataTypes.STRING,
            field: 'phone'
        },
        customer_address: {
            type: DataTypes.STRING,
            field: 'customer_address'
        },
        isDelete: {
            type: DataTypes.BOOLEAN,
            field: 'isDelete',
            defaultValue: false,
        }
    }, {
        sequelize,
        tableName: 'Customer',
        modelName: 'Customer',
        timestamps: true
    })
    return Customer
}