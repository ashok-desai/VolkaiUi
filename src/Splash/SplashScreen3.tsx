import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  StatusBar,
  Dimensions,
  Text,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

type RootStackParamList = {
  SplashScreen2: undefined;
  LoginScreen: undefined;
};

const generateStars = (count: number) => {
  const stars = [];
  for (let i = 0; i < count; i++) {
    stars.push({
      left: Math.random() * Dimensions.get('window').width,
      top: Math.random() * Dimensions.get('window').height,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.8 + 0.2,
    });
  }
  return stars;
};

const SplashScreen3 = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const stars = generateStars(100);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <LinearGradient
        colors={['#000000', '#1a237e', '#000000']}
        start={{x: 0.4, y: -5}}
        end={{x: 1, y: 0.5}}
        style={styles.gradient}>
        {stars.map((star, index) => (
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

        <TouchableOpacity
          style={styles.logoWrapper}
          onPress={() => navigation.replace('SplashScreen2')}>
          <Image
            source={require('../assets/images/image.png')}
            style={styles.logo}
            resizeMode="contain"
          />
        </TouchableOpacity>

        <View style={styles.container1}>
          <Image
            source={require('../assets/images/image5.png')}
            style={styles.backgroundPattern}
            resizeMode="contain"
          />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.heading}>AI Makes Life Smarter And Easier.</Text>
          <Text style={styles.subheading}>
            aI enhances life, making everyday tasks
          </Text>
          <Text style={styles.subheading1}>
            smarter, faster, and more effortless than
          </Text>
          <Text style={styles.subheading2}>ever before</Text>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate('LoginScreen')}
          style={styles.buttonWrapper}>
          <LinearGradient
            colors={['#F38735', '#C2312C']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            style={styles.button}>
            <Text style={styles.text}>Get started</Text>
          </LinearGradient>
        </TouchableOpacity>
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
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 60,
  },
  star: {
    position: 'absolute',
    backgroundColor: '#ffffff',
    borderRadius: 50,
    zIndex: 1,
  },
  logoWrapper: {
    position: 'absolute',
    top: 50,
    left: 20,
    width: 45,
    height: 45,
    zIndex: 2,
  },
  logo: {
    width: '100%',
    height: '100%',
  },
  container1: {
    position: 'relative',
    alignItems: 'center',
    zIndex: 2,
  },
  backgroundPattern: {
    width: 400,
    height: 400,
    marginBottom: '10%',
  },
  textContainer: {
    paddingHorizontal: 25,
    alignItems: 'center',
    marginBottom: 50,
    zIndex: 2,
  },
  heading: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 12,
  },
  subheading: {
    color: '#ECECECE0',
    fontSize: 18,
    height: 20,
    width: '150%',
    textAlign: 'center',
    marginBottom: 5,
  },
  subheading1: {
    color: '#ECECECE0',
    fontSize: 18,
    height: 20,
    width: '150%',
    textAlign: 'center',
    marginBottom: 5,
  },
  subheading2: {
    color: '#ECECECE0',
    fontSize: 18,
    height: 20,
    width: '150%',
    textAlign: 'center',
  },
  buttonWrapper: {
    width: '90%',
    borderRadius: 10,
    overflow: 'hidden',
    height: 60,
    zIndex: 2,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 20,
    lineHeight: 33,
    fontWeight: 'bold',
  },
});

export default SplashScreen3;
