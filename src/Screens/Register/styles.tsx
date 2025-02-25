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
  contentContainer: {
    width: Metrics.measure(300),
  },
  title: {
    fontFamily: 'Poppins-Medium',
    fontSize: Metrics.measure(16),
    color: Colors.BLACK,
  },
  topContent: {
    width: Metrics.measure(330),
    marginTop: Metrics.measure(0),
    padding: Metrics.measure(7),
  },
  description: {
    fontFamily: 'Poppins-Light',
    fontSize: Metrics.measure(14),
    color: Colors.BLACK,
  },
  backContainer: {
    width: '100%',
    padding: Metrics.measure(15),
  },
  nextButton: {
    backgroundColor: Colors.DarkGreen,
    marginBottom: Metrics.measure(7),
    height: Metrics.measure(45),
    width: '100%',
  },
  buttonsContainer: {
    width: '100%',
    position: 'absolute',
    padding: Metrics.measure(16),
    bottom: Metrics.measure(16),
  },
  nextButtonText: {
    fontFamily: 'Poppins-Medium',
    color: Colors.WHITE,
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
  phoneInputContainer: {
    width: '100%',
    padding: Metrics.measure(15),
    paddingTop: 0,
    marginTop: Metrics.measure(15),
  },
});
