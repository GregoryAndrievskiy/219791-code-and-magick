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

  var wizardFirstNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var wizardSecondNames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', ' Нионго', 'Ирвинг'];
  var coatColorBank = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var eyeColorBank = ['black', 'red', 'blue', 'yellow', 'green'];
  var fireBallColorBank = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];


  function getRandom(random) {
    return Math.floor(Math.random() * random.length);
  }

  var wizards = [
    {
      name: wizardFirstNames[getRandom(wizardFirstNames)] + ' ' + wizardSecondNames[getRandom(wizardSecondNames)],
      coatColor: coatColorBank[getRandom(coatColorBank)],
      eyeColor: eyeColorBank[getRandom(eyeColorBank)]
    },
    {
      name: wizardFirstNames[getRandom(wizardFirstNames)] + ' ' + wizardSecondNames[getRandom(wizardSecondNames)],
      coatColor: coatColorBank[getRandom(coatColorBank)],
      eyeColor: eyeColorBank[getRandom(eyeColorBank)]
    },
    {
      name: wizardFirstNames[getRandom(wizardFirstNames)] + ' ' + wizardSecondNames[getRandom(wizardSecondNames)],
      coatColor: coatColorBank[getRandom(coatColorBank)],
      eyeColor: eyeColorBank[getRandom(eyeColorBank)]
    },
    {
      name: wizardFirstNames[getRandom(wizardFirstNames)] + ' ' + wizardSecondNames[getRandom(wizardSecondNames)],
      coatColor: coatColorBank[getRandom(coatColorBank)],
      eyeColor: eyeColorBank[getRandom(eyeColorBank)]
    }
  ];

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;

    return wizardElement;
  };

  var fragment = document.createDocumentFragment();
  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }
  similarListElement.appendChild(fragment);

  userDialog.querySelector('.setup-similar').classList.remove('hidden');

  var wizard = document.querySelector('.wizard');
  var coat = wizard.querySelector('.wizard-coat');
  var eyes = wizard.querySelector('.wizard-eyes');
  var fireBall = document.querySelector('.setup-fireball-wrap');

  var colorizeCoat = function (color) {
    coat.style.fill = color;
  };
  var colorizeEyes = function (color) {
    eyes.style.fill = color;
  };
  var colorizeFireBall = function (color) {
    fireBall.style.backgroundColor = color;
  };

  window.colorizeElement(coat, coatColorBank, colorizeCoat);
  window.colorizeElement(eyes, eyeColorBank, colorizeEyes);
  window.colorizeElement(fireBall, fireBallColorBank, colorizeFireBall);
})();
