const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const models = require("./models")

models.sequelize.sync()
const Message = models.message

app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', express.static('.'))

app.post('/message', function (req, res) {
    Message.create(req.body)
        .then(data => {
            res.send(data)
        })
        .catch(erro => {
            res.status(500).send({
                message: erro.message || "An error occurred trying to create a message."
            })
        })
})

app.listen(3000, () => {
    console.log(`Server is running on: http://localhost:3000`)
})
