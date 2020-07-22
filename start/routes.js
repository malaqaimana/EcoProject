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
Route.get('/', 'user/AuthController.show').as('login.index').middleware(['login'])
Route.post('/login', 'user/AuthController.login').as('login.data')

// ROUTE LOGOUT
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
}).prefix("/dosen").middleware(['auth:dosen'])

// ROUTE DEKAN
Route.group(() => {
  Route.get('/', 'dekan/DashboardController.index').as('dekan.index')

}).prefix("/dekan").middleware(['dekan'])

// ROUTE KAJUR
Route.group(() => {
  Route.get('/', 'kajur/DashboardController.index').as('kajur.index')

}).prefix("/kajur").middleware(['auth:kajur'])

// ROUTE MAHASISWA
Route.group(() => {
  Route.get('/', 'mahasiswa/DashboardController.index').as('mahasiswa.index')

}).prefix("/mahasiswa").middleware(['auth:mahasiswa'])

// ROUTE ADMIN
Route.group(() => {
  Route.get('/', 'admin/DashboardController.index').as('admin.index')

}).prefix("/admin").middleware(['auth:admin'])

// ROUTE OPERATOR
Route.group(() => {
  Route.get('/', 'operator/DashboardController.index').as('operator.index')

}).prefix("/operator").middleware(['auth:operator'])
