import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import './Map.css';
// import Data from "./data"
import API from "../../utils/API";


mapboxgl.accessToken =
  'pk.eyJ1IjoiZGF2aWRuamFmZmUiLCJhIjoiY2tpanQzdzA3MDM1NjJ0cW1lMmVvdmUweiJ9.9znxRvwMbpk6SQKt0hxvUQ';

   
  
  //bringing in data



  
const Map = () => {
  const mapContainerRef = useRef(null);

  const [lng, setLng] = useState(5);
  const [lat, setLat] = useState(34);
  const [zoom, setZoom] = useState(1.5);

  // Initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-122.5123, 45.5557],
      zoom: 9
    });

  
    //GeoJSON file

    var geojson = {
      "features": [
        {
          "type": "Feature",
          "properties": {
            "service": "Printers & Printing",
            "phone": "503-111-1111",
            "name": "Alisha Benson"
          },
          "geometry": {
            "coordinates": [
              -122.658104,
              45.521075
            ],
            "type": "Point"
          },
          "id": "157c71a8232c39b1fc8194b329ee7cf2"
        },
        {
          "type": "Feature",
          "properties": {
            "service": "Wifi & Internet",
            "phone": "503-222-2223",
            "name": "Katie Black"
          },
          "geometry": {
            "coordinates": [
              -122.709149,
              45.537858
            ],
            "type": "Point"
          },
          "id": "15b072d915e4256ecef3fa91a30d63c4"
        },
        {
          "type": "Feature",
          "properties": {
            "name": "Paul The Computer Guy",
            "phone": "503-666-6666",
            "service": "Computer Stuff"
          },
          "geometry": {
            "coordinates": [
              -122.771086,
              45.430953
            ],
            "type": "Point"
          },
          "id": "478469508fc54efa20a0d87e4c4cf692"
        },
        {
          "type": "Feature",
          "properties": {
            "service": "iphone Help & Repair",
            "phone": "503-111-1111",
            "name": "Sam Smith"
          },
          "geometry": {
            "coordinates": [
              -122.64422,
              45.538049
            ],
            "type": "Point"
          },
          "id": "749212c77296d539ddc333f30d3f7070"
        },
        {
          "type": "Feature",
          "properties": {
            "service": "Zoom & skype",
            "phone": "503-666-6663",
            "name": "Sarah Jenkins"
          },
          "geometry": {
            "coordinates": [
              -122.65579,
              45.510202
            ],
            "type": "Point"
          },
          "id": "8110156bbaec66a657bf12029b3a491a"
        },
        {
          "type": "Feature",
          "properties": {
            "phone": "503-999-9999",
            "service": "Tablet Help & Repair",
            "name": "Gavin Hope"
          },
          "geometry": {
            "coordinates": [
              -122.537426,
              45.503925
            ],
            "type": "Point"
          },
          "id": "a61476532913b9f18ae311681dc1be39"
        }
      ],
      "type": "FeatureCollection"
    }

    // add markers to map
geojson.features.forEach(function(marker) {

  // create a HTML element for each feature
  var el = document.createElement('div');
  el.className = 'marker';

  // make a marker for each feature and add to the map
  new mapboxgl.Marker(el)
    .setLngLat(marker.geometry.coordinates)

    new mapboxgl.Marker(el)
  .setLngLat(marker.geometry.coordinates)
  .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
    .setHTML('<h5>' + marker.properties.name + '</h5><p>' + marker.properties.service + '</p>'))
  .addTo(map);
    
});






    
    // Add navigation control (the +/- zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), 'top-right');

    map.on('move', () => {
      setLng(map.getCenter().lng.toFixed(4));
      setLat(map.getCenter().lat.toFixed(4));
      setZoom(map.getZoom().toFixed(2));
    });

    map.scrollZoom.disable();

    // Clean up on unmount
    return () => map.remove();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <div className='sidebarStyle'>
        <div>
          Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
        </div>
      </div>
      <div className='map-container' ref={mapContainerRef} />
    </div>
  );
};



export default Map;

