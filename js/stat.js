'use strict';

window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);
  ctx.fillStyle = 'white';
  ctx.fillRect(100, 10, 420, 270);

  ctx.fillStyle = 'black';
  ctx.font = '16px PT Mono';

  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 72);

  var max = -1;
  var maxIndex = -1;

  for (var i = 0 ; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
      maxIndex = i;
    }
  }

  var histogramHeight = 140;
  var step = histogramHeight / (max - 0);

  var barWidth = 40; // px;
  var indent = 50;    // px;
  var initialX = 160; // px;
  var initialY = 250;  // px;
  var textMarginTop = 8; // px;

  function getColor(name) {
    var alpha = Math.random();
    var color;
    if (name === 'Вы') {
      color = 'rgba(255, 0, 0, 1)';
    }
      else {
      color = 'rgba(0, 0, 255,' + alpha + ')';
    }
    return color;
  }

  ctx.textBaseline = 'top'; // положение надписи от левого верхнего угла
  for(var i = 0; i < times.length; i++) {
    ctx.fillStyle = getColor(names[i]);
    ctx.fillRect(initialX + (barWidth + indent) * i, initialY, barWidth, -1 * times[i] * step);
    ctx.fillStyle = 'black';
    ctx.fillText(names[i], initialX + (barWidth + indent) * i, initialY + textMarginTop);
    ctx.fillText(times[i].toFixed(0), initialX + (barWidth + indent) * i, (initialY - (times[i] * step + 3 * textMarginTop)));
  }
};
