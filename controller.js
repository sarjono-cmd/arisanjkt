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

//menampilkan semua data mahasiwa berdasarkan id
exports.tampilsemuaanggotaid = function (req, res) {
    let id = req.params.id;
    connection.query('SELECT * FROM nama_anggota WHERE id_anggota = ?', [id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok(rows, res);
            }
        });
};