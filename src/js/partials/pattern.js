// VIA Pattern

function initPattern() {
  var patternWidth = 48;
  var patternHeight = 16;
  var pattern = '<div><i class="icon-letter-v"></i></div><div><i class="icon-letter-i"></i></div><div><i class="icon-letter-a"></i></div>';
  var patternContainer = $('#pattern');
  var containerWidth = patternContainer.width();
  var containerHeight = patternContainer.height();

  for (var i = 0; i < (Math.ceil(containerHeight/patternHeight)); i++) {
    for (var j = 0; j < (Math.ceil(containerWidth/patternWidth)); j++) {
      patternContainer.append(pattern);
    }
  }

}