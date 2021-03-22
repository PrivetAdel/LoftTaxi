import React from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';
import {drawRoute} from './drawRoute';
import {useSelector, useDispatch} from 'react-redux';
import {getOrder} from '../../redux/actions';

const Map = () => {
  const dispatch = useDispatch();
  const routeCoords = useSelector(({orderReducer}) => orderReducer.routePoints);
  const isOrdered = useSelector(({orderReducer}) => orderReducer.isOrdered);

  mapboxgl.accessToken =
    "pk.eyJ1IjoicHJpdmV0YWRlbCIsImEiOiJja2xqOTJqaG0wYjIwMm9vYmx2emZyZW45In0.DkoxxbfMHFNwyYcCM5-vCw";

  const mapContainer = React.useRef(null);
  const mapRef = React.useRef(null);

  React.useEffect(() => {
    let map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      zoom: 11,
      center: [30.31413, 59.93863],
    });

    mapRef.current = map;

    map.addControl(new mapboxgl.NavigationControl(), "bottom-right");

    return () => {
      map.remove();
    }
  }, []);

  React.useEffect(() => {
    if (!isOrdered && mapRef.current.getLayer("route")) {
      mapRef.current.flyTo({
        center: [30.31413, 59.93863],
        zoom: 15
      });

      mapRef.current.removeLayer("route");
      mapRef.current.removeSource("route");
    }
  }, [isOrdered]);

  React.useEffect(() => {
    if (mapRef.current && routeCoords.length) {
      drawRoute(mapRef.current, routeCoords);
      dispatch(getOrder(true));
    }
  }, [routeCoords]);

  return (
    <div style={{position: 'absolute', top: '77px', bottom: '0', width: '100%', zIndex: '-1'}} data-testid="map" ref={mapContainer}></div>
  );
};

export default Map;
