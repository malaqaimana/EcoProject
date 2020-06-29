'use strict'

// const database = require("../../../../config/database")

const Hash = use('Hash')
const Database = use('Database')

class AuthController {
    show({request, response, view}){
        let title = 'Login'   //let = inisialisasi variabel yang bisa diubah
        return view.render('user.login',{
            title   //pake {} buat kirim variabel atau data
        })
    }
    
    async login({request, response, auth, session}){
        const {username, password, role} = request.only(['username', 'password', 'role'])   //variabel yang isi gabisa diubah
        
        // Login dosen
        if(role == 1){
            const dosen= await Database.raw('select nama from dosen_user where username=nip')
            console.log(Database)
            
                        
            if(dosen){
                const passwordVerified = await Hash.verify(password, dosen.password)
                
                if(passwordVerified){
                    await auth.authenticator('dosen').login(dosen)
                    return response.route('dosen.index')
                }else{
                    session.flash({
                        notification: {
                          type: 'danger',
                          message: 'Password salah, silahkan masukan kembali'
                        }
                    })
                    return response.redirect('back')
                }
            }else{
                session.flash({
                    notification: {
                      type: 'danger',
                      message: 'Tidak ada dosen yang ditemukan'
                    }
                })
                return response.redirect('back')
            }
        }else if(role==2){
            const mahasiswa= await Database.raw('select nama from mahasiswa_user where username=npm')
            console.log(Database)
            
                        
            if(mahasiswa){
                const passwordVerified = await Hash.verify(password, mahasiswa.password)
                
                if(passwordVerified){
                    await auth.authenticator('mahasiswa').login(mahasiswa)
                    return response.route('mahasiswa.index')
                }else{
                    session.flash({
                        notification: {
                          type: 'danger',
                          message: 'Password salah, silahkan masukan kembali'
                        }
                    })
                    return response.redirect('back')
                }
            }else{
                session.flash({
                    notification: {
                      type: 'danger',
                      message: 'Tidak ada dosen yang ditemukan'
                    }
                })
                return response.redirect('back')
            }
        }
            
    }
    
    async logout({auth, response}) {
        await auth.logout()
        return response.route('login.index')
      }
        

}

module.exports = AuthController
