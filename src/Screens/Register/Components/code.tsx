import React from 'react';
import {View, Text} from 'react-native';
import {OtpInput} from 'react-native-otp-entry';

import styles from '../styles';
import Colors from '../../../Assets/Utils/Colors';
import Metrics from '../../../Assets/Utils/Metrics';

type CodeProps = {
  setValue: any;
};

const Code: React.FC<CodeProps> = ({setValue}) => {
  return (
    <>
      <View style={styles.topContent}>
        <Text style={styles.title}>OTP sent</Text>
        <Text style={styles.description}>Enter the OTP sent to you</Text>
      </View>

      <View style={styles.phoneInputContainer}>
        <OtpInput
          numberOfDigits={6}
          focusColor="green"
          autoFocus={false}
          hideStick={true}
          placeholder="******"
          blurOnFilled={true}
          disabled={false}
          type="numeric"
          secureTextEntry={false}
          focusStickBlinkingDuration={500}
          onFocus={() => console.log('Focused')}
          onBlur={() => console.log('Blurred')}
          onTextChange={text => console.log(text)}
          onFilled={text => setValue(text)}
          textInputProps={{
            accessibilityLabel: 'One-Time Password',
          }}
        />
      </View>
    </>
  );
};

export default Code;
