var express = require('express');
var router = express.Router();
const pool = require('../mysql/db');
const pedigreeSearch = require('../config/pedigree')

router.get('/', async(req, res) => {
    const data = await mysqlget('SELECT * FROM BOER_INFO')
    const table = pedigreeSearch(data)
    res.render('pedigree', { table: table })
})

router.get('/id/:id', async(req, res) => {
    const data = await mysqlget('SELECT * FROM BOER_INFO WHERE id=' + req.params.id)
    let jenis_kel, name, sentData
    if (data.length == 0) return
    else {
        if (data[0].jenis_kel == "Laki-laki") jenis_kel = "man"
        else jenis_kel = "woman"
        if (data[0].name == null) name = ""
        else name = data[0].name
        let childData = await getChild(data[0])
        if (childData == 0) {
            sentData = [{
                "name": name,
                "class": jenis_kel,
                "textClass": "emphasis",
                "extra": {
                    "nickname": data[0].id
                }
            }]
        } else {
            sentData = [{
                "name": name,
                "class": jenis_kel,
                "textClass": "emphasis",
                "children": childData,
                "extra": {
                    "nickname": data[0].id
                }
            }]
        }
        sentData = await getParents(sentData, data[0])
        res.json(sentData)
    }
})

router.get('/name/:name', async(req, res) => {
    const data = await mysqlget('SELECT * FROM BOER_INFO WHERE name="' + req.params.name + '"')
    let jenis_kel, sentData
    if (data.length == 0) return
    else {
        if (data[0].jenis_kel == "Laki-laki") jenis_kel = "man"
        else jenis_kel = "woman"
        let childData = await getChild(data[0])
        if (childData == 0) {
            sentData = [{
                "name": data[0].name,
                "class": jenis_kel,
                "textClass": "emphasis"
            }]
        } else {
            sentData = [{
                "name": data[0].name,
                "class": jenis_kel,
                "textClass": "emphasis",
                "children": childData
            }]
        }
        sentData = await getParents(sentData, data[0])
        res.json(sentData)
    }
})

async function getChild(data) {
    let name, id, DBdata
    name = data.name
    id = data.id
    if (data.jenis_kel == "Perempuan") {
        if (id == null || id == "") DBdata = await mysqlget('SELECT * FROM BOER_INFO WHERE mother_name ="' + name + '"')
        else DBdata = await mysqlget('SELECT * FROM BOER_INFO WHERE mother_id =' + id)
    } else {
        if (id == null || id == "") DBdata = await mysqlget('SELECT * FROM BOER_INFO WHERE father_name ="' + name + '"')
        else DBdata = await mysqlget('SELECT * FROM BOER_INFO WHERE father_id =' + id)
    }
    if (DBdata == null || DBdata == 0) return 0
    else {
        let jenis_kel
        let insideString = []
        let child, DBdata2
        for (i = 0; i < DBdata.length; i++) {
            child = nullCheck(DBdata[i].name, DBdata[i].id)
            if (DBdata[i].jenis_kel == "Perempuan") jenis_kel = "woman"
            else jenis_kel = "man"
            DBdata2 = await getChild(DBdata[i])
            if (DBdata2 == 0) insideString.push({ name: child, class: jenis_kel })
            else insideString.push({ name: child, class: jenis_kel, children: DBdata2 })
        }
        return insideString
    }
}
async function getParents(sentData, data) {
    let father = nullCheck(data.father_name, data.father_id)
    let mother = nullCheck(data.mother_name, data.mother_id)
    sentData = [{
        "name": father,
        "class": "man",
        "extra": {
            "nickname": ""
        },
        "marriages": [{
            "spouse": {
                "name": mother,
                "class": "woman"
            },
            "children": sentData
        }]
    }]
    let DBdata;
    if (data.father_name == null) {
        DBdata = await mysqlget('SELECT * FROM BOER_INFO WHERE ID=' + data.father_id)
    } else {
        DBdata = await mysqlget('SELECT * FROM BOER_INFO WHERE NAME="' + data.father_name + '"')
    }
    if (DBdata == 0 || DBdata == null) {
        return sentData
    } else {
        return getParents(sentData, DBdata[0])
    }
}


function nullCheck(name, id) {
    if (name == null) {
        return "(" + id + ")"
    } else if (id == null) {
        return name
    } else {
        return name + " (" + id + ")"
    }
}

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