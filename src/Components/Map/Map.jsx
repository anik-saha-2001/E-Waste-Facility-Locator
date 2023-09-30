import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import './map.scss';

const Map = () => {
  const [map, setMap] = useState(null);
  const [markers, setMarkers] = useState([]);

  // Set your Google Maps API key here
  const apiKey = 'AIzaSyCpnlwO2Onm_136bt60e6VAkBqHXmZeh1M';

  const mapStyles = {
    height: '400px',
    width: '100%',
  };

  useEffect(() => {
    // Fetch nearby e-waste facilities or data from your backend
    // and set markers as an array of objects with lat and lng properties
    // Example:
    const fetchedMarkers = [
      { lat: 37.7749, lng: -122.4194 }, // Example marker 1
      { lat: 37.7749, lng: -122.4294 }, // Example marker 2
      // Add more markers as needed
    ];
    setMarkers(fetchedMarkers);
  }, []);

  const onMapLoad = (map) => {
    setMap(map);
  };

  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap
        mapContainerStyle={mapStyles}
        center={{ lat: 37.7749, lng: -122.4194 }} // Set your initial map center
        zoom={14} // Set your initial zoom level
        onLoad={onMapLoad}
      >
        {markers.map((marker, index) => (
          <Marker
            key={index}
            position={marker}
            // Customize marker icon if needed
            // icon={{
            //   url: 'your-marker-icon-url',
            //   scaledSize: new window.google.maps.Size(30, 30),
            // }}
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
