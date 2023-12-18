import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const MapContainer = () => {
  const apiKey = import.meta.env.VITE_REACT_APP_GOOGLE_MAPS_API_KEY;

  const mapStyles = {
    height: '500px',
    width: '600px',
  };

  const defaultCenter = {
    lat: -9.96361,
    lng: -67.80141,
  };

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: apiKey,
  });

  return isLoaded ? (
    <GoogleMap mapContainerStyle={mapStyles} center={defaultCenter} zoom={18}>
      <Marker
        position={defaultCenter}
        icon={'http://maps.google.com/mapfiles/ms/icons/purple-dot.png'}
      />
    </GoogleMap>
  ) : (
    <h1>Carregando...</h1>
  );
};

export default MapContainer;
