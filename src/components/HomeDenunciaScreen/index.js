import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import * as Location from 'expo-location';

const HomeDenunciaScreen = () => {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        const getLocation = async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permissão de localização não concedida');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location.coords);
        };

        getLocation();
    }, []);

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            {errorMsg ? (
                <Text>{errorMsg}</Text>
            ) : (
                location && (
                    <Text>
                        Latitude: {location.latitude}, Longitude: {location.longitude}
                    </Text>
                )
            )}
        </View>
    );
};

export default HomeDenunciaScreen;
