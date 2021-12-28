import React, {useRef, useState} from 'react';
import {Dimensions, FlatList, Image, Platform, View} from 'react-native';
import MapView, {
  AnimatedRegion,
  Marker,
  PROVIDER_DEFAULT,
  PROVIDER_GOOGLE,
} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import {MapHeader} from './MapHeader';
import {customMapStyle, styles} from './styles';
import {MapItem} from './MapItem';
import {palette} from '../utils/Palette';

const {width, height} = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 23.071027;
const LONGITUDE = 72.51814;
const LATITUDE_DELTA = 1.5;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export const GOOGLE_MAPS_APIKEY = 'AIzaSyDJP87o4Q1TNEg8KVwI3pgUdbiZNkwA_Eo';

export interface Places {
  name: string;
  latitude: number;
  longitude: number;
}

export const MapInteraction = (props: {arrPlaces: Array<Places>}) => {
  const {arrPlaces} = props;
  let mapRef = useRef<MapView | null>(null);
  let markerRef = useRef<Marker | null>(null);

  const [latDestination, setLatDestination] = useState(arrPlaces[0].latitude);
  const [longDestination, setLongDestination] = useState(
    arrPlaces[0].longitude,
  );
  const coordinates = new AnimatedRegion({
    latitude: arrPlaces[0].latitude,
    longitude: arrPlaces[0].longitude,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  });

  const onViewRef = React.useRef((viewableItems: any) => {
    let changedItems = viewableItems.changed;
    let viewItem = changedItems.map((centerItem: any) => {
      return centerItem.isViewable === true && centerItem.item;
    });
    animateToRandomBearing(viewItem[0]);
  });
  const viewConfigRef = React.useRef({viewAreaCoveragePercentThreshold: 50});

  const animateToRandomBearing = (item: Places) => {
    mapRef.current?.animateCamera({
      center: {
        latitude: item.latitude,
        longitude: item.longitude,
      },
    });
    setLatDestination(item.latitude);
    setLongDestination(item.longitude);
    animate();
  };

  const animate = () => {
    const newCoordinate = {
      latitude: latDestination,
      longitude: longDestination,
      useNativeDriver: true,
    };

    if (Platform.OS === 'android') {
      if (markerRef) {
        markerRef.current?.animateMarkerToCoordinate(newCoordinate, 500);
      }
    } else {
      coordinates.timing(newCoordinate).start();
      coordinates.timing(newCoordinate).start();
    }
  };

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={styles.mapContainer}
        followsUserLocation={false}
        loadingEnabled={true}
        showsIndoorLevelPicker={false}
        provider={
          Platform.OS === 'android' ? PROVIDER_GOOGLE : PROVIDER_DEFAULT
        }
        initialRegion={{
          latitude: LATITUDE,
          longitude: LONGITUDE,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }}
        customMapStyle={customMapStyle}>
        <MapViewDirections
          origin={{latitude: LATITUDE, longitude: LONGITUDE}}
          destination={{
            latitude: latDestination,
            longitude: longDestination,
          }}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={5}
          strokeColor={palette.pink}
          optimizeWaypoints={true}
          onStart={params => {
            console.log(
              `Started routing between "${params.origin}" and "${params.destination}"`,
            );
          }}
          onReady={result => {
            mapRef.current?.fitToCoordinates(result.coordinates, {
              edgePadding: {
                right: 160,
                bottom: 500,
                left: 160,
                top: 500,
              },
            });
          }}
          onError={errorMessage => {
            console.log('GOT AN ERROR: ' + errorMessage);
          }}
        />
      </MapView>

      <MapHeader />

      <View>
        <FlatList
          initialNumToRender={2}
          onEndReachedThreshold={0.0001}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          directionalLockEnabled
          data={arrPlaces}
          horizontal
          style={styles.list}
          snapToAlignment={'center'}
          onViewableItemsChanged={onViewRef.current}
          viewabilityConfig={viewConfigRef.current}
          renderItem={({item}) => (
            <MapItem
              displayData={item.name}
              displayData1=""
              onPress={() => {
                animateToRandomBearing(item);
              }}
            />
          )}
          keyExtractor={item => item.name}
        />

        <View style={styles.container2}>
          <Image
            source={require('../assets/images/ic_search_active.png')}
            resizeMode="center"
          />
          <Image
            source={require('../assets/images/ic_form.png')}
            resizeMode="center"
          />
          <Image
            source={require('../assets/images/ic_like.png')}
            resizeMode="center"
          />
          <Image
            source={require('../assets/images/ic_user.png')}
            resizeMode="center"
          />
        </View>
      </View>
    </View>
  );
};
