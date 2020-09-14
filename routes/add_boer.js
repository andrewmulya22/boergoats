var express = require('express');
var router = express.Router();
const pool = require('../mysql/db');
const queryPost = require('../config/postquery')

router.get('/', (req, res) => {
    res.render('add_boer')
})

router.post('/', async(req, res) => {
    const query = queryPost(req.body)
    if (req.body.inputeartag == "" && req.body.inputname == "") {
        res.send("N")
    }
    pool.query(query, (err) => {
        try {
            if (err) {
                res.send("F")
            } else res.send("S")
        } catch {}
    })
})

router.get(['/l/:id', '/l/:id/:name'], (req, res) => {
    res.render('add_boer_filled', { id: req.params.id, name: req.params.name, jenis_kel: "Laki-laki" })
})

router.get(['/p/:id', '/p/:id/:name'], (req, res) => {
    res.render('add_boer_filled', { id: req.params.id, name: req.params.name, jenis_kel: "Perempuan" })
})


router.post('/filled', async(req, res) => {
    name = req.body.name
    id = req.body.id
    if (id == null && name == null) {
        res.end("N")
    } else {
        res.end("NN")
    }
})

module.exports = router