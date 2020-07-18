"use strict";

// const database = require("../../../../config/database")
const Dosen = use("App/Models/Dosen");
const Hash = use("Hash");
const Database = use("Database");

class AuthController {
  async show({view }) {
    let title = "Login"; //let = inisialisasi variabel yang bisa diubah
    return view.render("user.login", {
      title, //pake {} buat kirim variabel atau data
    });
  }

  async login({ request, response, auth, session }) {
    const { nip, password } = request.all() //ini untuk nerima inputannya
    const user = await Dosen.findBy("nip",nip)


    // const coba = await Database.select("*")
    //   .where("nip",nip)
    //   .from("dosens").first()

    console.log(user.password)
    if(password==user.password){
      console.log('halo login')
      await auth.authenticator('dosen').login(user)
      
      return response.route('dosen.index')
    }
  }

  async logout({ auth, response, session }) {
    await auth.logout()

    // session.flash({ notification: 'berhasil logout!' });
    return response.route('login.index')
  }
}

module.exports = AuthController;
