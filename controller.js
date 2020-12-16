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

//menampilkan semua anggota arisan berdasarkan id
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

//menambahkan data nama anggota
exports.tambahanggota = function (req, res) {
    var id_anggota = req.body.id_anggota;
    var nama = req.body.nama;
    var alamat = req.body.alamat;
    var no_telpon = req.body.no_telpon;

    connection.query('INSERT INTO nama_anggota (id_anggota,nama,alamat,no_telpon) VALUES(?,?,?,?)',
        [id_anggota, nama, alamat,no_telpon],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Menambahkan Data!", res)
            }
        });
};
//mengubah data berdasarkan id
exports.ubahanggota = function (req, res) {
    var id = req.body.id_anggota;
    var nama = req.body.nama;
    var alamat = req.body.alamat;
    var no_telpon = req.body.no_telpon;

    connection.query('UPDATE nama_anggota SET  nama=?, alamat=?, no_telpon=? WHERE id_anggota=?', [nama, alamat, no_telpon, id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Ubah Data", res)
            }
        });
}

