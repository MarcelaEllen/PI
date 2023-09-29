if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(function(position) {
    console.log("Latitude: " + position.coords.latitude);
    console.log("Longitude: " + position.coords.longitude);
  }, function(error) {
    console.error("Erro ao obter a localização: " + error.message);
  });
} else {
  console.log("Geolocalização não é suportada neste navegador.");
}
