'use strict';

window.setup = (function () {
  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setup.querySelector('.setup-close');
  var userDialog = document.querySelector('.setup');
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

  var similarListElement = userDialog.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;
  var coatColorBank = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var eyeColorBank = ['black', 'red', 'blue', 'yellow', 'green'];
  var fireBallColorBank = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    return wizardElement;
  };

  var onLoad = function (wizards) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < 4; i++) {
      var index = Math.floor(Math.random() * wizards.length);
      fragment.appendChild(renderWizard(wizards[index]));
    }
    similarListElement.appendChild(fragment);
    userDialog.querySelector('.setup-similar').classList.remove('hidden');
  };

  var error = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'position: absolute; fontSize: 30px; z-index: 100; margin: 0 auto; text-align: center; background-color: red; left: 0; right: 0;';
    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  window.load(onLoad, error);

  var wizard = document.querySelector('.wizard');
  var coat = wizard.querySelector('.wizard-coat');
  var eyes = wizard.querySelector('.wizard-eyes');
  var fireBall = document.querySelector('.setup-fireball-wrap');

  var colorizeFill = function (element, color) {
    element.style.fill = color;
  };

  var colorizeBg = function (element, color) {
    element.style.backgroundColor = color;
  };

  window.colorizeElement(coat, coatColorBank, colorizeFill);
  window.colorizeElement(eyes, eyeColorBank, colorizeFill);
  window.colorizeElement(fireBall, fireBallColorBank, colorizeBg);

})();
