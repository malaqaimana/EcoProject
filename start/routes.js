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

// Route.on('/').render('user.login')

// ROUTE LOGIN
Route.get('/', 'login/LoginController.index').as('login.index')

// ROUTE DOSEN
Route.get('/dosen', 'dosen/DashboardController.index').as('dosen.index')

Route.get('/dosen/surat-keputusan', 'dosen/SkController.index').as('dosen.sk.index')

Route.get('/dosen/aset', 'dosen/AsetController.index').as('dosen.aset.index')
Route.get('/dosen/aset/galeri', 'dosen/AsetController.galeri').as('dosen.aset.galeri')

Route.get('/dosen/matakuliah', 'dosen/MkController.index').as('dosen.matakuliah.index')
Route.get('/dosen/matakuliah/nama-matakuliah', 'dosen/MkController.pilihan').as('dosen.matakuliah.pilihan')
Route.get('/dosen/matakuliah/nama-matakuliah/tambah-materi', 'dosen/MkController.addMateri').as('dosen.matakuliah.addMateri')
Route.get('/dosen/matakuliah/nama-matakuliah/edit-materi', 'dosen/MkController.editMateri').as('dosen.matakuliah.editMateri')

Route.get('/dosen/kegiatan', 'dosen/KegiatanController.index').as('dosen.kegiatan.index')

Route.get('/dosen/publikasi', 'dosen/PublikasiController.index').as('dosen.publikasi.index')

Route.get('/dosen/jadwal', 'dosen/JadwalController.index').as('dosen.jadwal.index')

