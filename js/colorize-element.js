'use strict';
window.colorizeElement = (function (element, elementBank, callback) {
  var colorIndex = 1;
  var getIndex = function () {
    if (colorIndex >= elementBank.length) {
      colorIndex = 0;
    }
  };
  element.addEventListener('click', function () {
    var color = elementBank[colorIndex];
    callback(element, color);
    colorIndex++;
    getIndex();
  });
});
