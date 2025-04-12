import React, {useRef, useState, useCallback, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

type RootStackParamList = {
  VerifyOtpScreen: undefined;
  VerifyOtpScreen1: undefined;
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

const VerifyOtpScreen = () => {
  const starsRef = useRef(generateStars(100));
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputs = useRef<(TextInput | null)[]>([]);

  const [timer, setTimer] = useState(17);
  const [isTimerActive, setIsTimerActive] = useState(true);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isTimerActive && timer > 0) {
      interval = setInterval(() => {
        setTimer(prev => prev - 1);
      }, 1000);
    } else if (timer === 0) {
      setIsTimerActive(false);
    }

    return () => clearInterval(interval);
  }, [isTimerActive, timer]);

  useFocusEffect(
    useCallback(() => {
      setOtp(['', '', '', '']);
      inputs.current.forEach(input => input?.clear());
      setTimer(17);
      setIsTimerActive(true);
    }, []),
  );

  const handleChange = (text: string, index: number) => {
    if (/^\d$/.test(text) || text === '') {
      const updatedOtp = [...otp];
      updatedOtp[index] = text;
      setOtp(updatedOtp);

      if (text && index < 3) {
        inputs.current[index + 1]?.focus();
      }

      if (updatedOtp.every(d => d !== '') && updatedOtp.join('').length === 4) {
        navigation.navigate('VerifyOtpScreen1');
      }
    }
  };

  const formatTimer = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' + secs : secs}`;
  };

  const handleResend = () => {
    setTimer(17);
    setIsTimerActive(true);
    console.log('OTP resent');
  };

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

        <View style={styles.content}>
          <Image
            source={require('../../assets/images/backgroundimage.png')}
            style={styles.image}
          />
          <Text style={styles.text}>We have sent a verification code to</Text>
          <Text style={styles.text1}>ashok6874@gmail.com</Text>

          <View style={styles.otpContainer}>
            {otp.map((digit, index) => (
              <TextInput
                key={index}
                ref={ref => {
                  inputs.current[index] = ref;
                }}
                style={styles.otpInput}
                keyboardType="numeric"
                maxLength={1}
                value={digit}
                onChangeText={text => handleChange(text, index)}
                autoFocus={index === 0}
              />
            ))}
          </View>

          <TouchableOpacity
            style={styles.resendRow}
            onPress={handleResend}
            disabled={isTimerActive}>
            <Text style={styles.resendText}>Resend OTP in</Text>
            <Text style={styles.timerText}>
              {' '}
              {isTimerActive ? formatTimer(timer) : '0:00'}
            </Text>
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
  image:{
    marginBottom:30
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
  content: {
    zIndex: 2,
    alignItems: 'center',
  },
  text: {
    color: '#919191',
    fontSize: 15,
    lineHeight: 21,
    fontWeight: '500',
  },
  text1: {
    color: '#FFFFFF',
    fontSize: 26,
    lineHeight: 36,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 15,
  },
  otpInput: {
    width: 65,
    height: 65,
    backgroundColor: '#ffffff20',
    borderColor: '#aaa',
    borderWidth: 1,
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 24,
    color: '#fff',
    marginHorizontal: 5,
  },
  resendRow: {
    flexDirection: 'row',
    marginTop: 10,
  },
  resendText: {
    color: '#919191',
    fontSize: 14,
    fontWeight: '500',
  },
  timerText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom:200
  },
});

export default VerifyOtpScreen;
