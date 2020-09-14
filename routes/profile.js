var express = require('express');
var router = express.Router();
const pool = require('../mysql/db');
const queryEdit = require('../config/editquery')

router.get(['/pedigreeID/:id', '/pedigreeName/:name'], async(req, res) => {
    let data
    if (req.params.id != null || req.params.id != undefined) data = await mysqlget('SELECT * FROM BOER_INFO WHERE ID= ' + req.params.id)
    else if (req.params.name != null || req.params.name != undefined) data = await mysqlget('SELECT * FROM BOER_INFO WHERE NAME= "' + req.params.name + '"')
    else data = ""
    if (data != "") {
        data[0].tanggal_lahir = queryEdit(data[0].tanggal_lahir)
        data[0].tanggal_sapih = queryEdit(data[0].tanggal_sapih)
    }
    res.json(data[0])
})

router.get('/id/:goatid', async(req, res) => {
    let data = await mysqlget('SELECT * FROM BOER_INFO WHERE ID=' + req.params.goatid)
    data[0].tanggal_lahir = queryEdit(data[0].tanggal_lahir)
    data[0].tanggal_sapih = queryEdit(data[0].tanggal_sapih)
    res.render('profile_boer', { data: data[0] })
})

router.get('/name/:goatname', async(req, res) => {
    let data = await mysqlget('SELECT * FROM BOER_INFO WHERE NAME="' + req.params.goatname + '"')
    data[0].tanggal_lahir = queryEdit(data[0].tanggal_lahir)
    data[0].tanggal_sapih = queryEdit(data[0].tanggal_sapih)
    res.render('profile_boer', { data: data[0] })
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