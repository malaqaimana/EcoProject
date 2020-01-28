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

// ROUTE DOSEN

Route.get('/dosen', 'dosen/DashboardController.index').as('dosen.index')

Route.get('/surat-keputusan', 'dosen/SkController.index').as('dosen.sk.index')
Route.get('/surat-keputusan/pengajar', 'dosen/SkController.pengajar').as('dosen.sk.pengajar')
Route.get('/surat-keputusan/penguji', 'dosen/SkController.penguji').as('dosen.sk.penguji')
Route.get('/surat-keputusan/pembimbing', 'dosen/SkController.pembimbing').as('dosen.sk.pembimbing')

Route.get('/aset', 'dosen/AsetController.index').as('dosen.aset.index')
Route.get('/aset/laboratorium', 'dosen/AsetController.laboratorium').as('dosen.aset.lab')
Route.get('/aset/kantor', 'dosen/AsetController.kantor').as('dosen.aset.kantor')
Route.get('/aset/galeri', 'dosen/AsetController.galeri').as('dosen.aset.galeri')

Route.get('/kegiatan', 'dosen/EventController.index').as('dosen.event.index')
Route.get('/kegiatan/1', 'dosen/EventController.pilihan').as('dosen.event.pilihan')

Route.get('/profil', 'dosen/ProfilController.index').as('dosen.profil.index')

Route.get('/prodi', 'dosen/ProdiController.index').as('dosen.prodi.index')
Route.get('/prodi/nama-prodi', 'dosen/ProdiController.pilihan').as('dosen.prodi.pilihan')
Route.get('/prodi/nama-prodi/matakuliah', 'dosen/ProdiController.matakuliah').as('dosen.prodi.matakuliah')


// ROUTE ADMIN

// Route.on('/').render('welcome')
Route.get('/admin', 'TodoController.index').as('Todo.index')
Route.get('/event', 'TodoController.event').as('Todo.event')
Route.get('/sk', 'TodoController.sk').as('Todo.sk')
Route.get('/asset', 'TodoController.asset').as('Todo.asset')
Route.get('/tambah-sk', 'TodoController.tambahsk').as('Todo.tambahsk')
// Route.get('/sk-tes', 'TodoController.sktes').as('Todo.sktes')
Route.get('/script', 'TodoController.script').as('Todo.script')
Route.get('/pilihdosen', 'TodoController.pilihdosen').as('Todo.pilihdosen')
Route.get('/login', 'TodoController.login').as('Todo.login')
Route.get('/tambah-asset', 'TodoController.tambahasset').as('Todo.tambahasset')
Route.get('/tambah-event', 'TodoController.tambahevent').as('Todo.tambahevent')





