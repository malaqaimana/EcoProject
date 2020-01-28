'use strict'

class EventController {

    index({request, response, view}){
        return view.render('dosen.event')
    }

    pilihan({request, response, view}){
        return view.render('dosen.eventPilihan')
    }

}

module.exports = EventController
