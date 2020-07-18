'use strict'

const {
  route
} = require('@adonisjs/framework/src/Route/Manager')

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

// Route.on('/').render('user.login')

// ROUTE LOGIN
// Route.get('/', 'login/LoginController.index').as('login.index')
Route.get('/', 'user/AuthController.show').as('login.index')
Route.post('/login', 'user/AuthController.login').as('login.data')
Route.get('/logout', 'user/AuthController.logout').as('logout.akun')


// ROUTE DOSEN
Route.group(() => {
  Route.get('/', 'dosen/DashboardController.index').as('dosen.index')

  Route.get('/surat-keputusan', 'dosen/SkController.index').as('dosen.sk.index')

  Route.get('/aset', 'dosen/AsetController.index').as('dosen.aset.index')
  Route.get('/aset/galeri', 'dosen/AsetController.galeri').as('dosen.aset.galeri')

  Route.get('/matakuliah', 'dosen/MkController.index').as('dosen.matakuliah.index')
  Route.get('/matakuliah/nama-matakuliah', 'dosen/MkController.pilihan').as('dosen.matakuliah.pilihan')
  Route.get('/matakuliah/nama-matakuliah/tambah-materi', 'dosen/MkController.addMateri').as('dosen.matakuliah.addMateri')
  Route.get('/matakuliah/nama-matakuliah/edit-materi', 'dosen/MkController.editMateri').as('dosen.matakuliah.editMateri')

  Route.get('/kegiatan', 'dosen/KegiatanController.index').as('dosen.kegiatan.index')

  Route.get('/publikasi', 'dosen/PublikasiController.index').as('dosen.publikasi.index')

  Route.get('/jadwal', 'dosen/JadwalController.index').as('dosen.jadwal.index')
}).prefix("/dosen")
.middleware(['auth:dosen'])
