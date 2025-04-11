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
  SplashScreen1: undefined;
  SplashScreen3: undefined;
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

const SplashScreen2 = () => {
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
            navigation.replace('SplashScreen1');
          }}>
          <Image
            source={require('../assets/images/image.png')}
            style={styles.logo}
            resizeMode="contain"
          />
        </TouchableOpacity>

        <View style={styles.container1}>
          <Image
            source={require('../assets/images/image4.png')}
            style={styles.backgroundPattern}
            resizeMode="contain"
          />

          <View style={styles.image6Wrapper}>
            <Image
              source={require('../assets/images/image6.png')}
              style={styles.image6}
              resizeMode="contain"
            />
          </View>
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.heading}>AI Isused In Many Industries.</Text>
          <Text style={styles.subheading}>
            aI revolutionizes industries, enhancing
          </Text>
          <Text style={styles.subheading1}>
            efficiency, innovation, and intelligence
          </Text>
          <Text style={styles.subheading2}>across every sector worldwide</Text>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('SplashScreen3')}>
          <Image
            source={require('../assets/images/image3.png')}
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
  container1: {
    position: 'relative',
  },
  backgroundPattern: {
    marginBottom: '20%',
    height: 410,
    width: 400,
  },
  image6Wrapper: {
    position: 'absolute',
    top: '35%',
    left: 0,
    right: 0,
    alignItems: 'center',
    zIndex: 2,
  },
  image6: {
    width: 72,
    height: 72,
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
  textContainer: {
    paddingHorizontal: 25,
    alignItems: 'center',
    marginBottom: 50,
    zIndex: 2,
  },
  heading: {
    color: '#fff',
    fontSize: 31,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 12,
  },
  subheading: {
    color: '#ECECECE0',
    fontSize: 19,
    height: 20,
    width: '150%',
    textAlign: 'center',
    marginBottom: 5,
  },
  subheading1: {
    color: '#ECECECE0',
    fontSize: 19,
    height: 20,
    width: '150%',
    textAlign: 'center',
    marginBottom: 5,
  },
  subheading2: {
    color: '#ECECECE0',
    fontSize: 19,
    height: 20,
    width: '150%',
    textAlign: 'center',
    marginBottom: -10,
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

export default SplashScreen2;
