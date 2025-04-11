import React, {useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  Platform,
  StatusBar,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

type RootStackParamList = {
  LoginScreen: undefined;
  ForgotPasswordScreen: undefined;
  VerifyOtpScreen:undefined;
};

const generateStars = (count: number) => {
  const stars = [];
  for (let i = 0; i < count; i++) {
    stars.push({
      left: Math.random() * Dimensions.get('window').width,
      top: Math.random() * Dimensions.get('window').height,
      size: Math.random() * 5 + 2,
      opacity: Math.random() * 0.8 + 0.2,
    });
  }
  return stars;
};

const ForgotPasswordScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const starsRef = useRef(generateStars(100));

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <LinearGradient
        colors={['#000000', '#1a237e', '#000000']}
        start={{x: 0.7, y: -1.1}}
        end={{x: 0, y: 0.5}}
        style={styles.gradient}>
        {starsRef.current.map((star, index) => (
          <View
            key={index}
            style={[
              styles.star,
              {
                left: star.left,
                top: star.top,
                width: star.size,
                height: star.size,
                opacity: star.opacity,
              },
            ]}
          />
        ))}

        <View style={styles.logoWrapper}>
          <TouchableOpacity onPress={() => navigation.replace('LoginScreen')}>
            <Image
              source={require('../assets/images/image.png')}
              style={styles.logo}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>

        <View style={styles.content}>
          <Text style={styles.title}>Forgot Password</Text>

          <Image
            source={require('../assets/images/image8.png')}
            style={styles.image}
          />

          <Text style={styles.subtitle}>
            Please enter your Email. We will send a code to
          </Text>
          <Text style={styles.subtitle1}>
            your Email to reset your password.
          </Text>

          <Text style={styles.label}>Email</Text>

          <View style={styles.inputWrapper}>
            <TextInput
              placeholder="Enter your email"
              placeholderTextColor="#999"
              style={styles.input}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('VerifyOtpScreen')}
            style={styles.loginButton}>
            <LinearGradient
              colors={['#F38835', '#C02D2B']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 1}}
              style={styles.loginButtonGradient}>
              <Text style={styles.loginText}>Get OTP</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  star: {
    position: 'absolute',
    backgroundColor: '#ffffff',
    borderRadius: 50,
    zIndex: 1,
  },
  logoWrapper: {
    position: 'absolute',
    top: Platform.OS === 'android' ? 45 : 40,
    left: 10,
    width: 45,
    height: 45,
    zIndex: 10,
  },
  logo: {
    width: '100%',
    height: '100%',
  },
  content: {
    zIndex: 2,
    alignItems: 'center',
    paddingHorizontal: 30,
    width: '100%',
  },
  title: {
    fontSize: 22,
    color: '#fff',
    fontWeight: '500',
    marginBottom: 50,
    lineHeight: 29,
  },
  image: {
    width: 180,
    height: 212,
    marginBottom: 30,
  },
  subtitle: {
    fontSize: 16,
    color: '#FFFFFFB5',
    textAlign: 'center',
    lineHeight: 21,
    fontWeight: '500',
    marginLeft: -10,
  },
  subtitle1: {
    fontSize: 15,
    color: '#FFFFFFB5',
    textAlign: 'center',
    lineHeight: 21,
    marginBottom: 20,
    fontWeight: '500',
  },
  label: {
    fontSize: 18,
    color: '#fff',
    alignSelf: 'flex-start',
    marginLeft: -10,
    marginBottom: 8,
    fontWeight: '500',
  },
  inputWrapper: {
    width: '110%',
    backgroundColor: '#ffffff20',
    borderColor: '#555',
    borderRadius: 8,
    borderWidth: 1,
    paddingHorizontal: 15,
    paddingVertical: 7,
    marginBottom: 210,
  },
  input: {
    fontSize: 16,
    color: '#fff',
  },
  getOtpText: {
    color: 'white',
  },
  loginButton: {
    marginTop: 20,
    alignSelf: 'center',
    width: '110%',
  },
  loginButtonGradient: {
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginText: {
    color: '#fff',
    fontSize: 20,
    height: 30,
    fontWeight: 'bold',
  },
});

export default ForgotPasswordScreen;
