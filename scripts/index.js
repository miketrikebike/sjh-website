let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 35.717, lng: 139.731 },
    zoom: 8,
  });
}