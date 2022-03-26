let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 38.0, lng: -100 },
    zoom: 6,
  });
}