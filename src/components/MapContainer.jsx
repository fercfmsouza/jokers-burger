import { useState, useEffect } from 'react';
import { GoogleMap, useJsApiLoader, MarkerF } from '@react-google-maps/api';

// Define different styles for mobile and desktop
const mapStyles = {
  desktop: {
    height: '500px',
    width: '600px',
  },
  mobile: {
    height: '500px',
    width: '100%',
  },
};

const getWidth = (width) =>
  width <= 768 ? mapStyles.mobile : mapStyles.desktop;

const MapContainer = () => {
  const [currentStyles, setCurrentStyles] = useState(
    getWidth(window.innerWidth),
  );
  const apiKey = import.meta.env.VITE_REACT_APP_GOOGLE_MAPS_API_KEY;

  useEffect(() => {
    const onResize = (event) =>
      setCurrentStyles(getWidth(event.target.innerWidth));

    window.addEventListener('resize', onResize);

    return () => window.removeEventListener('resize', onResize);
  }, []);

  const defaultCenter = {
    lat: -9.9637098,
    lng: -67.801485,
  };

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: apiKey,
  });

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={currentStyles}
      center={defaultCenter}
      zoom={18}
    >
      <MarkerF
        position={defaultCenter}
        icon={'../../public/assets/local-maps.svg'}
      />
    </GoogleMap>
  ) : (
    <h1>Carregando...</h1>
  );
};

export default MapContainer;
