'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MahasiswaSchema extends Schema {
  up () {
    this.create('mahasiswas', (table) => {
      table.increments()
      table.string('npm', 20).notNullable()
      table.string('nama', 100).notNullable()
      table.string('password', 60).notNullable()
    })
  }

  down () {
    this.drop('mahasiswas')
  }
}

module.exports = MahasiswaSchema
