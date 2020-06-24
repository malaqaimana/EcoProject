'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')

// ROUTE DOSEN
Route.get('/dosen', 'dosen/DashboardController.index').as('dosen.index')
Route.get('/dosen/sk', 'dosen/SkController.index').as('dosen.sk.index')
Route.get('/dosen/aset', 'dosen/AsetController.index').as('dosen.aset.index')

