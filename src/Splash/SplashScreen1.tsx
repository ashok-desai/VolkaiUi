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
  Splash1: undefined;
  SplashScreen: undefined;
  SplashScreen2: undefined;
};

const generateStars = (count: number) => {
  const stars = [];
  for (let i = 0; i < count; i++) {
    stars.push({
      left: Math.random() * Dimensions.get('window').width,
      top: Math.random() * Dimensions.get('window').height,
      size: Math.random() * 2 + 2,
      opacity: Math.random() * 0.8 + 0.2,
    });
  }
  return stars;
};

const SplashScreen1 = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const stars = generateStars(100);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <LinearGradient
        colors={['#000000', '#1a237e', '#000000']}
        start={{x: 0.3, y: -1}}
        end={{x: 1, y: 0.6}}
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
          onPress={() => {
            navigation.replace('SplashScreen');
          }}>
          <Image
            source={require('../assets/images/image.png')}
            style={styles.logo}
            resizeMode="contain"
          />
        </TouchableOpacity>

        {/* This view contains image1 and backgroundimage side-by-side */}
        <View style={styles.sideImagesWrapper}>
          <Image
            source={require('../assets/images/image1.png')}
            style={styles.image1}
            resizeMode="contain"
          />
          <Image
            source={require('../assets/images/image1backgroundimage.png')}
            style={styles.backgroundImage}
            resizeMode="contain"
          />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.heading}>
            AI Helps Machines Think Like Humans.
          </Text>
          <Text style={styles.subheading}>
            Empowering machines with human-like
          </Text>
          <Text style={styles.subheading1}>
            intelligence for smarter,faster, and more
          </Text>
          <Text style={styles.subheading2}>intuitive decisions every day.</Text>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('SplashScreen2')}>
          <Image
            source={require('../assets/images/image2.png')}
            style={styles.arrow}
          />
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
  sideImagesWrapper: {
    flexDirection: 'row',
    marginBottom: '45%',
    marginRight: '30%',
    zIndex: 2,
  },
  image1: {
    width: 220,
    height: 220,
    marginLeft: 270,
  },
  backgroundImage: {
    width: '190%',
    height: '190%',
    marginLeft: -200,
    marginTop: -100,
    tintColor: '#1468CF',
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
    marginBottom: 5,
  },
  button: {
    width: 55,
    height: 55,
    borderRadius: 30,
    backgroundColor: '#ff5500',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    zIndex: 2,
  },
  arrow: {
    position: 'absolute',
    color: '#fff',
    fontSize: 28,
  },
});

export default SplashScreen1;
