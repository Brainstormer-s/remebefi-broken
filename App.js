import React from 'react';
import Home from './src/screens/drawer/screen1';
import Today from './src/screens/drawer/screen2';

import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const App = () => {
  const createHomeStack = () => (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );

  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={createHomeStack} />
        <Drawer.Screen name="Today" component={Today} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
