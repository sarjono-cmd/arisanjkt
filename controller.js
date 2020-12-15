'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function(req, res){
    response.ok("Aplikasi Rest API berjalan lancar",res);
};

//menampilkan data nama anggota arisan
exports.tampilsemuaanggota = function (req, res) {
    connection.query('SELECT * FROM nama_anggota', function (error, rows, fileds) {
        if (error) {
            console.log(error);
        } else {
            response.ok(rows, res)
        }
    });
};