const express = require('express')
const app = express()

app.get("/", (req, res) => {
    res.send("Hello Cody")
})

app.listen(8000, () => {
    console.log("app is listening on port 8000")
})