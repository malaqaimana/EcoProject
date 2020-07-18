'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DosensSchema extends Schema {
  up () {
    this.create('dosens', (table) => {
      table.string('nip', 20).notNullable()
      table.string('nama', 100).notNullable()
      table.string('password', 60).notNullable()
    })
  }

  down () {
    this.drop('dosens')
  }
}

module.exports = DosensSchema
