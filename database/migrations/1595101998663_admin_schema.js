'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AdminSchema extends Schema {
  up () {
    this.create('admins', (table) => {
      table.increments()
      table.string('nip', 20).notNullable()
      table.string('nama', 100).notNullable()
      table.string('password', 60).notNullable()
    })
  }

  down () {
    this.drop('admins')
  }
}

module.exports = AdminSchema
