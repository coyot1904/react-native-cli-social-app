import React from 'react';
import {View, Text} from 'react-native';
import PhoneInput from 'react-native-international-phone-number';

import styles from '../styles';
import Colors from '../../../Assets/Utils/Colors';
import Metrics from '../../../Assets/Utils/Metrics';

type PhoneProps = {
  value: any;
  setValue: any;
  selectedCountry: any;
  handleSelectedCountry: any;
};

const Phone: React.FC<PhoneProps> = ({
  value,
  setValue,
  selectedCountry,
  handleSelectedCountry,
}) => {
  return (
    <>
      <View style={styles.topContent}>
        <Text style={styles.title}>Phone</Text>
        <Text style={styles.description}>Enter your phone number</Text>
      </View>

      <View style={styles.phoneInputContainer}>
        <PhoneInput
          value={value}
          onChangePhoneNumber={setValue}
          selectedCountry={selectedCountry}
          placeholder={'5013541631'}
          defaultCountry="TR"
          onChangeSelectedCountry={handleSelectedCountry}
          phoneInputStyles={{
            flagContainer: {
              borderTopLeftRadius: 7,
              borderBottomLeftRadius: 7,
              backgroundColor: Colors.WHITE,
              justifyContent: 'center',
            },
            flag: {
              color: '#FFF',
            },
            caret: {
              color: '#000',
              fontSize: Metrics.measure(14),
              fontFamily: 'Poppins-Light',
            },
            divider: {
              backgroundColor: '#F3F3F3',
            },
            callingCode: {
              color: Colors.BLACK,
              fontFamily: 'Poppins-Light',
              fontSize: Metrics.measure(14),
            },
            input: {
              fontFamily: 'Poppins-Light',
              fontSize: Metrics.measure(14),
            },
          }}
        />
      </View>
    </>
  );
};

export default Phone;
