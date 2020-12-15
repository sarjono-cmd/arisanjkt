var mysql = require('mysql');

//membuat koneksi mysql
const mysql = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'arisanjkt'
});

con.connect((err) =>{
    if(err) throw err;
    console.log('Mysql terkoneksi');
});

module.exports = con;