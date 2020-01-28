'use strict'

class AsetController {

    index({request, response, view}){
        return view.render('dosen.aset')
    }

    laboratorium({request, response, view}){
        return view.render('dosen.asetLaboratorium')
    }

    kantor({request, response, view}){
        return view.render('dosen.asetKantor')
    }

    galeri({request, response, view}){
        return view.render('dosen.asetGaleri')
    }

}

module.exports = AsetController
