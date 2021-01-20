import React, {useRef} from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  StatusBar,
  useWindowDimensions,
} from 'react-native';
import Drawer from 'react-native-drawer';

import Menu from './Menu';
import Navigation from './Navigation';

import sizes from '../constants/sizes';

const NavigationDrawer = () => {
  const drawer = useRef(null);
  const navigation = useRef(null);
  const window = useWindowDimensions();

  const handleNavigate = (route) => {
    navigation.current?.navigate(route);
    drawer.current?.close();
  };

  const windowStyles = {
    width: window.width,
    height: window.height - sizes.top,
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <Drawer
        ref={drawer}
        type="static"
        tapToClose={true}
        openDrawerOffset={0.35}
        tweenHandler={(ratio) => ({
          main: {
            transform: [{rotate: `${-8 * ratio}deg`}, {translateY: 12 * ratio}],
            borderTopLeftRadius: 48,
            borderLeftWidth: 5 * ratio,
            borderLeftColor: 'rgba(0,0,0,0.2)',
            borderBottomWidth: 5 * ratio,
            borderBottomColor: 'rgba(0,0,0,0.2)',
          },
        })}
        content={<Menu handleNavigate={handleNavigate} />}>
        <View style={windowStyles}>
          <Navigation ref={navigation} drawer={drawer} />
        </View>
      </Drawer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default NavigationDrawer;
