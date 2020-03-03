const express = require('express')
const router = express.Router()

router.get("/", (req, res) => {
    res.render('index', {
        title: "Best Event",
        description: "This is the first event of the season"
    })
})

module.exports = router;