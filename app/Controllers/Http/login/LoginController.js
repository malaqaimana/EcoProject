'use strict'

class LoginController {
    index({request, response, view}){
        let title = 'Login'   //let = inisialisasi variabel
        return view.render('user.login',{
            title   //pake {} buat kirim variabel atau data
        })
    }
    
}

module.exports = LoginController
