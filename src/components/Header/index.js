import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';

import colors from '../../constants/colors';
import text from '../../constants/text';

const Header = ({title, onLeftPress}) => (
  <View style={Styles.container}>
    <View style={Styles.sideButtonContainer}>
      <TouchableOpacity onPress={onLeftPress}>
        <FontAwesomeIcon icon={faBars} size={26} color={colors.navIcon} />
      </TouchableOpacity>
    </View>
    <View style={Styles.titleContainer}>
      <Text style={Styles.titleText}>{title?.toUpperCase()}</Text>
    </View>
  </View>
);

const Styles = {
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: 'white',
    borderTopLeftRadius: 47,
    padding: 35,
  },
  sideButtonContainer: {
    flex: 0.2,
  },
  titleContainer: {
    flex: 0.8,
    alignItems: 'flex-start',
  },
  titleText: {
    ...text.mediumStyles,
    color: colors.screenTitle,
    fontSize: 24,
    textAlign: 'center',
    letterSpacing: 5,
  },
};

export default Header;
