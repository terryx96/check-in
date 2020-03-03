const express = require('express')
const app = express()
const service = require('./service/service')
const routes = require('./routes')

app.set('view engine', 'pug')

app.use(express.static('public'))

app.use(routes)

app.listen(8000, () => {
    console.log("app is listening on port 8000")
})