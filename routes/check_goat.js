var express = require('express');
var router = express.Router();
const pool = require('../mysql/db');

router.post('/', async(req, res) => {
    let data;
    if (req.body.name == "" && req.body.id != "") {
        data = await mysqlget('SELECT * FROM BOER_INFO WHERE ID=' + req.body.id)
    } else if (req.body.name != "" && req.body.id == "") {
        data = await mysqlget('SELECT * FROM BOER_INFO WHERE NAME="' + req.body.name + '"')
    } else if (req.body.name == "" && req.body.id == "") {
        res.end("NE")
    } else {
        data = await mysqlget('SELECT * FROM BOER_INFO WHERE NAME="' + req.body.name + '" AND ID=' + req.body.id)
    }
    if (data == "" || data == null) {
        res.end("NE")
    } else {
        res.end("E")
    }
})

function mysqlget(query) {
    return new Promise(resolve => {
        pool.query(query, (err, res) => {
            try {
                resolve(res)
            } catch {}
        })
    })
}

module.exports = router