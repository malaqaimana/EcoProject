'use strict'

class ProdiController {

    // index({request, response, view}){
    //     return view.render('dosen.prodi')
    // }
    
    pilihan({request, response, view}){
        return view.render('dosen.prodiPilihan')
    }

    matakuliah({request, response, view}){
        return view.render('dosen.prodiMatakuliah')
    }

}

module.exports = ProdiController
