'use strict';

(function () {

  var userDialog = document.querySelector('.setup');
  var similar = userDialog.querySelector('.setup-similar');
  var similarListElement = userDialog.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

  var renderWizardArtifacts = function (wizard) {
    return wizard.artifacts.map(function (it) {
      var artName = it.name;
      var regExp = new RegExp('_', 'g');
      artName = artName.charAt(0).toUpperCase() + artName.substr(1);
      artName = artName.replace(regExp, ' ');
      return artName;
    }).join('<br>');
  };

  var renderWizard = function (wizards) {
    var element = similarWizardTemplate.cloneNode(true);
    var wizardElement = element.querySelector('.wizard');
    element.querySelector('.setup-similar-label').textContent = wizards.name;
    element.querySelector('.wizard-coat').style.fill = wizards.colorCoat;
    element.querySelector('.wizard-eyes').style.fill = wizards.colorEyes;
    window.popup(wizardElement, function () {
      return renderWizardArtifacts(wizards);
    });
    return element;
  };

  window.render = function (data) {
    var takeNumber = data.length > 4 ? 4 : data.length;
    similarListElement.innerHTML = '';
    for (var i = 0; i < takeNumber; i++) {
      similarListElement.appendChild(renderWizard(data[i]));
    }
    similar.classList.remove('hidden');
  };
})();
