import React from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';

const Map = () => {
  mapboxgl.accessToken =
    "pk.eyJ1IjoicHJpdmV0YWRlbCIsImEiOiJja2xqOTJqaG0wYjIwMm9vYmx2emZyZW45In0.DkoxxbfMHFNwyYcCM5-vCw";

  const mapContainer = React.useRef(null);

  React.useEffect(() => {
    let map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      zoom: 11,
      center: [37.618423, 55.751244],
    });

    map.addControl(new mapboxgl.NavigationControl(), "bottom-right");

    return () => {
      map.remove();
    }
  }, []);

  return (
    <div style={{position: 'absolute', top: '0', bottom: '0', width: '100%'}} data-testid="map" ref={mapContainer}></div>
  );
};

export default Map;
