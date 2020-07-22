'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class AuthenticatedDekan {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle({
    request,
    auth,
    response
  }, next) {
    // call next to advance the request
    try {
      auth.check()
      if (auth.user.roleDb != 'dekan') {
        throw new Error('harus dekan ya...')
      }
    } catch (error) {
      // return response.status(401).send({
      //   message: error.message
      // }) buat cek response hasil error
      return response.redirect('back')
    }
    await next()
  }
}

module.exports = AuthenticatedDekan
