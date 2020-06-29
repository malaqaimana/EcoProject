"use strict";

// const database = require("../../../../config/database")

const Hash = use("Hash");
const Database = use("Database");

class AuthController {
  show({ request, response, view }) {
    let title = "Login"; //let = inisialisasi variabel yang bisa diubah
    return view.render("user.login", {
      title, //pake {} buat kirim variabel atau data
    });
  }

  async login({ request, response, auth, session }) {
    const { username, password, role } = request.only([
      "username",
      "password",
      "role",
    ]); //variabel yang isi gabisa diubah\

    //login dosen
    if (role == 1) {
      const dosen = await Database.select("nip", "password")
        .from("dosen_user")
        .where("nip", username);
      // console.log(dosen);
      console.log(dosen);
      // if (dosen) {
      // const passVerified = await Hash.verify(password, dosen.password)
      // if (password == dosen.password) {
      //   await auth.login(dosen)
      //   return response.route('dosen.index')
      // }
      // }
    } //else {
    //   const mahasiswa = await Database.select('npm', 'password').from('mahasiswa_user').where('npm', username)
    // }
  }

  async logout({ auth, response }) {
    await auth.logout();
    return response.route("login.index");
  }
}

module.exports = AuthController;
