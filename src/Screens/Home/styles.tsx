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
  image: {
    width: Metrics.measure(330),
    height: Metrics.measure(150),
    resizeMode: 'cover',
    marginTop: Metrics.measure(7),
    marginBottom: Metrics.measure(7),
    borderRadius: Metrics.measure(3),
  },
  postContainer: {
    width: Metrics.measure(330),
    marginBottom: Metrics.measure(15),
  },
  row: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
  },
  userProfile: {
    width: Metrics.measure(30),
    height: Metrics.measure(30),
    resizeMode: 'cover',
    borderRadius: Metrics.measure(15),
    overflow: 'hidden',
    borderColor: Colors.DeepPink,
    borderWidth: Metrics.measure(1),
    padding: Metrics.measure(2),
  },
  username: {
    fontFamily: 'Poppins-Medium',
    fontSize: Metrics.measure(12),
    color: Colors.BLACK,
    marginLeft: Metrics.measure(7),
  },
  actionContainer: {
    marginRight: Metrics.measure(7),
    flexDirection: 'row',
    alignItems: 'center',
  },
  content: {
    fontFamily: 'Poppins-Light',
    fontSize: Metrics.measure(12),
    color: Colors.BLACK,
    marginTop: Metrics.measure(7),
  },
  actionCount: {
    fontFamily: 'Poppins-Light',
    fontSize: Metrics.measure(11),
    color: Colors.BLACK,
    marginLeft: Metrics.measure(5),
    marginRight: Metrics.measure(5),
  },
  date: {
    fontFamily: 'Poppins-Light',
    fontSize: Metrics.measure(10),
    color: Colors.BLACK,
    marginTop: Metrics.measure(3),
  },
});
