let map = L.map('map').setView([19.0760, 72.8777], 3);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 15,
}).addTo(map);

let startCoordinates = [19.0760, 72.8777]; 
let currentCoordinates = [-36.802237, 12.913736]; 
let endCoordinates = [40.7128, -74.0060];

let startMarker = L.marker(startCoordinates).addTo(map);
let currentMarker = L.marker(currentCoordinates).addTo(map);
let endMarker = L.marker(endCoordinates).addTo(map);

let journeyLine = L.polyline([startCoordinates, currentCoordinates, endCoordinates], {
    color: 'blue',
    weight: 2,
    dashArray: '5, 5', 
}).addTo(map);

map.fitBounds(journeyLine.getBounds());
