'use strict'

class PublikasiController {
    index({request, response, view}){
        let title = 'Publiaksi'   //let = inisialisasi variabel
        return view.render('dosen.publikasi',{
            title   //pake {} buat kirim variabel atau data
        })
    }
}

module.exports = PublikasiController
