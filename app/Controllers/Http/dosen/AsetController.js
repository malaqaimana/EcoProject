'use strict'

class AsetController {
    index({request, response, view}){
        let title = 'Aset'   //let = inisialisasi variabel
        return view.render('dosen.aset',{
            title   //pake {} buat kirim variabel atau data
        })
        
    }
    
    galeri({request, response, view}){
        let title = 'Galeri'   //let = inisialisasi variabel
        return view.render('dosen.aset-galeri',{
            title   //pake {} buat kirim variabel atau data
        })
    }
}

module.exports = AsetController
