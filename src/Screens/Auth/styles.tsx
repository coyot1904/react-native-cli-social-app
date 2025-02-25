import {StyleSheet} from 'react-native';

import Colors from '../../Assets/Utils/Colors';
import Metrics from '../../Assets/Utils/Metrics';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.WHITE,
    padding: Metrics.measure(15),
  },
  headerImage: {
    marginTop: Metrics.measure(50),
    width: Metrics.measure(300),
    height: Metrics.measure(300),
    resizeMode: 'contain',
  },
  contentContainer: {
    width: Metrics.measure(300),
  },
  title: {
    fontFamily: 'Poppins-Medium',
    fontSize: Metrics.measure(16),
    color: Colors.BLACK,
  },
  decription: {
    marginTop: Metrics.measure(7),
    fontFamily: 'Poppins-Light',
    fontSize: Metrics.measure(15),
    color: Colors.BLACK,
  },
  buttonsContainer: {
    width: '100%',
    position: 'absolute',
    bottom: Metrics.measure(16),
    padding: Metrics.measure(15),
  },
  nextButton: {
    backgroundColor: Colors.DarkGreen,
    marginBottom: Metrics.measure(7),
    height: Metrics.measure(45),
  },
  nextButtonText: {
    fontFamily: 'Poppins-Medium',
    color: Colors.WHITE,
    fontWeight: 'normal',
  },
  skipButton: {
    backgroundColor: Colors.WHITE,
    marginBottom: Metrics.measure(7),
    height: Metrics.measure(45),
    borderColor: Colors.BLACK,
    borderWidth: Metrics.measure(1),
  },
  skipButtonText: {
    fontFamily: 'Poppins-Medium',
    color: Colors.BLACK,
    fontWeight: 'normal',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signButton: {
    backgroundColor: Colors.WHITE,
    height: Metrics.measure(60),
  },
  signButtonText: {
    fontFamily: 'Poppins-Medium',
    color: Colors.Grey,
    fontWeight: 'normal',
    fontSize: Metrics.measure(12),
    marginLeft: Metrics.measure(-17),
  },
  signText: {
    fontFamily: 'Poppins-Medium',
    color: Colors.BLACK,
    fontWeight: 'normal',
    fontSize: Metrics.measure(12),
    marginLeft: Metrics.measure(17),
  },
  empty: {
    height: Metrics.measure(60),
  },
});
