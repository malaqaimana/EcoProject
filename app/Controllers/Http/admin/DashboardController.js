'use strict'

class DashboardController {
    async index({request, response, view, auth}){
        const user = auth.user
        const data = {
            'user': user.toJSON(),
            'title': 'Dashboard',
            'role' : "admin"
        }
        return view.render('admin.dashboard', data)
    }
}

module.exports = DashboardController
