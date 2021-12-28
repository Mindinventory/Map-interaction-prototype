import {Dimensions, StyleSheet} from 'react-native';
import {palette} from '../utils/Palette';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  mapContainer: {
    backgroundColor: palette.black,
    ...StyleSheet.absoluteFillObject,
  },
  headerContainer: {
    height: 200,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    paddingVertical: 10,
  },
  headerInnerContainer: {
    paddingTop: 24,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  seeAll: {
    textAlign: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    color: palette.white,
  },
  container1: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 10,
    alignItems: 'flex-start',
  },
  restaurant: {
    textAlign: 'center',
    color: palette.white,
    opacity: 0.6,
  },
  brooklyn: {
    textAlign: 'center',
    fontSize: 30,
    color: palette.white,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginLeft: -10,
    opacity: 0.6,
  },
  address: {
    color: palette.white,
  },
  itemContainer: {
    height: 100,
    marginLeft: 10,
    marginRight: 10,
    width: Dimensions.get('window').width * 1 - 20,
  },
  itemInnerContainer: {
    backgroundColor: palette.porcelain,
    borderRadius: 10,
    overflow: 'hidden',
    width: '100%',
    flex: 1,
    flexDirection: 'row',
  },
  itemImg: {
    width: 100,
    overflow: 'hidden',
  },
  itemContainer2: {
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 12,
    justifyContent: 'space-between',
  },
  itemLabel: {
    fontWeight: 'bold',
    fontSize: 20,
    color: palette.deepCove,
  },
  review: {
    top: 2,
    color: palette.victoria,
  },
  list: {
    maxHeight: 100,
    width: Dimensions.get('window').width * 1,
    overflow: 'visible',
    right: 0,
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  container2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: palette.bunting,
  },
});

export const customMapStyle = [
  {
    featureType: 'all',
    elementType: 'labels.text.fill',
    stylers: [
      {
        saturation: 36,
      },
      {
        color: palette.black,
      },
      {
        lightness: 40,
      },
    ],
  },
  {
    featureType: 'all',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        visibility: 'on',
      },
      {
        color: palette.black,
      },
      {
        lightness: 16,
      },
    ],
  },
  {
    featureType: 'all',
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'administrative',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: palette.black,
      },
      {
        lightness: 20,
      },
    ],
  },
  {
    featureType: 'administrative',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: palette.black,
      },
      {
        lightness: 17,
      },
      {
        weight: 1.2,
      },
    ],
  },
  {
    featureType: 'administrative',
    elementType: 'labels',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'administrative.country',
    elementType: 'all',
    stylers: [
      {
        visibility: 'simplified',
      },
    ],
  },
  {
    featureType: 'administrative.country',
    elementType: 'geometry',
    stylers: [
      {
        visibility: 'simplified',
      },
    ],
  },
  {
    featureType: 'administrative.country',
    elementType: 'labels.text',
    stylers: [
      {
        visibility: 'simplified',
      },
    ],
  },
  {
    featureType: 'administrative.province',
    elementType: 'all',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'administrative.locality',
    elementType: 'all',
    stylers: [
      {
        visibility: 'simplified',
      },
      {
        saturation: '-100',
      },
      {
        lightness: '30',
      },
    ],
  },
  {
    featureType: 'administrative.neighborhood',
    elementType: 'all',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'administrative.land_parcel',
    elementType: 'all',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'landscape',
    elementType: 'all',
    stylers: [
      {
        visibility: 'simplified',
      },
      {
        gamma: '0.00',
      },
      {
        lightness: '74',
      },
    ],
  },
  {
    featureType: 'landscape',
    elementType: 'geometry',
    stylers: [
      {
        color: palette.martinique,
      },
      {
        lightness: '-37',
      },
    ],
  },
  {
    featureType: 'landscape.man_made',
    elementType: 'all',
    stylers: [
      {
        lightness: '3',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'all',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'geometry',
    stylers: [
      {
        color: palette.black,
      },
      {
        lightness: 21,
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [
      {
        visibility: 'simplified',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: palette.ebonyClay,
      },
      {
        lightness: '0',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: palette.black,
      },
      {
        lightness: 29,
      },
      {
        weight: 0.2,
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: palette.waterloo,
      },
      {
        lightness: '43',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'road.arterial',
    elementType: 'geometry',
    stylers: [
      {
        color: palette.ebonyClay,
      },
      {
        lightness: '1',
      },
    ],
  },
  {
    featureType: 'road.arterial',
    elementType: 'labels.text',
    stylers: [
      {
        visibility: 'on',
      },
    ],
  },
  {
    featureType: 'road.arterial',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: palette.waterloo,
      },
    ],
  },
  {
    featureType: 'road.arterial',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'road.local',
    elementType: 'geometry',
    stylers: [
      {
        color: palette.ebonyClay,
      },
      {
        lightness: '-1',
      },
      {
        gamma: '1',
      },
    ],
  },
  {
    featureType: 'road.local',
    elementType: 'labels.text',
    stylers: [
      {
        visibility: 'on',
      },
      {
        hue: palette.red,
      },
    ],
  },
  {
    featureType: 'road.local',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: palette.waterloo,
      },
      {
        lightness: '-31',
      },
    ],
  },
  {
    featureType: 'road.local',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'transit',
    elementType: 'geometry',
    stylers: [
      {
        color: palette.ebonyClay,
      },
      {
        lightness: '-36',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [
      {
        color: palette.ebonyClay,
      },
      {
        lightness: '0',
      },
      {
        gamma: '1',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
];
