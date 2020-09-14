var express = require('express');
var router = express.Router();
const pool = require('../mysql/db');
const postEditID = require('../config/posteditID')
const postEditName = require('../config/posteditName')

router.post('/id/:id', async(req, res) => {
    if (req.body.inputeartag == "" && req.body.inputname == "") res.end("N")
    else {
        const updateQuery = postEditID(req.body, req.params.id)
        pool.query(updateQuery, (err) => {
            try {
                if (err) {
                    res.send("F")
                } else res.send("S")
            } catch {}
        })
    }
})

router.post('/name/:name', async(req, res) => {
    if (req.body.inputeartag == "" && req.body.inputname == "") res.send("N")
    else {
        const updateQuery = postEditName(req.body, req.params.name)
        pool.query(updateQuery, (err) => {
            try {
                if (err) {
                    res.send("F")
                } else res.send("S")
            } catch {}
        })
    }
})

module.exports = router