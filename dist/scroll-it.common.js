/*!
 * scroll-it.js v0.0.1
 * (c) 2018-2018 Limichange
 * Released under the MIT License.
 */
'use strict';

function smoothScroll(scroller, to, mode, callback) {
  if ( mode === void 0 ) mode = 'h';
  if ( callback === void 0 ) callback = function () {};

  var scorllType = mode === 'h' ? 'scrollLeft' : 'scrollTop';
  var from = scroller[scorllType];

  var intervalId = setInterval(function () {
    if (Math.abs(from - to) <= 20) {
      clearInterval(intervalId);
      scroller[scorllType] = to;
      callback();
    } else {
      var r = (to - from) / 3;
      r = Math.abs(r) > 20
        ? r
        : to - from > 0 ? 20 : -20;
      from += r;
      scroller[scorllType] = from;
    }
  }, 16.7);
}

module.exports = smoothScroll;
