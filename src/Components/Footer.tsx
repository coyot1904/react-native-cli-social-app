import React from 'react';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';
import {
  Home,
  User,
  SearchNormal1,
  AddSquare,
  VideoPlay,
} from 'iconsax-react-native';

import Colors from '../Assets/Utils/Colors';
import Metrics from '../Assets/Utils/Metrics';

import {FooterProps} from '../Types/Footer';

const Footer: React.FC<FooterProps> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.footerTabContainer}
          onPress={() => navigation.navigate('HomePage')}>
          <Home size={Metrics.measure(24)} color={Colors.BLACK} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerTabContainer}>
          <SearchNormal1 size={Metrics.measure(24)} color={Colors.BLACK} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerTabContainer}>
          <AddSquare size={Metrics.measure(24)} color={Colors.BLACK} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerTabContainer}>
          <VideoPlay size={Metrics.measure(24)} color={Colors.BLACK} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerTabContainer}>
          <User size={Metrics.measure(24)} color={Colors.BLACK} />
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
    position: 'absolute',
    bottom: 0,
    borderColor: Colors.BLACK,
    borderWidth: Metrics.measure(0.4),
    borderStyle: 'dotted',
    height: Metrics.measure(65),
    backgroundColor: Colors.WHITE,
    justifyContent: 'center',
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
  footerTabContainer: {
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Footer;
