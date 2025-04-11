import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  StatusBar,
  Platform,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

type RootStackParamList = {
  SplashScreen3: undefined;
  SignUpScreen: undefined;
  ForgotPasswordScreen: undefined;
  HomeScreen: undefined;
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

const LoginScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const starsRef = useRef(generateStars(100));
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />

      <LinearGradient
        colors={['#000000', '#1a237e', '#000000']}
        start={{x: 0.7, y: -1}}
        end={{x: 0, y: 0.6}}
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
          <TouchableOpacity
            style={styles.logoWrapper}
            onPress={() => navigation.replace('SignUpScreen')}>
            <Image
              source={require('../assets/images/image.png')}
              style={styles.logo}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>

        <View style={styles.content}>
          <Image
            source={require('../assets/images/image7.png')}
            style={styles.image}
          />
          <View style={styles.textBlock}>
            <Text style={styles.heading}>Login</Text>
            <Text style={styles.subText}>Login To Continue Using The App</Text>
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your Email"
            placeholderTextColor="#aaa"
          />

          <Text style={styles.label1}>Password</Text>
          <View style={styles.inputWithIcon}>
            <TextInput
              style={styles.inputText}
              placeholder="Enter Password"
              placeholderTextColor="#aaa"
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Image
                source={require('../assets/images/icon.png')}
                style={styles.icon}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate('ForgotPasswordScreen')}
            style={styles.forgetWrapper}>
            <Text style={styles.forgetPasswordText}>Forget Password?</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('HomeScreen')}
            style={styles.loginButton}>
            <LinearGradient
              colors={['#F38835', '#C02D2B']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 1}}
              style={styles.loginButtonGradient}>
              <Text style={styles.loginText}>Login</Text>
            </LinearGradient>
          </TouchableOpacity>

          <View style={styles.signupRow}>
            <Text style={styles.text}>Don’t have an account?</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('SignUpScreen')}>
              <Text style={styles.signUpText}> Sign Up</Text>
            </TouchableOpacity>
          </View>
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
    top: Platform.OS === 'android' ? 25 : 40,
    left: 5,
    width: 45,
    height: 45,
    zIndex: 10,
  },
  logo: {
    width: '100%',
    height: '100%',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
    marginTop: -10,
  },
  image: {
    width: 103,
    height: 103,
    resizeMode: 'contain',
    marginTop: 140,
  },
  textBlock: {
    marginTop: 30,
    width: '85%',
  },
  heading: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    marginLeft: -165,
  },
  subText: {
    color: '#ccc',
    fontSize: 14,
    marginTop: 5,
    marginLeft: -165,
  },
  inputContainer: {
    marginBottom: 170,
    width: '100%',
    paddingHorizontal: 10,
    zIndex: 2,
  },
  label: {
    color: 'white',
    fontSize: 20,
    fontWeight: '400',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 60,
    borderColor: '#555',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    color: '#fff',
    backgroundColor: '#1c1c1e',
    marginTop: -10,
  },
  label1: {
    color: 'white',
    fontSize: 20,
    fontWeight: '400',
    marginTop: 15,
    marginBottom: 8,
  },
  inputWithIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#555',
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: '#1c1c1e',
    paddingHorizontal: 10,
    height: 60,
  },
  inputText: {
    flex: 1,
    color: '#fff',
    fontSize: 16,
  },
  icon: {
    width: 30,
    height: 30,
    tintColor: 'white',
    marginLeft: 10,
    marginTop: 7,
  },
  forgetWrapper: {
    alignSelf: 'flex-end',
    marginTop: 10,
    paddingRight: 5,
  },
  forgetPasswordText: {
    color: '#8B8B8B',
    fontSize: 14,
  },
  loginButton: {
    marginTop: 20,
    alignSelf: 'center',
    width: '100%',
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
  signupRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
  },
  text: {
    color: '#8B8B8B',
    fontSize: 14,
  },
  signUpText: {
    color: '#F38835',
    fontWeight: '600',
    fontSize: 14,
  },
});

export default LoginScreen;
