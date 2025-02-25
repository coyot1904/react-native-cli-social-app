import React from 'react';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';
import {Message, Heart} from 'iconsax-react-native';

import Colors from '../Assets/Utils/Colors';
import Metrics from '../Assets/Utils/Metrics';

import {HeaderProps} from '../Types/Header';

const Header: React.FC<HeaderProps> = ({title}) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.title}>{title}</Text>

        <TouchableOpacity style={styles.btnContainer}>
          <Heart size={Metrics.measure(22)} color={Colors.BLACK} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnContainer}>
          <Message size={Metrics.measure(22)} color={Colors.BLACK} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: Metrics.measure(15),
    paddingTop: Metrics.measure(5),
  },
  title: {
    color: Colors.BLACK,
    fontSize: Metrics.measure(16),
    fontFamily: 'Poppins-Medium',
    width: '85%',
    paddingLeft: Metrics.measure(15),
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  btnContainer: {
    paddingRight: Metrics.measure(15),
  },
});

export default Header;
