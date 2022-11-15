/**
 * Use instead of console.log() to maintain command queue . Helpful for debugging
 * @author kaushik.mahata on 11/15/2022
 *
 * ```
 * it('Usage of customLog',  client => {
 *   ------code---
 *   client.customLog("Custom Message")
 * });
 * ```
 *
 * @method customLog
 * @param {string} definition The log message which needs to be printed
 *
 */

 module.exports = class customlog {
    async command(log) {
      try {
        console.log(log)
      } catch (err) {
        console.error('An error occurred', err);
      }
    }
  }
  