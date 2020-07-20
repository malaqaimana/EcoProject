'use strict'

class DashboardController {
    async index({request, response, view, auth}){
        const user = auth.user
        const data = {
            'user': user.toJSON(),
            'title': 'Dashboard',
            'role' : "mahasiswa"
        }
        return view.render('mahasiswa.dashboard', data)
    }
}

module.exports = DashboardController
