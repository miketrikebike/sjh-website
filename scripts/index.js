let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 47.658, lng: -117.426 },
    zoom: 10,
  });
}