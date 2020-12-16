'use strict';

module.exports = function(app){
    var jsonku = require('./controller');

    app.route('/')
    .get(jsonku.index);

    app.route('/tampil')
        .get(jsonku.tampilsemuaanggota);

    app.route('/tampil/:id')
        .get(jsonku.tampilsemuaanggotaid);

    app.route('/tambah')
        .post(jsonku.tambahanggota);

    app.route('/ubah')
        .put(jsonku.ubahanggota);
  

}