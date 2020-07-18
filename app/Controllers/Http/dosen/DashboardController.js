'use strict'

class DashboardController {
    async index({request, response, view, auth}){
        const user = auth.user
        const data = {
            'user': user.toJSON(),
            'title': 'Dashboard'
        }
        // let title = 'Dashboard'   //let = inisialisasi variabel
        return view.render('dosen.dashboard', data)
    }
}

module.exports = DashboardController
