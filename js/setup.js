'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

var wizardFirstNames = ['Иван ', 'Хуан Себастьян ', 'Мария ', 'Кристоф ', 'Виктор ', 'Юлия ', 'Люпита ', 'Вашингтон '];
var wizardSecondNames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColorBank = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyeColorBank = ['black', 'red', 'blue', 'yellow', 'green'];

var i = Math.floor(Math.random() * wizardFirstNames.length);
var n = Math.floor(Math.random() * coatColorBank.length);
var m = Math.floor(Math.random() * eyeColorBank.length);

function getRandom(random) {
  var rnd = Math.floor(Math.random() * random.length);
  return rnd;
}

var wizards = [
  {
    name: wizardFirstNames[getRandom(wizardFirstNames)] + wizardSecondNames[getRandom(wizardSecondNames)],
    coatColor: coatColorBank[getRandom(coatColorBank)],
    eyeColor: eyeColorBank[getRandom(eyeColorBank)]
  },
  {
    name: wizardFirstNames[getRandom(wizardFirstNames)] + wizardSecondNames[getRandom(wizardSecondNames)],
    coatColor: coatColorBank[getRandom(coatColorBank)],
    eyeColor: eyeColorBank[getRandom(eyeColorBank)]
  },
  {
    name: wizardFirstNames[getRandom(wizardFirstNames)] + wizardSecondNames[getRandom(wizardSecondNames)],
    coatColor: coatColorBank[getRandom(coatColorBank)],
    eyeColor: eyeColorBank[getRandom(eyeColorBank)]
  },
  {
    name: wizardFirstNames[i] + wizardSecondNames[i],
    coatColor: coatColorBank[n],
    eyeColor: eyeColorBank[m]
  }
];

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;

  return wizardElement;
}

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
