import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import MaskedView from '@react-native-masked-view/masked-view';

const {width} = Dimensions.get('window');

type RootStackParamList = {
  PrepareWithAi: undefined;
  PrepareWithAi1: undefined;
};

const PrepareWithAi = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const GradientText = ({text}: {text: string}) => (
    <MaskedView
      maskElement={<Text style={styles.gradientTextMask}>{text}</Text>}>
      <LinearGradient
        colors={['#F16C0E', '#C2312C']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}>
        <Text style={[styles.gradientTextMask, {opacity: 0}]}>{text}</Text>
      </LinearGradient>
    </MaskedView>
  );

  return (
    <LinearGradient
      colors={['#000000', '#1a237e', '#000000']}
      start={{x: 0.4, y: -2}}
      end={{x: 3, y: 0.3}}
      style={styles.container}>
      <TouchableOpacity
        style={styles.leftIconContainer}
        activeOpacity={0.7}
        onPress={() => navigation.goBack()}>
        <Image
          source={require('../../assets/images/lefticon.png')}
          style={styles.leftIcon}
        />
      </TouchableOpacity>

      <LinearGradient
        colors={['#F16C0E', '#C2312C']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={styles.gradientBorder}>
        <View style={styles.imageWrapper}>
          <Image
            source={require('../../assets/images/volkaiimage.png')}
            style={styles.topRightImage}
          />
        </View>
      </LinearGradient>

      <View style={styles.titleContainer}>
        <Text style={styles.title}>Prepare with AI</Text>
      </View>

      <View style={styles.bodyContainer}>
        <Text style={styles.bodyText}>
          Select a specific topic and let our AI generate interview
        </Text>
        <Text style={styles.bodyText}>
          questions. Practice answering them in a simulated
        </Text>
        <Text style={styles.bodyText}>
          environment and receive personalized feedback to strengthen
        </Text>
        <Text style={styles.bodyText}>
          your foundation and boost your confidence.
        </Text>
        <Text style={styles.bodyText1}>Technical Skills</Text>
      </View>

      <View style={styles.cardBox}>
        <Image
          source={require('../../assets/images/image46.png')}
          style={styles.image}
        />
        <Text style={styles.boxText2}>JavaScript (Tech)</Text>
        <Text style={styles.boxText3}>tech</Text>
        <Image
          source={require('../../assets/images/image47.png')}
          style={styles.image1}
        />
      </View>

      <View style={styles.cardBox1}>
        <Image
          source={require('../../assets/images/image46.png')}
          style={styles.image}
        />
        <Text style={styles.boxText2}>JavaScript (Tech)</Text>
        <Text style={styles.boxText3}>tech</Text>
        <Image
          source={require('../../assets/images/image47.png')}
          style={styles.image1}
        />
      </View>

      <View style={styles.cardBox2}>
        <Image
          source={require('../../assets/images/image48.png')}
          style={styles.image2}
        />
        <View style={styles.gradientTextContainer}>
          <GradientText text="JavaScript (Tech)" />
          <GradientText text="tech" />
        </View>
        <Image
          source={require('../../assets/images/image47.png')}
          style={styles.image1}
        />
      </View>
      <View style={styles.cardBox1}>
        <Image
          source={require('../../assets/images/image46.png')}
          style={styles.image}
        />
        <Text style={styles.boxText2}>JavaScript (Tech)</Text>
        <Text style={styles.boxText3}>tech</Text>
        <Image
          source={require('../../assets/images/image47.png')}
          style={styles.image1}
        />
      </View>
      <Text style={styles.text}>Non-Technical Skills</Text>
      <View style={styles.cardBox1}>
        <Image
          source={require('../../assets/images/image46.png')}
          style={styles.image}
        />
        <Text style={styles.boxText2}>JavaScript (Tech)</Text>
        <Text style={styles.boxText3}>tech</Text>
        <Image
          source={require('../../assets/images/image47.png')}
          style={styles.image1}
        />
      </View>
      <View style={styles.cardBox1}>
        <Image
          source={require('../../assets/images/image46.png')}
          style={styles.image}
        />
        <Text style={styles.boxText2}>JavaScript (Tech)</Text>
        <Text style={styles.boxText3}>tech</Text>
        <Image
          source={require('../../assets/images/image47.png')}
          style={styles.image1}
        />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('PrepareWithAi1')}
        activeOpacity={0.8}>
        <LinearGradient
          colors={['#F38835', '#C02D2B']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          style={styles.cardBox3}>
          <Text style={styles.text1}>Start Now</Text>
        </LinearGradient>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  leftIconContainer: {
    position: 'absolute',
    top: 48,
    left: 10,
    zIndex: 1,
  },
  leftIcon: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
  gradientBorder: {
    position: 'absolute',
    top: 40,
    right: 20,
    padding: 2,
    borderRadius: 30,
  },
  imageWrapper: {
    backgroundColor: '#000',
    borderRadius: 25,
    overflow: 'hidden',
  },
  topRightImage: {
    width: 35,
    height: 35,
    borderRadius: 20,
  },
  titleContainer: {
    marginTop: 25,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#FFFFFF',
    lineHeight: 32,
    marginLeft: 30,
  },
  bodyContainer: {
    marginTop: 5,
    paddingHorizontal: 10,
  },
  bodyText: {
    fontSize: 12.5,
    color: '#CDCDCD',
    marginLeft: -18,
  },
  bodyText1: {
    fontSize: 19,
    fontWeight: '700',
    lineHeight: 26,
    color: '#FFFFFF',
    marginTop: 10,
    marginLeft: -20,
  },
  cardBox: {
    height: 80,
    width: '106%',
    backgroundColor: '#36383E',
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: '#F3883540',
    marginTop: 10,
    marginLeft: -12,
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 4,
  },
  cardBox1: {
    height: 80,
    width: '106%',
    backgroundColor: '#36383E',
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: '#F3883540',
    marginTop: 10,
    marginLeft: -12,
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 4,
  },
  cardBox2: {
    height: 80,
    width: '106%',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: '#F3883540',
    marginTop: 10,
    marginLeft: -12,
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 4,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  image: {
    height: 18,
    width: 18,
    marginLeft: 10,
    marginTop: 15,
  },
  image1: {
    height: 20,
    width: 35,
    position: 'absolute',
    right: 15,
    top: 30,
  },
  boxText2: {
    fontSize: 15,
    fontWeight: '500',
    lineHeight: 21,
    color: '#FFFFFF80',
    marginLeft: 40,
    marginTop: -20,
  },
  boxText3: {
    fontSize: 15,
    fontWeight: '500',
    lineHeight: 21,
    color: '#FFFFFF80',
    marginLeft: 40,
    marginTop: 5,
  },
  image2: {
    height: 20,
    width: 20,
    marginLeft: -5,
    marginTop: -25,
  },
  gradientTextMask: {
    fontSize: 15,
    fontWeight: '500',
    lineHeight: 21,
    color: 'black',
  },
  gradientTextContainer: {
    marginLeft: 10,
    marginTop: -10,
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 26,
    color: '#FFFFFF',
    marginTop: 20,
    marginLeft: -5,
  },
  cardBox3: {
    height: 55,
    width: '105%',
    borderRadius: 7,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    marginTop: 20,
    marginLeft: -8,
    shadowRadius: 4,
    elevation: 4,
  },
  text1: {
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 28,
    color: '#FFFFFF',
    marginLeft: '35%',
    marginTop: 12,
  },
});

export default PrepareWithAi;
