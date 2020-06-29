'use strict'

class DashboardController {
    index({request, response, view}){
        let title = 'Dashboard'   //let = inisialisasi variabel
        return view.render('dosen.dashboard',{
            title   //pake {} buat kirim variabel atau data
        })
    }
}

module.exports = DashboardController
