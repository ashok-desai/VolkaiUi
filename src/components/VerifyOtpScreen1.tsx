import React, {useRef, useState, useEffect, useCallback} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Platform,
  StatusBar,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

// Define the type for navigation stack
type RootStackParamList = {
  VerifyOtpScreen1: undefined;
  HomeScreen: undefined;
};

type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'VerifyOtpScreen1'
>;

// Function to generate stars for animated background
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

const VerifyOtpScreen1 = () => {
  const starsRef = useRef(generateStars(100));
  const navigation = useNavigation<NavigationProp>();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Clear passwords when coming back to this screen
  useFocusEffect(
    useCallback(() => {
      setPassword('');
      setConfirmPassword('');
      setShowPassword(false);
      setShowConfirmPassword(false);
    }, []),
  );

  // Navigate to HomeScreen if passwords match
  useEffect(() => {
    if (password && confirmPassword && password === confirmPassword) {
      const timeout = setTimeout(() => {
        navigation.navigate('HomeScreen');
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [password, confirmPassword, navigation]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <LinearGradient
        colors={['#000000', '#1a237e', '#000000']}
        start={{x: 0.7, y: -1.1}}
        end={{x: 0, y: 0.4}}
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

        <View style={styles.content}>
          <Text style={styles.text}>We have sent a verification code to</Text>
          <Text style={styles.text1}>ashok6874@gmail.com</Text>

          <Text style={styles.textLabel}>Password</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Enter Password"
              placeholderTextColor="#aaa"
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Image
                source={require('../assets/images/icon.png')}
                style={styles.eyeIcon}
              />
            </TouchableOpacity>
          </View>

          <Text style={styles.textLabel}>Confirm Password</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Enter Password"
              placeholderTextColor="#aaa"
              secureTextEntry={!showConfirmPassword}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />
            <TouchableOpacity
              onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
              <Image
                source={require('../assets/images/icon.png')}
                style={styles.eyeIcon}
              />
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
    alignItems: 'center',
  },
  star: {
    position: 'absolute',
    backgroundColor: '#ffffff',
    borderRadius: 50,
    zIndex: 1,
  },
  content: {
    zIndex: 2,
    width: '95%',
    marginTop: 230,
  },
  text: {
    color: '#919191',
    fontSize: 15,
    fontWeight: '500',
    marginBottom: 4,
    textAlign: 'center',
  },
  text1: {
    color: '#FFFFFF',
    fontSize: 29,
    fontWeight: 'bold',
    marginBottom: 25,
    textAlign: 'center',
  },
  textLabel: {
    color: '#FFFFFF',
    fontSize: 18,
    marginBottom: 8,
    marginTop: 12,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff20',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#aaa',
    paddingHorizontal: 15,
    paddingVertical: Platform.OS === 'ios' ? 12 : 8,
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  input: {
    color: '#fff',
    fontSize: 16,
    flex: 1,
  },
  eyeIcon: {
    width: 24,
    height: 24,
    tintColor: '#FFFFFF',
    marginLeft: 10,
  },
});

export default VerifyOtpScreen1;
