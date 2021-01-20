import React, {forwardRef, useMemo} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Screens from '../screens';
import Header from '../components/Header';

import routes from '../constants/routes';

const Stack = createStackNavigator();

const Navigation = forwardRef(({drawer}, ref) => {
  const routesValues = useMemo(() => Object.values(routes), []);

  return (
    <NavigationContainer ref={ref}>
      <Stack.Navigator
        screenOptions={{
          animationEnabled: false,
          header: ({scene}) => (
            <Header
              title={scene.route.name}
              onLeftPress={() => {
                drawer.current?.open();
              }}
            />
          ),
        }}>
        {routesValues.map((route) => (
          <Stack.Screen name={route.name} component={Screens[route.name]} />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
});

export default Navigation;
