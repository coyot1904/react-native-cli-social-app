import {ViewStyle, TextStyle} from 'react-native';

export interface ButtonProps {
  onPress: () => void;
  title: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
}
