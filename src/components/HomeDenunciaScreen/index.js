// GeolocationComponent.js
import React from 'react';
import { geolocated } from 'react-geolocated';

const HomeDenunciaScreen = ({
  isGeolocationAvailable,
  isGeolocationEnabled,
  coords,
  error,
}) => {
  if (!isGeolocationAvailable) {
    return <div>Seu navegador não suporta geolocalização.</div>;
  }

  if (!isGeolocationEnabled) {
    return <div>Geolocalização não está habilitada.</div>;
  }

  if (error) {
    return <div>Erro ao obter localização: {error.message}</div>;
  }

  if (coords) {
    return (
      <div>
        <h2>Sua localização:</h2>
        <p>Latitude: {coords.latitude}</p>
        <p>Longitude: {coords.longitude}</p>
      </div>
    );
  }

  return <div>Obtendo localização...</div>;
};

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(HomeDenunciaScreen);
