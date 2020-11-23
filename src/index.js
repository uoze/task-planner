// console.log("index.js is workinghellooowowrldldlld");

import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoiZXpvdSIsImEiOiJja2h1dHlld2swOWdnMnltbG5xc2R4cTl4In0.gSwS1T9SLgZpiU7C0BiH-Q";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10", // mapbox has lots of different map styles available.
});

const marker = document.getElementById("marker");
new mapboxgl.Marker(marker).setLngLat([-74.009151, 40.705086]).addTo(map);
