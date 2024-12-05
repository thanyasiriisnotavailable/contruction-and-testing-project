window.onload = function () {
  L.mapquest.key = "yrjrgjUNKDj6MQrO4wYojLKs3KUfl2xB";

  var map = L.mapquest.map("map", {
    center: [48.868242, 2.308989],
    layers: L.mapquest.tileLayer("map"),
    zoom: 12,
  });

  map.addControl(L.mapquest.control());
};