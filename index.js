const express = require('express')
const app = express()
const ejs = require('ejs')
const path = require('path')
const pool = require('./mysql/db')
const tableTag = require('./config/home')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use('/assets', express.static('assets'))
app.use('/bower_components', express.static('bower_components'))
app.use(express.urlencoded({ extended: false }));

app.get('/', async(req, res) => {
    const data = await mysqlget('SELECT * FROM BOER_INFO ORDER BY ID IS NULL, ID')
    const data2 = await mysqlget('SELECT * FROM FARMTAG')
    const table = await tableTag(data, data2)
    res.render('home', { table: table })
})

app.get('/sort/:param', async(req, res) => {
    if (req.params.param == "tanggal_lahir" || "tanggal_sapih") {
        req.params.param = req.params.param + " IS NULL, " + req.params.param
    }
    const data = await mysqlget('SELECT * FROM BOER_INFO ORDER BY ' + req.params.param)
    const data2 = await mysqlget('SELECT * FROM FARMTAG')
    const table = await tableTag(data, data2)
    res.render('home', { table: table })
})

var add_boer = require('./routes/add_boer');
app.use('/add_boer', add_boer);

var check_goat = require('./routes/check_goat');
app.use('/check_goat', check_goat);

var delete_boer = require('./routes/delete_boer');
app.use('/delete_boer', delete_boer);

var edit = require('./routes/edit');
app.use('/edit', edit);

var edit_boer = require('./routes/edit_boer');
app.use('/edit_boer', edit_boer);

var profile = require('./routes/profile');
app.use('/profile', profile);

var pedigree = require('./routes/pedigree');
app.use('/pedigree', pedigree);

var farmTag = require('./routes/farmTag');
app.use('/farmTag', farmTag);

function mysqlget(query) {
    return new Promise(resolve => {
        pool.query(query, (err, res) => {
            try {
                resolve(res)
            } catch {}
        })
    })
}

app.listen(8000, () => {
    console.log("http://localhost:8000/")
})