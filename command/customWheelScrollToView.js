/**
 * Use selenium wheel action to scroll to a certain webelement
 * @author kaushik.mahata on 01/07/2023
 *
 * ```
 * it('Usage of customWheelScrollToView',  client => {
 *   client.customWheelScrollToView('css locator')
 *
 * });
 * ```
 *
 * @method customWheelScrollToView
 * @param {string/object} definition The selector (CSS) or selenium webelement used to locate the element. Supports only css for now
 */

module.exports = class CustomWheelScrollToView {
    async command(selector) {
      let seleniumWebElement;
      if (typeof selector === 'string') {
        seleniumWebElement = await this.api.findElement(selector);
      } else if (typeof selector === 'object') {
        if (selector.hasOwnProperty('__selector')) {
          seleniumWebElement = await this.api.findElement(selector.__selector);
        } else {
          seleniumWebElement = selector;
        }
      }
      await this.api.perform(function () {
        const actions = this.actions({async: true});
        return actions.scroll(0, 0, 0, 0, seleniumWebElement);
      });
    }
  };
  