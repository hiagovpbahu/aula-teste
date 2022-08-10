const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const modelos = require("./modelos")
const Mensagem = modelos.mensagem

app.use(bodyParser.urlencoded({ extended: true }))
app.use('/app', express.static('.'))

app.post('/criar-mensagem', function (req, res) {
    Mensagem.create(req.body)
        .then(data => {
            res.send(data)
        })
        .catch(erro => {
            res.status(500).send({
                message: erro.message || "Ocorreu erro ao tentar criar uma nova mensagem."
            })
        })
})

const db = require("./modelos")
db.sequelize.sync()

app.listen(3000, () => {
    console.log(`O servidor está rodando na URL: http://localhost:3000`)
})