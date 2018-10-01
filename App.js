import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: 400,
        width: 400,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});

export default class App extends Component {
    render() {
        const { region } = this.props;

        return (
            <View style ={styles.container}>
                <MapView
                    provider={PROVIDER_GOOGLE}
                    style={styles.map}
                    region={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.015,
                        longitudeDelta: 0.0121,
                    }}
                ></MapView>
            </View>
        );
    }
}