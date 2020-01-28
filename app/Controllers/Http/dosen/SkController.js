'use strict'

class SkController {
    index({request, response, view}){
        return view.render('dosen.sk')
    }

    pengajar({request, response, view}){
        return view.render('dosen.skPengajar')
    }

    penguji({request, response, view}){
        return view.render('dosen.skPenguji')
    }

    pembimbing({request, response, view}){
        return view.render('dosen.skPembimbing')
    }
}

module.exports = SkController
