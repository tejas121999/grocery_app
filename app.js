var bodyParser = require("body-parser")
const routes = require('./routes/api')
const express = require("express")
const app = express()
const cors = require("cors")
const { sequelize } = require("./model");

require("dotenv").config()

app.use(cors())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
app.use("/uploads", express.static("uploads"))

// parse application/json
app.use(bodyParser.json())

// to sync all the tables just uncomment below code
// sequelize.sync({ force: true }).then(() => {
//     console.log("table is sync")
// })

app.use('/api', routes)


module.exports = app