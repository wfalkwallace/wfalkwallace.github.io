window.addEventListener('DOMContentLoaded', function() {
  window.addEventListener('deviceorientation', function(e) {
      var content = document.getElementById('content');
      content.innerHTML = 'Alpha: ' + e.alpha + '<br/>' +
                            'Beta: ' + e.beta + '<br/>' +
                            'Gamma: ' + e.gamma;
  });
});
