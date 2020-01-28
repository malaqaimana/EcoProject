'use strict'

class ProfilController {
    index({request, response, view}){
        return view.render('dosen.profil')
    }
}

module.exports = ProfilController
