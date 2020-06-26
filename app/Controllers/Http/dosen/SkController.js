'use strict'

class SkController {
    index({request, response, view}){
        let title = 'Surat Keputusan'   //let = inisialisasi variabel
        return view.render('dosen.surat-keputusan',{
            title   //pake {} buat kirim variabel atau data
        })
        
    }
}

module.exports = SkController
