import React, {useState} from 'react';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MainStackParamList} from '../../Types/RootStackParamList';
import {isValidPhoneNumber} from 'react-native-international-phone-number';
import Toast from 'react-native-toast-message';
import Icon from 'react-native-vector-icons/FontAwesome';

import CustomButton from '../../Components/CustomButton';
import Phone from './Components/phone';
import Code from './Components/code';

import styles from './styles';
import Colors from '../../Assets/Utils/Colors';
import Metrics from '../../Assets/Utils/Metrics';

const ReigsterScreen = ({
  navigation,
}: NativeStackScreenProps<MainStackParamList, 'RegisterPage'>) => {
  const [stage, setStage] = useState<boolean>(true);
  const [value, setValue] = useState('');
  const [code, setCode] = useState('');
  const [selectedCountry, setSelectedCountry] = useState<any>(null);

  const handleLogin = () => {
    if (stage === false) {
      navigation.navigate('HomePage');
    } else {
      isValidPhoneNumber(value, selectedCountry)
        ? setStage(false)
        : Toast.show({
            type: 'error',
            text1: 'Invalid Number',
            text2: 'Please Write Valid Number 👋',
          });
    }
  };

  const handlePressBack = () => {
    navigation.goBack();
  };

  const handleSelectedCountry = (country: any) => {
    setSelectedCountry(country);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.backContainer} onPress={handlePressBack}>
        <Icon
          name="arrow-left"
          color={Colors.BLACK}
          size={Metrics.measure(18)}
        />
      </TouchableOpacity>

      {stage === true ? (
        <Phone
          value={value}
          setValue={setValue}
          selectedCountry={selectedCountry}
          handleSelectedCountry={handleSelectedCountry}
        />
      ) : (
        <Code setValue={setCode} />
      )}

      <View style={styles.buttonsContainer}>
        <CustomButton
          onPress={handleLogin}
          title="Next"
          style={styles.nextButton}
          textStyle={styles.nextButtonText}
        />
        <View style={styles.row}>
          <Text style={styles.signText}>Already have an account? </Text>
          <CustomButton
            onPress={handleLogin}
            title="Sign In"
            style={styles.signButton}
            textStyle={styles.signButtonText}
          />
        </View>
      </View>
      <Toast />
    </SafeAreaView>
  );
};

export default ReigsterScreen;
