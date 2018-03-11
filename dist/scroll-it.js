/*!
 * scroll-it.js v0.0.1
 * (c) 2018-2018 Limichange
 * Released under the MIT License.
 */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global['scroll-it'] = factory());
}(this, (function () { 'use strict';

function smoothScroll(ref) {
  if ( ref === void 0 ) ref = {};
  var scroller = ref.scroller;
  var to = ref.to; if ( to === void 0 ) to = 0;
  var mode = ref.mode; if ( mode === void 0 ) mode = 'h';
  var callback = ref.callback; if ( callback === void 0 ) callback = function () {};

  if (!scroller) {
    throw new Error('option scroller is required')
  }

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

return smoothScroll;

})));
