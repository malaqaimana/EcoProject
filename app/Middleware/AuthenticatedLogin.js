'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class AuthenticatedLogin {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle({
    request,
    response,
    auth
  }, next) {
    // call next to advance the request
    try {
      await auth.check()
      if (auth.user.roleDb == 'dekan') {
        return response.redirect('/dekan')
      } else if (auth.user.roleDb == 'kajur') {
        return response.redirect('/kajur')
      } else if (auth.user.roleDb == 'dosen') {
        return response.redirect('/dosen')
      }
    } catch (error) {
      await next()
    }
  }
}

module.exports = AuthenticatedLogin
