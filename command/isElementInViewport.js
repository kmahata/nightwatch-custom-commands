/**
 * To check if an element is in viewport
 * @author kaushik.mahata on 01/07/2023
 *
 * ```
 * it('Usage of isElementInViewport',  client => {
 *   if(client.isElementInViewport('css locator'))
 *
 * });
 * ```
 *
 * @method isElementInViewport
 * @param {string} definition The selector (CSS) used to locate the element. Supports only css for now
 * @return {boolean} Can be true or false depending on if the element is in active view in browser
 */

module.exports = class IsElementInViewport {
    async command(selector) {
      let locator;
      if (typeof selector === 'string') {
        locator = selector;
      } else if (typeof selector === 'object') {
        locator = selector.__selector;
      }
      return await this.api.execute(
        function (locator) {
          const rect = document.querySelector(locator).getBoundingClientRect();
          return (
            rect.bottom > 0 &&
            rect.right > 0 &&
            rect.left < (window.innerWidth || document.documentElement.clientWidth) &&
            rect.top < (window.innerHeight || document.documentElement.clientHeight)
          );
        },
        [locator],
        function (result) {
          return result.value;
        }
      );
    }
  };
  