'use strict'

class DashboardController {

  index({request, response, view}){
    return view.render('dosen.dashboard')
  }

}

module.exports = DashboardController
