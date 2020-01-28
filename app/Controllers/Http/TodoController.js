'use strict'

class TodoController {
  index({request, response, view}){
    return view.render('crud.index')
  }
  event({request, response, view}){
    return view.render('crud.event')
  }
  sk({request, response, view}){
    return view.render('crud.sk')
  }
  asset({request, response, view}){
    return view.render('crud.asset')
  }
  tambahsk({request, response, view}){
    return view.render('crud.tambah-sk')
  }
  sktes({request, response, view}){
    return view.render('crud.sk-tes')
  }
  // script({request, response, view}){
  //   return view.render('crud.script')
  // }
  pilihdosen({request, response, view}){
    return view.render('crud.pilihdosen')
  }
  login({request, response, view}){
    return view.render('crud.login')
  }
  tambahasset({request, response, view}){
    return view.render('crud.tambah-asset')
  }
  tambahevent({request, response, view}){
    return view.render('crud.tambah-event')
  }
}

module.exports = TodoController


