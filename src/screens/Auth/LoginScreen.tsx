import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  StyleSheet,
  Image,
  Dimensions,
  StatusBar,
  Platform,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import type {StackNavigationProp} from '@react-navigation/stack';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

type RootStackParamList = {
  SplashScreen3: undefined;
  SignUpScreen: undefined;
  ForgotPasswordScreen: undefined;
  Main: undefined;
};

const generateStars = (count: number) => {
  const stars = [];
  for (let i = 0; i < count; i++) {
    stars.push({
      left: Math.random() * Dimensions.get('window').width,
      top: Math.random() * Dimensions.get('window').height,
      size: Math.random() * 5 + 1.5,
      opacity: Math.random() * 0.8 + 0.2,
    });
  }
  return stars;
};

export default function LoginScreen() {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const starsRef = useRef(generateStars(100));

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Validation Error', 'Please enter both Email and Password.');
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post(
        'https://api.volkai.io/api/auth/login',
        { email, password },
        { withCredentials: true }
      );

      const setCookieHeader = response.headers['set-cookie'];
      console.log('Raw Set-Cookie Header:', setCookieHeader);

      let accessToken = '';
      let refreshToken = '';

      if (setCookieHeader && Array.isArray(setCookieHeader)) {
        setCookieHeader.forEach(cookie => {
          if (cookie.includes('accessToken=')) {
            accessToken = cookie.split('accessToken=')[1].split(';')[0];
          }
          if (cookie.includes('refreshToken=')) {
            refreshToken = cookie.split('refreshToken=')[1].split(';')[0];
          }
        });
      }

      console.log('Extracted accessToken:', accessToken);
      console.log('Extracted refreshToken:', refreshToken);

      if (!accessToken || !refreshToken) {
        throw new Error('Tokens missing from login response.');
      }

      await AsyncStorage.setItem('accessToken', accessToken);
      await AsyncStorage.setItem('refreshToken', refreshToken);
      await AsyncStorage.setItem('token', accessToken); 
      Alert.alert('Success', 'Logged in successfully!');
      navigation.replace('Main');
    } catch (err: any) {
      let message = 'Login failed. Please enter valid email and password.';
      console.error('Login Error:', err.response?.data || err.message);
      if (err.response?.data?.message) {
        message = err.response.data.message;
      }
      Alert.alert('Login Failed', message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <LinearGradient
        colors={['#000000', '#1a237e', '#000000']}
        start={{x: 0.7, y: -1}}
        end={{x: 0, y: 0.6}}
        style={styles.gradient}>
        {starsRef.current.map((star, i) => (
          <View
            key={i}
            style={{
              position: 'absolute',
              backgroundColor: '#fff',
              borderRadius: 50,
              left: star.left,
              top: star.top,
              width: star.size,
              height: star.size,
              opacity: star.opacity,
            }}
          />
        ))}

        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={{flex: 1, width: '100%'}}>
          <ScrollView
            contentContainerStyle={styles.scrollContent}
            keyboardShouldPersistTaps="handled">
            <TouchableOpacity
              style={styles.logoWrapper}
              onPress={() => navigation.replace('SplashScreen3')}>
              <Image
                source={require('../../assets/images/image.png')}
                style={styles.logo}
              />
            </TouchableOpacity>

            <Image
              source={require('../../assets/images/image7.png')}
              style={styles.image}
            />
            <View style={styles.textBlock}>
              <Text style={styles.heading}>Login</Text>
              <Text style={styles.subText}>
                Access your account to continue
              </Text>
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Email</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter your email"
                placeholderTextColor="#aaa"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />

              <Text style={styles.label}>Password</Text>
              <View style={styles.inputWithIcon}>
                <TextInput
                  style={styles.inputText}
                  placeholder="Enter password"
                  placeholderTextColor="#aaa"
                  secureTextEntry={!showPassword}
                  value={password}
                  onChangeText={setPassword}
                  autoCapitalize="none"
                />
                <TouchableOpacity
                  onPress={() => setShowPassword(!showPassword)}>
                  <Image
                    source={require('../../assets/images/icon.png')}
                    style={styles.icon}
                  />
                </TouchableOpacity>
              </View>

              <TouchableOpacity
                onPress={() => navigation.navigate('ForgotPasswordScreen')}
                style={styles.forgetWrapper}>
                <Text style={styles.forgetText}>Forgot Password?</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={handleLogin}
                style={styles.loginButton}
                disabled={loading}>
                <LinearGradient
                  colors={['#F38835', '#C02D2B']}
                  style={styles.loginGradient}>
                  {loading ? (
                    <ActivityIndicator color="#fff" />
                  ) : (
                    <Text style={styles.loginText}>Login</Text>
                  )}
                </LinearGradient>
              </TouchableOpacity>

              <View style={styles.signupRow}>
                <Text style={styles.text}>Don't have an account?</Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate('SignUpScreen')}>
                  <Text style={styles.signUpText}> Sign Up</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  gradient: {
    flex: 1,
    alignItems: 'center',
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
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
    marginTop: 15,
    marginLeft: 10,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginTop: 50,
  },
  textBlock: {
    marginTop: 20,
    alignItems: 'flex-start',
    width: '85%',
  },
  heading: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    marginLeft: -10,
  },
  subText: {
    color: '#ccc',
    fontSize: 14,
    marginTop: 5,
    marginLeft: -10,
  },
  inputContainer: {
    width: '85%',
    marginTop: 30,
  },
  label: {
    color: '#fff',
    fontSize: 18,
    marginTop: 15,
    marginLeft: -8,
  },
  input: {
    width: '108%',
    height: 55,
    borderColor: '#555',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 12,
    color: '#fff',
    backgroundColor: '#1c1c1e',
    marginTop: 5,
    marginLeft: -15,
  },
  inputWithIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1c1c1e',
    borderColor: '#555',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 12,
    marginTop: 5,
    width: '108%',
    height: 55,
    marginLeft: -15,
  },
  inputText: {
    flex: 1,
    color: '#fff',
    fontSize: 16,
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: '#ccc',
  },
  forgetWrapper: {
    alignSelf: 'flex-end',
    marginTop: 10,
  },
  forgetText: {
    color: '#8B8B8B',
    fontSize: 14,
  },
  loginButton: {
    marginTop: 20,
    width: '108%',
    marginLeft: -15,
  },
  loginGradient: {
    paddingVertical: 16,
    borderRadius: 10,
    alignItems: 'center',
  },
  loginText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signupRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  text: {
    color: '#8B8B8B',
  },
  signUpText: {
    color: '#F38835',
    fontWeight: '600',
  },
});
