'use strict';

window.dialog = (function () {
  var setup = document.querySelector('.setup');
  var dialogHandle = setup.querySelector('.setup-user-pic');

  dialogHandle.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      setup.style.top = (setup.offsetTop - shift.y) + 'px';
      setup.style.left = (setup.offsetLeft - shift.x) + 'px';
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };
    artifactsElement.style.outline = 'none';
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });

  var shopElement = document.querySelector('.setup-artifacts-shop');
  var draggedItem = null;

  shopElement.addEventListener('dragstart', function (evt) {
    if (evt.target.tagName.toLowerCase() === 'img') {
      draggedItem = evt.target;
      evt.dataTransfer.setData('text/plain', evt.target.alt);
      artifactsElement.style.outline = '2px dashed red';
    }
  });

  var setupPlayer = document.querySelector('.setup-player');
  var artifactsElement = setupPlayer.querySelector('.setup-artifacts');

  artifactsElement.addEventListener('dragover', function (evt) {
    artifactsElement.style.outline = 'none';
    evt.preventDefault();

    return false;
  });

  artifactsElement.addEventListener('drop', function (evt) {
    if (evt.target.firstChild === null && evt.target.tagName.toLowerCase() !== 'img') {
      evt.target.style.backgroundColor = '';
      draggedItem.setAttribute('draggable', 'false');
      evt.target.appendChild(draggedItem.cloneNode(true));
      draggedItem.setAttribute('draggable', 'true');
      artifactsElement.style.outline = 'none';
    }
    evt.target.style.backgroundColor = '';
  });

  artifactsElement.addEventListener('dragenter', function (evt) {
    if (evt.target.firstChild === null && evt.target.tagName.toLowerCase() !== 'img') {
      evt.target.style.backgroundColor = 'yellow';
      evt.preventDefault();
    } else {
      evt.target.style.backgroundColor = 'red';
    }
  });

  artifactsElement.addEventListener('dragleave', function (evt) {
    evt.target.style.backgroundColor = '';
    artifactsElement.style.outline = '2px dashed red';
    evt.preventDefault();
  });
})();
