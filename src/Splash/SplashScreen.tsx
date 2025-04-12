import React, {useEffect} from 'react';
import {StyleSheet, View, Image, StatusBar, Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

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

const SplashScreen = ({navigation}: any) => {
  const stars = generateStars(100);

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('SplashScreen1');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <LinearGradient
        colors={['#000000', '#1a237e', '#000000']}
        start={{x: 0.3, y: -1}}
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

        <Image
          source={require('../assets/images/volkai.png')}
          style={styles.logo}
          resizeMode="contain"
        />
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
  },
  logo: {
    width: 360,
    height: 360,
  },
});

export default SplashScreen;
