'use strict';

window.debounce = function (func, wait) {
  var timeout;
  return function () {
    var later = function () {
      timeout = null;
      func();
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};
