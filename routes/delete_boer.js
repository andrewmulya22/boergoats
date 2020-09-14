var express = require('express');
var router = express.Router();
const pool = require('../mysql/db');

router.post('/id', async(req, res) => {
    const queryDel = "Delete from boer_info where id=" + req.body.sentData
    pool.query(queryDel, (err) => {
        if (err) throw (err)
        else res.send("S")
    })
})

router.post('/name', async(req, res) => {
    const queryDel = "Delete from boer_info where name='" + req.body.sentData + "'"
    pool.query(queryDel, (err) => {
        if (err) throw (err)
        else res.send("S")
    })
})

module.exports = router