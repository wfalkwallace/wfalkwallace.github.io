
$(function () {
	$.getJSON('https://api.forecast.io/forecast/APIKEY/37.8267,-122.423', function(json, textStatus) {
		$(".status").contents("Data: " + json + "\nStatus: " + status);
	});

});