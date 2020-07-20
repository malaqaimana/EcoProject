'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Login extends Model {
    static get hidden(){
        return ['updated_at', 'created_at'] //ini buat tampilin
    }

    static get createdAtColumn () {
        return null //ini buat input biar bisa null
    }

    static get updatedAtColumn () {
        return null //ini buat input biar bisa null
    }
}

module.exports = Login
