import React from 'react';
import {Image, StatusBar, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {palette} from '../utils/Palette';
import {styles} from './styles';

export const MapHeader = () => {
  return (
    <LinearGradient
      colors={[palette.violet, palette.dodgerBlue]}
      // 132, 1, 255
      // 48, 172, 255
      start={{x: 0.0, y: 1.0}}
      end={{x: 1.0, y: 1.0}}
      style={styles.headerContainer}>
      <StatusBar
        backgroundColor="#00000000"
        barStyle="default"
        translucent={true}
      />
      <View style={styles.headerInnerContainer}>
        <Image
          source={require('../assets/images/ic_action_back.png')}
          resizeMode="center"
        />

        <Text style={styles.seeAll}>SEE ALL</Text>
      </View>
      <View style={styles.container1}>
        <Text style={styles.restaurant}>Restaurants</Text>
        <Text style={styles.brooklyn}>Brooklyn</Text>

        <View style={styles.rowContainer}>
          <Image
            source={require('../assets/images/ic_location.png')}
            resizeMode="center"
          />

          <Text style={styles.address}>3164, Anthony Avenue</Text>
        </View>
      </View>
    </LinearGradient>
  );
};
