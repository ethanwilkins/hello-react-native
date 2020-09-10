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
  Dimensions,
  ScrollView,
  View,
  Text,
  Image,
  Alert,
  StatusBar,
  TouchableOpacity
} from 'react-native';

// To have geolocation API aligned with the browser (cross-platform apps), or to support backward compatibility
navigator.geolocation = require('@react-native-community/geolocation');

const App: () => React$Node = () => {
  const [location, setLocation] = useState(null);
  
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
      <SafeAreaView style={styles.container}>
        <Image
          source={require('./assets/images/home.png')}
          style={styles.mockupMapImg}
        />
        <View style={styles.mapToolbar}>
          <View style={styles.mapToolbarButtonContainer}>
            <View style={styles.mapToolbarButton}>
            </View>
            <View style={styles.mapToolbarButton}>
            
            </View>
          </View>
          <View style={styles.searchBar}>
            <Text style={styles.searchBarText}>
              Search
            </Text>
          </View>
        </View>
        <ScrollView
          style={styles.pageButtons}
          contentInsetAdjustmentBehavior="automatic"
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          scrollEnabled={true}
        >
          <View style={styles.pageButton}>
            <View style={styles.pageButtonText}>
              <Text style={styles.text}>
                COVID Status
              </Text>
              <Text style={styles.text}>
                Check-In
              </Text>
            </View>
          </View>
          
          <View style={styles.pageButton}>
            <View style={styles.pageButtonText}>
              <Text style={styles.text}>
                Location
              </Text>
              <Text style={styles.text}>
                Logging
              </Text>
            </View>
          </View>
          
          <View style={styles.pageButton}>
            <View style={styles.pageButtonText}>
              <Text style={styles.text}>
                Community
              </Text>
              <Text style={styles.text}>
                Circles
              </Text>
            </View>
          </View>
          
          <View style={styles.pageButton}>
            <View style={styles.pageButtonText}>
              <Text style={styles.text}>
                Community
              </Text>
              <Text style={styles.text}>
                Support
              </Text>
            </View>
          </View>
          
          <View style={styles.pageButton}>
            <View style={styles.pageButtonText}>
              <Text style={styles.text}>
                Community
              </Text>
              <Text style={styles.text}>
                Report
              </Text>
            </View>
          </View>
          
          <View style={styles.pageButton}>
            <View style={styles.pageButtonText}>
              <Text style={[styles.text, styles.settingsText]}>
                Settings
              </Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  mockupMapImg: {
    width: '105%',
    resizeMode: 'contain',
    position: 'absolute',
    top: -(Dimensions.get('window').width / 1)
  },
  
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end'
  },
  
  mapToolbar: {
    height: 110,
    width: Dimensions.get('window').width - 40,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 22
  },
  
  mapToolbarButtonContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  
  mapToolbarButton: {
    width: 44,
    height: 44,
    backgroundColor: '#4F4F4F',
    borderRadius: 4,
    marginRight: 18
  },
  
  searchBar: {
    height: 44,
    backgroundColor: '#4F4F4F',
    borderRadius: 7
  },
  
  searchBarText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Inter',
    marginLeft: 18,
    marginTop: 7.5
  },
  
  pageButtons: {
    paddingLeft: 20,
    maxHeight: 195
  },
  
  pageButton: {
    width: 221,
    height: 132,
    borderRadius: 6,
    backgroundColor: '#4F4F4F',
    marginRight: 8
  },
  
  pageButtonText: {
    marginTop: 50,
    marginLeft: 25
  },
  
  text: {
    fontSize: 24,
    color: 'white',
    lineHeight: 24,
    fontWeight: 'bold',
    fontFamily: 'Inter' // Custom fonts not currently working for Android
  },
  
  settingsText: {
    marginTop: 11
  }
});

export default App;
