'use strict'

class JadwalController {
    index({request, response, view}){
        let title = 'Jadwal'   //let = inisialisasi variabel
        return view.render('dosen.jadwal',{
            title   //pake {} buat kirim variabel atau data
        })
    }
    
}

module.exports = JadwalController
