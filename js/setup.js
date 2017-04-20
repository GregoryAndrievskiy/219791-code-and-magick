'use strict';

window.setup = (function () {
  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setup.querySelector('.setup-close');
  var onPopupEscPress = function (evt) {
    if (evt.keyCode === 27) {
      closePopup();
      setup.style.top = '';
      setup.style.left = '';
    }
  };

  var openPopup = function () {
    setup.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  };

  var closePopup = function () {
    setup.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
  };

  setupOpen.addEventListener('click', function () {
    openPopup();
  });

  setupOpen.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 13) {
      openPopup();
    }
  });

  setupClose.addEventListener('click', function () {
    closePopup();
    setup.style.top = '';
    setup.style.left = '';
  });

  setupClose.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 13) {
      closePopup();
      setup.style.top = '';
      setup.style.left = '';
    }
  });

  document.querySelector('.setup-user-name').addEventListener('keydown',
      function (evt) {
        if (evt.keyCode === 27) {
          evt.stopPropagation();
        }
      }
  );

  var coatColorBank = ['rgb(146, 100, 161)', 'rgb(215, 210, 55)', 'rgb(241, 43, 107)', 'rgb(101, 137, 164)', 'rgb(0, 0, 0)', 'rgb(215, 210, 55)', 'rgb(56, 159, 117)', 'rgb(241, 43, 107)'];
  var eyeColorBank = ['red', 'orange', 'yellow', 'green', 'lightblue', 'blue', 'purple'];
  var fireBallColorBank = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var wizard = document.querySelector('.wizard');
  var coat = wizard.querySelector('.wizard-coat');
  var eyes = wizard.querySelector('.wizard-eyes');
  var fireBall = document.querySelector('.setup-fireball-wrap');
  var wizards = [];
  var currentCoatColor;
  var currentEyesColor;
  var lastTimeout;

  var debounce = function (func) {
    if (lastTimeout) {
      window.clearTimeout(lastTimeout);
    }
    lastTimeout = window.setTimeout(func, 500);
  };

  var getRank = function (wizardArray) {
    var rank = 0;

    if (wizardArray.colorCoat === currentCoatColor) {
      rank += 2;
    }
    if (wizardArray.colorEyes === currentEyesColor) {
      rank += 1;
    }

    return rank;
  };

  var namesComparator = function (left, right) {
    if (left > right) {
      return 1;
    } else if (left < right) {
      return -1;
    } else {
      return 0;
    }
  };

  var colorizeCoat = function (element, color) {
    element.style.fill = color;
    currentCoatColor = color;
    return currentCoatColor;
  };

  var colorizeEyes = function (element, color) {
    element.style.fill = color;
    currentEyesColor = color;
    return currentEyesColor;
  };

  var colorizeFireBall = function (element, color) {
    element.style.backgroundColor = color;
  };

  var updateWizards = function () {
    window.render(wizards.sort(function (left, right) {
      var rankDiff = getRank(right) - getRank(left);
      if (rankDiff === 0) {
        rankDiff = namesComparator(left.name, right.name);
      }
      return rankDiff;
    }));
  };

  window.colorizeElement(coat, coatColorBank, colorizeCoat, updateWizards, debounce);
  window.colorizeElement(eyes, eyeColorBank, colorizeEyes, updateWizards, debounce);
  window.colorizeElement(fireBall, fireBallColorBank, colorizeFireBall);

  var onLoad = function (data) {
    wizards = data;
    updateWizards();
  };

  var error = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'position: absolute; fontSize: 30px; z-index: 100; margin: 0 auto; text-align: center; background-color: red; left: 0; right: 0;';
    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  var URL = 'https://intensive-javascript-server-kjgvxfepjl.now.sh/code-and-magick/data';

  window.load(URL, onLoad, error);

})();
