'use strict';

window.colorizeElement = (function (element, elementBank, callback, callback2, callback3) {
  var colorIndex = 1;
  var getIndex = function () {
    if (colorIndex >= elementBank.length) {
      colorIndex = 0;
    }
  };
  element.addEventListener('click', function () {
    var color = elementBank[colorIndex];
    callback(element, color);
    callback3(callback2);
    colorIndex++;
    getIndex();
  });
});
