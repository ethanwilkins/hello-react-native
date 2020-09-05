/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Alert,
  Platform,
  PermissionsAndroid
} from 'react-native';

// To have geolocation API aligned with the browser (cross-platform apps), or to support backward compatibility
navigator.geolocation = require('@react-native-community/geolocation');

const App: () => React$Node = () => {
  const [location, setLocation] = useState(null);
  
  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Permission',
          message:'Get your location to post request',
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use geolocation");
      } else {
        console.log(JSON.stringify(granted));
        console.log(PermissionsAndroid.RESULTS.GRANTED);
      }
    } catch (err) {
      console.warn(err);
    }
  };
  
  const findCoordinates = () => {
    //requestPermissions();
    navigator.geolocation.getCurrentPosition(
      position => {
        const location = JSON.stringify(position);
        setLocation(location);
      },
      error => Alert.alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  };
  
  return (
    <>
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic">
          <View>
            <Text>
              Overthrow capitalism
            </Text>
            
            <TouchableOpacity onPress={requestLocationPermission}>
              <Text>Request permissions for location</Text>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={findCoordinates}>
              <Text>Find My Coords?</Text>
              <Text>Location: {location}</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;
