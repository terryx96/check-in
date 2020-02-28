const express = require('express')
const app = express()
const service = require('./service/service')

app.use(express.static('views'))

app.get("/", (req, res) => {
    qr = service.generateQR()
    res.send(qr)
})

app.listen(8000, () => {
    console.log("app is listening on port 8000")
})