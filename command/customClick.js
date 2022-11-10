/**
 * Use when nighwatch native click fails
 * @author kaushik.mahata on 11/07/2022
 *
 * ```
 * it('Usage of custom click',  client => {
 *   client.customClick('@locatorReference', "Custom Message")
 *   client.customClick('#locatorValueAsString', "Custom Message" )
 * });
 * ```
 *
 * @method customClick
 * @param {string|Object} definition The selector (CSS/Xpath) used to locate the element. Can either be a string or an object which specifies [element properties](https://nightwatchjs.org/guide#element-properties).
 * @param {string} [msg] Optional log message to display in the output. If missing, one is displayed by default.
 */

 module.exports = class CustomClick {
    async command(selector, msg) {
      if (typeof selector === 'object') {
        const message = msg || `   ${selector.__selector} is custom clicked`
        try {
          this.api.execute(function (selector) {
            document.querySelector(selector).click();
          }, [selector.__selector]);
          console.log(` ${message}`)
        } catch (err) {
          console.error('An error occurred', err);
        }
      } else if (typeof selector === 'string') {
        const message = msg || `   ${selector} is custom clicked`
        try {
          this.api.execute(function (selector) {
            document.querySelector(selector).click();
          }, [selector]);
          console.log(` ${message}`)
        } catch (err) {
          console.error('An error occurred', err);
        }
      }
    }
  }
  