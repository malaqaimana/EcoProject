'use strict'

// Matakuliah
class MkController {
    index({request, response, view}){
        let title = 'Matakuliah'   //let = inisialisasi variabel
        return view.render('dosen.matakuliah',{
            title   //pake {} buat kirim variabel atau data
        })
        
    }
    
    pilihan({request, response, view}){
        let title = 'Nama MataKuliah'   //let = inisialisasi variabel
        return view.render('dosen.matakuliah-pilihan',{
            title   //pake {} buat kirim variabel atau data
        })
        
    }
    
    addMateri({request, response, view}){
        let title = 'Tambah Materi'   //let = inisialisasi variabel
        return view.render('dosen.matakuliah-form-materi',{
            title   //pake {} buat kirim variabel atau data
        })
        
    }
    
    editMateri({request, response, view}){
        let title = 'Edit Materi'   //let = inisialisasi variabel
        return view.render('dosen.matakuliah-form-materi',{
            title   //pake {} buat kirim variabel atau data
        })
        
    }
}

module.exports = MkController
