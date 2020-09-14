var express = require('express');
var router = express.Router();
const pool = require('../mysql/db');

router.get('/', async(req, res) => {
    let data = await mysqlget('SELECT * FROM FARMTAG')
    res.render('farmTag', { data0: data[0], data1: data[1], data2: data[2], data3: data[3], data4: data[4], data5: data[5], data6: data[6], data7: data[7], data8: data[8], data9: data[9], data10: data[10], })
})

router.post('/', (req, res) => {
    let mintag, maxtag, farmname
    if (req.body.bbawah == "") mintag = "NULL"
    else mintag = req.body.bbawah
    if (req.body.batas == "") maxtag = "NULL"
    else maxtag = req.body.batas
    if (req.body.farmname == "") farmname = "NULL"
    else farmname = '"' + req.body.farmname + '"'
    let query = 'UPDATE FARMTAG SET MINTAG=' + mintag + ', MAXTAG=' + maxtag + ', FARMNAME=' + farmname + ' WHERE NO=' + req.body.num
    pool.query(query, (err) => {
        try {
            if (err) res.send('F')
            else res.send('S')
        } catch {}
    })
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