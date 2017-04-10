'use strict';

window.renderStatistics = (function () {
  function renderBackground(ctx) {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    ctx.fillRect(110, 20, 420, 270);
    ctx.fillStyle = 'white';
    ctx.fillRect(100, 10, 420, 270);
    ctx.fillStyle = 'black';
    ctx.font = '16px PT Mono';
    ctx.fillText('Ура вы победили!', 120, 30);
    ctx.fillText('Список результатов:', 120, 46);
  }

  var max = 0;
  var histogramHeight = 150;
  var barWidth = 40;
  var indent = 50;
  var initialX = 160;
  var initialY = 260;
  var textMargin = 6;

  function renderHistogram(ctx, names, times) {

    function getColor(name) {
      var alpha = Math.random();
      var color;
      if (name === 'Вы') {
        color = 'rgba(255, 0, 0, 1)';
      } else {
        color = 'rgba(0, 0, 255,' + alpha + ')';
      }
      return color;
    }

    times.forEach(function (item) {
      var time = item;
      if (time > max) {
        max = time;
      }
      return max;
    });

    var step = histogramHeight / max;

    for (var i = 0; i < times.length; i++) {
      var columnHeight = -1 * times[i] * step;
      ctx.textBaseline = 'top';
      ctx.fillStyle = 'black';
      ctx.fillText(times[i].toFixed(0), initialX + (barWidth + indent) * i, initialY + columnHeight - 3 * textMargin);
      ctx.fillText(names[i], initialX + (barWidth + indent) * i, initialY);
      ctx.fillStyle = getColor(names[i]);
      ctx.fillRect(initialX + (barWidth + indent) * i, initialY, barWidth, columnHeight);
    }
  }
  return function (ctx, names, times) {
    renderBackground(ctx);
    renderHistogram(ctx, names, times);
  };
})();
