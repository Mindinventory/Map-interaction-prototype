/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {MapInteraction, Places} from './src/mapInteraction/MapInteraction';

const App = () => {
  const arrPlaces: Array<Places> = [
    {
      name: 'Banyan Paradise',
      latitude: 22.3623647,
      longitude: 73.2013142,
    },
    {name: 'The New Holiday', latitude: 23.601965, longitude: 72.390348},
    {
      name: 'Cambay Sapphire',
      latitude: 23.247009,
      longitude: 72.6344507,
    },
    {
      name: 'Khanvel',
      latitude: 21.184742,
      longitude: 72.833131,
    },
    {
      name: 'Efcee Sarovar Portico',
      latitude: 21.7493556,
      longitude: 72.13625729,
    },
  ];

  return <MapInteraction arrPlaces={arrPlaces} />;
};

export default App;
