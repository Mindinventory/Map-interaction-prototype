import React from 'react';
import {Image, Text, TouchableHighlight, View} from 'react-native';
import {styles} from './styles';

export const MapItem = (props: {
  displayData: string;
  displayData1: string;
  onPress: Function;
  height?: number | 0;
}) => {
  return (
    <View style={styles.itemContainer}>
      <TouchableHighlight
        style={styles.itemInnerContainer}
        onPress={() => props.onPress()}>
        <View style={styles.itemInnerContainer}>
          <Image
            style={[styles.itemImg, {height: props.height}]}
            source={{
              uri: 'https://image3.mouthshut.com/images/imagesp/925042418s.jpg',
            }}
          />

          <View style={styles.itemContainer2}>
            <Text style={styles.itemLabel}>
              {props.displayData1 + props.displayData}
            </Text>
            <Text style={styles.review}>306 Review</Text>
          </View>
        </View>
      </TouchableHighlight>
    </View>
  );
};
