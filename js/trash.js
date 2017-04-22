'use strict';

window.debounce = (function (func, delay) {
  var lastTimeout;
  if (lastTimeout) {
    window.clearTimeout(lastTimeout);
  }
  lastTimeout = window.setTimeout(func, delay);
});
