'use strict'

class KegiatanController {
    index({request, response, view}){
        let title = 'Kegiatan'   //let = inisialisasi variabel
        return view.render('dosen.kegiatan',{
            title   //pake {} buat kirim variabel atau data
        })
    }
    
}

module.exports = KegiatanController
