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
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

type RootStackParamList = {
  SplashScreen3: undefined;
  SignUpScreen: undefined;
  LoginScreen: undefined;
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

const SignUpScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const starsRef = useRef(generateStars(100));

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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

        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={{flex: 1}}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 0}>
          <ScrollView
            contentContainerStyle={styles.scrollContent}
            keyboardShouldPersistTaps="handled">
            {/* ⬇️ Now logo scrolls along */}
            <View style={styles.logoWrapperScroll}>
              <TouchableOpacity
                onPress={() => navigation.replace('SplashScreen3')}>
                <Image
                  source={require('../../assets/images/image.png')}
                  style={styles.logo}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>

            <View style={styles.content}>
              <Image
                source={require('../../assets/images/image7.png')}
                style={styles.image}
              />
              <View style={styles.textBlock}>
                <Text style={styles.heading}>Sign Up</Text>
                <Text style={styles.subText}>
                  Enter your personal information
                </Text>
              </View>
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Username</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter your username"
                placeholderTextColor="#aaa"
              />

              <Text style={styles.label}>Email</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter your email"
                placeholderTextColor="#aaa"
                keyboardType="email-address"
              />

              <Text style={styles.label}>Password</Text>
              <View style={styles.inputWithIcon}>
                <TextInput
                  style={styles.inputText}
                  placeholder="Enter Password"
                  placeholderTextColor="#aaa"
                  secureTextEntry={!showPassword}
                />
                <TouchableOpacity
                  onPress={() => setShowPassword(!showPassword)}>
                  <Image
                    source={require('../../assets/images/icon.png')}
                    style={styles.icon}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              </View>

              <Text style={styles.label}>Confirm Password</Text>
              <View style={styles.inputWithIcon}>
                <TextInput
                  style={styles.inputText}
                  placeholder="Enter Password"
                  placeholderTextColor="#aaa"
                  secureTextEntry={!showConfirmPassword}
                />
                <TouchableOpacity
                  onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
                  <Image
                    source={require('../../assets/images/icon.png')}
                    style={styles.icon}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              </View>

              <TouchableOpacity
                style={styles.registerButton}
                onPress={() => navigation.navigate('LoginScreen')}>
                <LinearGradient
                  colors={['#F38835', '#C02D2B']}
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                  style={styles.registerGradient}>
                  <Text style={styles.registerText}>Register</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
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
  },
  star: {
    position: 'absolute',
    backgroundColor: '#ffffff',
    borderRadius: 50,
    zIndex: 1,
  },
  logoWrapperScroll: {
    alignSelf: 'flex-start',
    marginTop: Platform.OS === 'android' ? -10 : 50,
    marginLeft: 10,
    width: 45,
    height: 45,
    zIndex: 10,
  },
  logo: {
    width: '100%',
    height: '100%',
    marginTop:35,
    marginLeft:-10
  },
  scrollContent: {
    paddingBottom: 10,
    paddingHorizontal: 15,
  },
  content: {
    alignItems: 'center',
    zIndex: 2,
    marginTop: 60,
  },
  image: {
    width: 103,
    height: 103,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  textBlock: {
    marginTop: -10,
    width: '100%',
  },
  heading: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
  },
  subText: {
    color: '#ccc',
    fontSize: 14,
    marginTop: 5,
  },
  inputContainer: {
    marginTop: 10,
    zIndex: 2,
  },
  label: {
    color: 'white',
    fontSize: 20,
    fontWeight: '400',
    marginTop: 15,
    marginBottom: 8,
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
  },
  registerButton: {
    marginTop: 25,
    width: '100%',
    borderRadius: 10,
    overflow: 'hidden',
  },
  registerGradient: {
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 10,
  },
  registerText: {
    color: 'white',
    fontSize: 20,
    height: 35,
    fontWeight: 'bold',
  },
});

export default SignUpScreen;
