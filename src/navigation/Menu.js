import React, {useState, useMemo} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  useWindowDimensions,
} from 'react-native';

import colors from '../constants/colors';
import sizes from '../constants/sizes';
import text from '../constants/text';
import routes from '../constants/routes';

const NavigationMenu = ({handleNavigate}) => {
  const [activeRoute, setActiveRoute] = useState(routes.start.name);
  const window = useWindowDimensions();
  const routesValues = useMemo(() => Object.values(routes), []);

  const handleItemPress = (route) => {
    setActiveRoute(route);
    handleNavigate(route);
  };

  const windowStyles = {
    width: window.width,
    height: window.height - sizes.top,
  };

  return (
    <View style={StyleSheet.flatten([styles.container, windowStyles])}>
      <View style={styles.menuContainer}>
        <View style={styles.titileContainer}>
          <Text style={styles.title}>Viktor</Text>
        </View>
        {routesValues.map((route) => (
          <TouchableHighlight
            style={styles.item(activeRoute === route.name)}
            onPress={() => handleItemPress(route.name)}
            underlayColor={colors.navButton}>
            <Text style={styles.text(activeRoute === route.name)}>
              {route.title}
            </Text>
          </TouchableHighlight>
        ))}
        <View style={styles.separator} />
        <TouchableHighlight
          style={styles.item(false)}
          underlayColor={colors.navButton}>
          <Text style={styles.text(false)}>Sign Out</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: colors.navBg,
    borderTopLeftRadius: 48,
    paddingHorizontal: 28,
    paddingBottom: 160,
    paddingTop: 100,
  },
  menuContainer: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    width: 175,
  },
  item: (active) => ({
    height: 50,
    width: 175,
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderRadius: 15,
    backgroundColor: active ? colors.navButton : 'transparent',
    paddingHorizontal: 30,
  }),
  text: (active) => ({
    ...text.defaultStyles,
    color: active ? colors.navText : 'white',
    textAlign: 'left',
    letterSpacing: -0.5,
  }),
  titileContainer: {
    padding: 20,
    paddingBottom: 30,
  },
  title: {
    ...text.blackStyles,
    fontSize: 28,
    color: 'white',
  },
  separator: {
    backgroundColor: 'white',
    height: StyleSheet.hairlineWidth,
    width: 175,
    marginVertical: 25,
  },
});

export default NavigationMenu;
