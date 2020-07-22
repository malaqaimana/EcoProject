'use strict'


const Login = use("App/Models/User/Login")

class DashboardController {
  async index({
    request,
    response,
    view,
    auth
  }) {
    const user = auth.user
    const roleDb = await Login.findBy("nip", user.nip)

    const data = {
      'user': user.toJSON(),
      'role': roleDb.role,
      'title': 'Dashboard'
    }
    // let title = 'Dashboard'   //let = inisialisasi variabel
    return view.render('dekan.dashboard', data)

  }
}

module.exports = DashboardController
