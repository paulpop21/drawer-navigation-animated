import React, {useRef} from 'react';
import {StyleSheet, View} from 'react-native';
import Drawer from 'react-native-drawer';

import Menu from './Menu';
import Navigation from './Navigation';

import sizes from '../constants/sizes';

const NavigationDrawer = () => {
  const drawer = useRef(null);
  const navigation = useRef(null);

  const handleNavigate = (route) => {
    navigation.current?.navigate(route);
    drawer.current?.close();
  };

  return (
    <>
      <View style={styles.topContainer} />
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
        <Navigation ref={navigation} drawer={drawer} />
      </Drawer>
    </>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    height: sizes.top,
  },
});

export default NavigationDrawer;
