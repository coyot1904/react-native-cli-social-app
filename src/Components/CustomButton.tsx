import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

import Colors from '../Assets/Utils/Colors';
import Metrics from '../Assets/Utils/Metrics';

import {ButtonProps} from '../Types/Button';

const CustomButton: React.FC<ButtonProps> = ({
  onPress,
  title,
  style,
  textStyle,
}) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.Blue,
    paddingVertical: Metrics.measure(12),
    paddingHorizontal: Metrics.measure(20),
    borderRadius: Metrics.measure(8),
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: Colors.WHITE,
    fontSize: Metrics.measure(16),
    fontWeight: 'bold',
  },
});

export default CustomButton;
