import React from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';
import {drawRoute} from './drawRoute';

const Map = ({routeCoords}) => {
  mapboxgl.accessToken =
    "pk.eyJ1IjoicHJpdmV0YWRlbCIsImEiOiJja2xqOTJqaG0wYjIwMm9vYmx2emZyZW45In0.DkoxxbfMHFNwyYcCM5-vCw";

  const mapContainer = React.useRef(null);

  React.useEffect(() => {
    let map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      zoom: 11,
      center: [30.31413, 59.93863],
    });

    map.addControl(new mapboxgl.NavigationControl(), "bottom-right");

    if(routeCoords.length) {
      drawRoute(map, routeCoords)
    }

    return () => {
      map.remove();
    }
  }, [routeCoords]);

  return (
    <div style={{position: 'absolute', top: '77px', bottom: '0', width: '100%', zIndex: '-1'}} data-testid="map" ref={mapContainer}></div>
  );
};

export default Map;
