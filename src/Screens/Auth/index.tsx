import React, {useState} from 'react';
import {View, Text, SafeAreaView, Image, Alert} from 'react-native';
import Animated, {FadeInLeft, FadeOutRight} from 'react-native-reanimated';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MainStackParamList} from '../../Types/RootStackParamList';

import CustomButton from '../../Components/CustomButton';

import styles from './styles';

const AuthScreen = ({
  navigation,
}: NativeStackScreenProps<MainStackParamList, 'AuthPage'>) => {
  const [showSignIn, setShowSignIn] = useState<number>(1);

  const handlePress = () => {
    if (showSignIn === 3) {
      navigation.navigate('RegisterPage');
    } else {
      setShowSignIn(showSignIn + 1);
    }
  };

  const handleSkip = () => {
    navigation.navigate('RegisterPage');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.headerImage}
        source={require('../../Assets/Images/auth_header.png')}
      />
      <View style={styles.contentContainer}>
        {showSignIn === 1 ? (
          <Animated.View entering={FadeInLeft} exiting={FadeOutRight}>
            <Text style={styles.title}>Connect with Friends</Text>
            <Text style={styles.title}>and Family</Text>
            <Text style={styles.decription}>
              Connecting with Family and Friends provides a sense of belonging
              and security
            </Text>
          </Animated.View>
        ) : showSignIn === 2 ? (
          <Animated.View entering={FadeInLeft} exiting={FadeOutRight}>
            <Text style={styles.title}>Make new friends </Text>
            <Text style={styles.title}>with ease </Text>
            <Text style={styles.decription}>
              Allowing you to make new Friends is our Number one priority.....
            </Text>
          </Animated.View>
        ) : (
          <Animated.View entering={FadeInLeft} exiting={FadeOutRight}>
            <Text style={styles.title}>Express yourself to </Text>
            <Text style={styles.title}>the world</Text>
            <Text style={styles.decription}>
              Let your voice be heard on the internet through the OFOFO features
              on the App without restrictions
            </Text>
          </Animated.View>
        )}
      </View>
      <View style={styles.buttonsContainer}>
        <CustomButton
          onPress={handlePress}
          title={showSignIn !== 3 ? 'Next' : 'Continue'}
          style={styles.nextButton}
          textStyle={styles.nextButtonText}
        />
        {showSignIn !== 3 ? (
          <CustomButton
            onPress={handleSkip}
            title="Skip"
            style={styles.skipButton}
            textStyle={styles.skipButtonText}
          />
        ) : (
          <View style={styles.empty} />
        )}
        <View style={styles.row}>
          <Text style={styles.signText}>Already have an account? </Text>
          <CustomButton
            onPress={handleSkip}
            title="Sign In"
            style={styles.signButton}
            textStyle={styles.signButtonText}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AuthScreen;
