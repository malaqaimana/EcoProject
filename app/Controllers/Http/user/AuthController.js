"use strict";

const Dosen = use("App/Models/Dosen/Dosen");
const Admin = use("App/Models/Admin/Admin");
const Operator = use("App/Models/Operator/Operator");
const Mahasiswa = use("App/Models/Mahasiswa/Mahasiswa");
const Jabatan = use("App/Models/User/Jabatan");
const Login = use("App/Models/User/Login");
// const Hash = use("Hash");
const Database = use("Database");


class AuthController {
  async show({
    view
  }) {
    let title = "Login"; //let = inisialisasi variabel yang bisa diubah
    return view.render("user.login", {
      title, //pake {} buat kirim variabel atau data
    });
  }

  async login({
    request,
    response,
    auth,
    session
  }) {
    const {
      username,
      password,
      role
    } = request.all() //ini untuk nerima inputannya

    // ROLE DOSEN, DEKAN, KAJUR
    if (role == "dosen" || role == "dekan" || role == "kajur") {
      const user = await Dosen.findBy("nip", username) //ini ngambil data
      if (user) {
        const login = new Login()
        if (password == user.password) {
          const roleDb = await Jabatan.findBy("nip", user.nip)
          if (roleDb) {
            if (roleDb.jabatan == "kajur") {
              // user['kajur'] = 1
              login.nip = username
              login.password = password
              login.role = roleDb.jabatan
              await login.save()
              await auth.authenticator(roleDb.jabatan).login(user)
              return response.route('kajur.index')
            } else if (roleDb.jabatan == "dekan") {

              login.nip = username
              login.password = password
              login.role = roleDb.jabatan
              await login.save()
              await auth.authenticator(roleDb.jabatan).login(user)
              return response.route('dekan.index')
            }
          } else if (role == "dosen") {

            login.nip = username
            login.password = password
            login.role = role
            await login.save()
            await auth.authenticator(role).login(user)
            return response.route('dosen.index')
          } else {
            session.flash({
              notification: {
                type: 'danger',
                message: 'Role yang anda masukan salah'
              }
            })
            return response.route('login.index')
          }
        } else {
          session.flash({
            notification: {
              type: 'danger',
              message: 'Password yang anda masukan salah'
            }
          })
          return response.route('login.index')
        }
      } else {
        session.flash({
          notification: {
            type: 'danger',
            message: 'Username yang anda masukan salah'
          }
        })
        return response.route('login.index')
      }

      // ROLE MAHASISWA
    } else if (role == "mahasiswa") {
      const user = await Mahasiswa.findBy("npm", username)
      if (user) {
        if (password == user.password) {
          await auth.authenticator(role).login(user)
          return response.route('mahasiswa.index')
        } else {
          session.flash({
            notification: {
              type: 'danger',
              message: 'Password yang anda masukan salah'
            }
          })
          return response.route('login.index')
        }
      } else {
        session.flash({
          notification: {
            type: 'danger',
            message: 'Username tidak ditemukan'
          }
        })
        return response.route('login.index')
      }

      // ROLE ADMIN
    } else if (role == "admin") {
      const user = await Admin.findBy("nip", username)
      if (user) {
        if (password == user.password) {
          await auth.authenticator(role).login(user)
          return response.route('admin.index')
        } else {
          session.flash({
            notification: {
              type: 'danger',
              message: 'Password yang anda masukan salah'
            }
          })
          return response.route('login.index')
        }
      } else {
        session.flash({
          notification: {
            type: 'danger',
            message: 'Username tidak ditemukan'
          }
        })
        return response.route('login.index')
      }

      // ROLE OPERATOR
    } else if (role == "operator") {
      const user = await Operator.findBy("nip", username)
      if (user) {
        if (password == user.password) {
          await auth.authenticator(role).login(user)
          return response.route('operator.index')
        } else {
          session.flash({
            notification: {
              type: 'danger',
              message: 'Password yang anda masukan salah'
            }
          })
          return response.route('login.index')
        }
      } else {
        session.flash({
          notification: {
            type: 'danger',
            message: 'Username tidak ditemukan'
          }
        })
        return response.route('login.index')
      }
    } else {
      session.flash({
        notification: {
          type: 'danger',
          message: 'Harap pilih role'
        }
      })
      return response.route('login.index')
    }
  }

  async logout({
    auth,
    response,
    session
  }) {
    const user = auth.user
    console.log(user.nip)
    const data = await Login.findBy("nip", user.nip)
    if (data == null) {
      await auth.logout()
      return response.route('login.index')
    } else {
      await data.delete()
      await auth.logout()
      return response.route('login.index')
    }
  }
}

module.exports = AuthController;
