/**
 * Check if an element is present and returns a promise true or false. 
 * 
 * @author kaushik.mahata on 11/15/2022
 *
 * ```
 * it('Usage of is Elem present',  client => {
 *  if( client.isElemPresent('@locatorReference', 6000, "Custom Message")){
 *    //perform some action
 * } else {
 *     // perform some other action
 * }
 *   if( client.isElemPresent('#locatorReference', 6000, "Custom Message")){
 *    //perform some action
 * } else {
 *     // perform some other action
 * }
 * });
 * ```
 *
 * @method isElemPresent
 * @param {string|Object} definition The selector (CSS/Xpath) used to locate the element. Can either be a string or an object which specifies [element properties](https://nightwatchjs.org/guide#element-properties).
 * @param {number} [time] Time in milliseconds to wait for the element to be present, By default waits 2000 milliseconds
 * @param {string} [msg] Optional log message to display in the output. If missing, one is displayed by default.
 * @returns {boolean}
 * 
 */


 module.exports = class IsElemPresent {
    async command(selector, time = 2000, msg) {
      let message;
      let returnValue;
  
      if (typeof selector === 'string') {
        const hasSlashes = selector.indexOf('//') > -1;
        if (hasSlashes) {
          try {
            this.api.pause(time)
            returnValue = await this.api.elements('xpath', selector);
            message = msg || `  ${selector} is present = ${returnValue.length > 0}`
          } catch (err) {
            console.error('An error occurred', err);
            returnValue = -1
          }
  
        } else {
          try {
            this.api.pause(time)
            returnValue = await this.api.elements('css selector', selector);
            message = msg || `  ${selector} is present = ${returnValue.length > 0}`
          } catch (err) {
            console.error('An error occurred', err);
            returnValue = -1
          }
  
        }
  
      } else if (typeof selector === 'object') {
        const hasSlashes = selector.__selector.indexOf('//') > -1;
        if (hasSlashes) {
          try {
            this.api.pause(time)
            returnValue = await this.api.elements('xpath', selector.__selector);
            message = msg || `  ${selector.__selector} is present = ${returnValue.length > 0}`
          } catch (err) {
            console.error('An error occurred', err);
            returnValue = -1
          }
  
        } else {
          try {
            this.api.pause(time)
            returnValue = await this.api.elements('css selector', selector.__selector);
            message = msg || `  ${selector.__selector} is present = ${returnValue.length > 0}`
          } catch (err) {
            console.error('An error occurred', err);
            returnValue = -1
          }
        }
      }
      console.log(message)
      return returnValue.length > 0;
    }
  }