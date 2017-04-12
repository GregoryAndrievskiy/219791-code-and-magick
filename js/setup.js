'use strict';

(function () {
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
    var rand = Math.floor(Math.random() * random.length);
    return rand;
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
  var wizardCoat = wizard.querySelector('.wizard-coat');
  var wizardEyes = wizard.querySelector('.wizard-eyes');
  var wizardFireBall = document.querySelector('.setup-fireball-wrap');
  var colorIndex = 0;
  var color;

  function getIndex(bank) {
    if (colorIndex >= bank.length - 1) {
      colorIndex = 0;
    }
    colorIndex++;
  }

  function getColor(bank, index) {
    color = bank[index];
    return color;
  }

  function changeCoatColor(coat) {
    wizardCoat.style.fill = coat;
  }

  function changeEyesColor(eyes) {
    wizardEyes.style.fill = eyes;
  }

  function changeFireBallColor(fireB) {
    wizardFireBall.style.background = fireB;
  }

  wizardCoat.addEventListener('click', function () {
    getIndex(coatColorBank);
    getColor(coatColorBank, colorIndex);
    changeCoatColor(color);
  });

  wizardEyes.addEventListener('click', function () {
    getIndex(eyeColorBank);
    getColor(eyeColorBank, colorIndex);
    changeEyesColor(color);
  });

  wizardFireBall.addEventListener('click', function () {
    getIndex(fireBallColorBank);
    getColor(fireBallColorBank, colorIndex);
    changeFireBallColor(color);
  });
})();
