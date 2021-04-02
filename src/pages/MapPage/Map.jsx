import React from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';
import {drawRoute} from './drawRoute';
import {useSelector, useDispatch} from 'react-redux';
import {getOrder, addAddresses} from '../../redux/actions';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'absolute', 
    top: 0, 
    bottom: 0, 
    minHeight: '100vh', 
    width: '100%', 
    zIndex: 0,

    [theme.breakpoints.up('tablet')]: {
      top: '77px',
      minHeight: 'calc(100vh - 77px)', 
    }
  },
}));

const Map = () => {
  const dispatch = useDispatch();
  const routeCoords = useSelector(({orderReducer}) => orderReducer.routePoints);
  const isOrdered = useSelector(({orderReducer}) => orderReducer.isOrdered);
  const classes = useStyles();

  mapboxgl.accessToken =
    "pk.eyJ1IjoicHJpdmV0YWRlbCIsImEiOiJja2xqOTJqaG0wYjIwMm9vYmx2emZyZW45In0.DkoxxbfMHFNwyYcCM5-vCw";

  const mapContainer = React.useRef(null);
  const mapRef = React.useRef(null);

  React.useEffect(() => {
    let map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      zoom: 10,
      center: [30.31413, 59.93863],
    });

    mapRef.current = map;

    map.addControl(new mapboxgl.NavigationControl(), "bottom-right");

    return () => {
      if (map.getLayer("route")) {
        map.removeLayer("route");
        map.removeSource("route");
      }

      dispatch(addAddresses('', ''));
      dispatch(getOrder(false));
      mapRef.current = null;
      map.remove();
    }
  }, []);

  React.useEffect(() => {
    if (!isOrdered && mapRef.current.getLayer("route")) {
      mapRef.current.flyTo({
        center: [30.31413, 59.93863],
        zoom: 10
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
    <div data-testid="map" ref={mapContainer} className={classes.root} ></div>
  );
};

export default Map;
