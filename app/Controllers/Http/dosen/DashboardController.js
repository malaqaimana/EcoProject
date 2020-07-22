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
    // const roleDb = await Login.findBy("nip",user.nip)

    const data = {
      'user': user.toJSON(),
      'title': 'Dashboard',
      // 'role' : roleDb.role,
    }
    return view.render('dosen.dashboard', data)
  }
}

module.exports = DashboardController
