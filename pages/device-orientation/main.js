window.addEventListener('DOMContentLoaded', function() {
  window.addEventListener('deviceorientation', function(e) {
      var content = document.getElementById('content');
      content.innerHTML = 'Alpha: ' + Math.floor(e.alpha) + '<br/>' +
                          'Beta: ' + Math.floor(e.beta) + '<br/>' +
                          'Gamma: ' + Math.floor(e.gamma);
  });
});
