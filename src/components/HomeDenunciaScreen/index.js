// HomeDenunciaScreen/index.js
import React from 'react';
import { useGeolocated } from "react-geolocated";

const HomeDenunciaScreen = ({
}) => {
  const { coords, isGeolocationAvailable, isGeolocationEnabled } = useGeolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
});

  if (!isGeolocationEnabled) {
    return (
      <div>
        <span>Você precisa permitir acesso à localização para continuar.</span>

      </div>
    );
  }

  if (!isGeolocationAvailable) {
    return (
      <div>
        <span>Aguarde alguns instantes enquanto roubamos os seus dados...</span>
      </div>
    );
  }

  return coords && (
    <div>
      <h2>Sua localização:</h2>
      <p>Latitude: {coords.latitude}</p>
      <p>Longitude: {coords.longitude}</p>
    </div>
  );
};

export default HomeDenunciaScreen;
