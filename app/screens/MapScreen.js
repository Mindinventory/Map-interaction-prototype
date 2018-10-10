import React from 'react';
import {
    StyleSheet,
    View,
    Dimensions,
    Text,
    Image,
    TouchableOpacity,
    Platform,
    ScrollView,
    StatusBar
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import geolib from 'geolib';

import MapView, {
    MAP_TYPES,
    ProviderPropType,
    Polyline,
    Marker,
    Polygon,
    Overlay,
    Circle,
    AnimatedRegion
} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import * as maputil from "../../app/utils/maputils";


const ic_action_back = require('../resource/images/ic_action_back.png');
// const ic_action_back = require('../app/resource/images/ic_action_back.png');
// const direction_start = require('app/resource/images/direction_start.png');

let mapintegration = null;

const {width, height} = Dimensions.get('window');
const GOOGLE_MAPS_APIKEY = 'AIzaSyCx60-3gx-i-UgRKTSErDhX7ZEmvb_yo5c';
const ASPECT_RATIO = width / height;
// 40.6341651,-73.964645
const LATITUDE = 40.6341651;
const LONGITUDE = -73.964645;
const LATITUDE_DELTA = 1.5;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

//40.657314,-73.98085
const LATITUDE_DEST1 = 40.657314;
const LONGITUDE_DEST1 = -73.98085;

//40.663575,-73.955214
const LATITUDE_DEST2 = 40.663575;
const LONGITUDE_DEST2 = -73.955214;

class MapIntegration extends React.Component {

    constructor(props) {
        super(props);
        mapintegration = this;
        this.state = {
            region: {
                latitude: LATITUDE,
                longitude: LONGITUDE,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
            },
            coordinate: new AnimatedRegion({
                latitude: LATITUDE_DEST1,
                longitude: LONGITUDE_DEST1,
            }),
            latitudeDestination: LATITUDE_DEST1,
            longitudeDestination: LONGITUDE_DEST1,
        };
    }

    animateToRandomBearing() {
        this.map.animateToBearing(this.getBearingFromLocation(), 700);
    }

    getBearingFromLocation() {

        if (this.state.latitudeDestination !== LATITUDE_DEST1) {
            this.setState({

                latitudeDestination: LATITUDE_DEST1,
                longitudeDestination: LONGITUDE_DEST1
            })
        }
        else {
            this.setState({

                latitudeDestination: LATITUDE_DEST2,
                longitudeDestination: LONGITUDE_DEST2
            })
        }

        let bearing = geolib.getBearing(
            {latitude: LATITUDE, longitude: LONGITUDE},
            {latitude: this.state.latitudeDestination, longitude: this.state.longitudeDestination}
        );

        this.animate();

        return bearing;
    }


    animate() {
        const {coordinate} = this.state;
        const newCoordinate = {
            // latitude: LATITUDE + ((Math.random() - 0.5) * (LATITUDE_DELTA / 2)),
            // longitude: LONGITUDE + ((Math.random() - 0.5) * (LONGITUDE_DELTA / 2)),
            latitude: ((mapintegration.state.latitudeDestination)),
            longitude: ((mapintegration.state.longitudeDestination)),
        };

        if (Platform.OS === 'android') {
            if (this.marker) {
                this.marker._component.animateMarkerToCoordinate(newCoordinate, 500);
            }
        } else {
            coordinate.timing(newCoordinate).start();
        }
    }

    render() {
        return (
            <View style={maputil.MapScreenstyles.contentContainer}>

                <MapView

                    ref={ref => {
                        this.map = ref;
                    }}
                    provider={this.props.provider}
                    style={maputil.MapScreenstyles.map}
                    followsUserLocation={false}
                    loadingEnabled={true}
                    showsIndoorLevelPicker={false}
                    initialRegion={{
                        latitude: LATITUDE,
                        longitude: LONGITUDE,
                        latitudeDelta: LATITUDE_DELTA,
                        longitudeDelta: LONGITUDE_DELTA,
                    }}
                    customMapStyle={maputil.customMapStyle}
                    // onRegionChange={region => this.onRegionChange(region)}
                >


                    {/*   <Polyline
                        coordinates={[
                            { latitude:LATITUDE, longitude: LONGITUDE },
                            // { latitude: 37.7896386, longitude: -122.421646 },
                            { latitude: this.state.latitudeDestination, longitude: this.state.longitudeDestination },
                        ]}
                        strokeColor="#FC2681" // fallback for when `strokeColors` is not supported by the map-provider
                        strokeColors={[
                            '#00AEFB',
                            '#FC2681'
                        ]}
                        strokeWidth={4}
                        lineCap={"round"}
                        lineJoin={"round"}
                        geodesic={true}
                    />
*/}
                    {/*<Circle
                        center={{latitude: 37.8025259, longitude: -122.4351431}}
                        radius={120}
                        strokeColor="#00AEFB"
                        fillColor="#00AEFB"
                        zIndex={1}
                    />

                    <Circle
                        center={{latitude: 37.7665248, longitude: -122.4161628}}
                        radius={120}
                        strokeColor="#FC2681"
                        fillColor="#FC2681"
                    />*/}

                    <MapViewDirections
                        origin={{latitude: LATITUDE, longitude: LONGITUDE}}
                        destination={{
                            latitude: this.state.latitudeDestination,
                            longitude: this.state.longitudeDestination
                        }}
                        apikey={GOOGLE_MAPS_APIKEY}
                        strokeWidth={3}
                        strokeColor="#FC2681"

                        onStart={(params) => {
                            console.log(`Started routing between "${params.origin}" and "${params.destination}"`);
                        }}
                        onReady={(result) => {
                            this.map.fitToCoordinates(result.coordinates, {
                                edgePadding: {
                                    right: 160,
                                    bottom: 500,
                                    left: 160,
                                    top: 900,
                                }
                            });
                        }}
                        onError={(errorMessage) => {
                            console.log('GOT AN ERROR' + errorMessage);
                        }}
                    />

                    {/*   <Marker
                        coordinate={ { latitude: 37.8025259, longitude: -122.4351431 }}
                        image={direction_start}
                    />*/}

                    {/*    <Marker.Animated
                        ref={marker => { this.marker = marker; }}
                        coordinate={this.state.coordinate}
                    />*/}

                </MapView>


                <MapHeader/>

                <TouchableOpacity
                    onPress={() => this.animateToRandomBearing()
                    }
                    style={maputil.MapScreenstyles.BottomContainer}

                >

                    <Text style={{color: '#000000'}}>Animate (Bearing)</Text>

                </TouchableOpacity>


            </View>
        )
    }

}

class MapHeader extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <LinearGradient colors={['#8301FF', '#30ACFF']}
                            start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
                            style={{
                                height: 200, width: '100%',
                                borderBottomLeftRadius: 16,
                                borderBottomRightRadius: 16,
                                paddingBottom: 8
                            }}
            >
                <StatusBar
                    backgroundColor="#00000000"
                    barStyle="default"
                    translucent={true}
                />
                <View style={{
                    paddingTop: 24,
                    width: '100%',
                    alignItems: 'center',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}>

                    <Image source={ic_action_back}
                           resizeMode='center'/>

                    <Text style={{
                        textAlign: 'center',
                        paddingLeft: 20,
                        paddingRight: 20,
                        color: '#FFFFFF'
                    }}>SEE ALL</Text>

                </View>
                <View style={{
                    flex: 1,
                    justifyContent: 'flex-end',
                    padding: 10,
                    alignItems: 'flex-start',
                }}>
                    <Text style={{
                        textAlign: 'center',
                        color: '#FFFFFF',
                        opacity: 0.6
                    }}>Restaurants</Text>
                    <Text style={{
                        textAlign: 'center',
                        fontSize: 30,
                        fontFamily: 'Roboto',
                        color: '#FFFFFF'
                    }}>Brooklyn</Text>

                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        padding: 10,
                        alignItems: 'flex-start',
                        opacity: 0.6
                    }}>

                        <Image source={ic_action_back}
                               resizeMode='center'/>

                        <Text style={{
                            textAlign: 'center',
                            color: '#FFFFFF'
                        }}>3164, Anthony Avenue</Text>

                    </View>

                </View>

            </LinearGradient>

        )
    }

}


export default MapIntegration;