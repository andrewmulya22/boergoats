const mysql = require('mysql')

const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root', //Ganti username ke username MySQL (default: root)
    password: '', //Ganti password ke password MySQL
    database: 'boer_goats', //nama database
    charset: 'utf8'
})

module.exports = pool