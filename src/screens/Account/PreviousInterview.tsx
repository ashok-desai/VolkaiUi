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

const {width} = Dimensions.get('window');

type RootStackParamList = {
  PreviousInterview: undefined;
};

const PreviousInterview = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

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
        <Text style={styles.title}>Previous Interview Report</Text>
      </View>
      <View style={styles.bodyContainer}>
        <Text style={styles.bodyText}>
          Access detailed reports from past interview sessions,
        </Text>
        <Text style={styles.bodyText}>
          including feedback, strengths, and areas for improvement.
        </Text>
      </View>
      <View style={styles.cardBox}>
        <LinearGradient
          colors={['#F38835', '#C02D2B']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          style={styles.cardBox1}>
          <Image
            source={require('../../assets/images/image44.png')}
            style={styles.image}
          />
        </LinearGradient>
        <Text style={styles.boxText}>Assistant: Could you provide a...</Text>
        <Text style={styles.boxText1}>You: User: My name is Aru...</Text>
        <Text style={styles.boxText2}>Mar 17 , 2025</Text>
      </View>
      <LinearGradient
        colors={['#F38835', '#C02D2B']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={styles.cardBox2}>
        <View style={styles.cardBox3}>
          <Image
            source={require('../../assets/images/image45.png')}
            style={styles.image1}
          />
        </View>
        <Text style={styles.boxText3}>Assistant: Could you provide a...</Text>
        <Text style={styles.boxText4}>You: User: My name is Aru...</Text>
        <Text style={styles.boxText5}>Mar 16 , 2025</Text>
      </LinearGradient>
      <View style={styles.cardBox4}>
        <LinearGradient
          colors={['#F38835', '#C02D2B']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          style={styles.cardBox1}>
          <Image
            source={require('../../assets/images/image44.png')}
            style={styles.image}
          />
        </LinearGradient>
        <Text style={styles.boxText}>Assistant: Could you provide a...</Text>
        <Text style={styles.boxText1}>You: User: My name is Aru...</Text>
        <Text style={styles.boxText2}>Mar 15 , 2025</Text>
      </View>
      <View style={styles.cardBox4}>
        <LinearGradient
          colors={['#F38835', '#C02D2B']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          style={styles.cardBox1}>
          <Image
            source={require('../../assets/images/image44.png')}
            style={styles.image}
          />
        </LinearGradient>
        <Text style={styles.boxText}>Assistant: Could you provide a...</Text>
        <Text style={styles.boxText1}>You: User: My name is Aru...</Text>
        <Text style={styles.boxText2}>Mar 14 , 2025</Text>
      </View>
      <View style={styles.cardBox4}>
        <LinearGradient
          colors={['#F38835', '#C02D2B']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          style={styles.cardBox1}>
          <Image
            source={require('../../assets/images/image44.png')}
            style={styles.image}
          />
        </LinearGradient>
        <Text style={styles.boxText}>Assistant: Could you provide a...</Text>
        <Text style={styles.boxText1}>You: User: My name is Aru...</Text>
        <Text style={styles.boxText2}>Mar 13 , 2025</Text>
      </View>
      <View style={styles.cardBox4}>
        <LinearGradient
          colors={['#F38835', '#C02D2B']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          style={styles.cardBox1}>
          <Image
            source={require('../../assets/images/image44.png')}
            style={styles.image}
          />
        </LinearGradient>
        <Text style={styles.boxText}>Assistant: Could you provide a...</Text>
        <Text style={styles.boxText1}>You: User: My name is Aru...</Text>
        <Text style={styles.boxText2}>Mar 12 , 2025</Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: -10,
  },
  leftIconContainer: {
    position: 'absolute',
    top: 74,
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
    top: 60,
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
    marginTop: 50,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#FFFFFF',
    lineHeight: 32,
    marginLeft: 18,
  },
  bodyContainer: {
    marginTop: 10,
    paddingHorizontal: 10,
  },
  bodyText: {
    fontSize: 13,
    color: '#CDCDCD',
    marginLeft: -15,
  },
  cardBox: {
    height: 100,
    width: '106%',
    backgroundColor: '#36383E',
    borderRadius: 10,
    shadowColor: '#000',
    marginTop: 20,
    marginLeft: -12,
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 4,
  },
  cardBox1: {
    height: 85,
    width: '21%',
    borderRadius: 7,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    marginTop: 7,
    marginLeft: 10,
    shadowRadius: 4,
    elevation: 4,
  },
  cardBox4: {
    height: 100,
    width: '106%',
    backgroundColor: '#36383E',
    borderRadius: 10,
    shadowColor: '#000',
    marginTop: 15,
    marginLeft: -12,
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 4,
  },
  image: {
    height: 60,
    width: 60,
    marginTop: 10,
    marginLeft: 8,
  },
  boxText: {
    fontSize: 17,
    fontWeight: '700',
    lineHeight: 26,
    color: '#FFFFFF',
    marginLeft: 115,
    marginTop: -80,
  },
  boxText1: {
    fontSize: 17,
    fontWeight: '700',
    lineHeight: 26,
    color: '#FFFFFF',
    marginLeft: 115,
  },
  boxText2: {
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 26,
    color: '#E2E2E2E3',
    marginLeft: 115,
  },
  cardBox2: {
    height: 100,
    width: '106%',
    backgroundColor: '#36383E',
    borderRadius: 10,
    shadowColor: '#000',
    marginTop: 15,
    marginLeft: -12,
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 4,
  },
  cardBox3: {
    height: 85,
    width: '21%',
    borderRadius: 7,
    backgroundColor: '#FFFFFF',
    shadowOpacity: 0.15,
    marginTop: 7,
    marginLeft: 10,
    shadowRadius: 4,
    elevation: 4,
  },
  image1: {
    height: 70,
    width: 70,
    marginTop: 8,
    marginLeft: 4,
  },
  boxText3: {
    fontSize: 17,
    fontWeight: '700',
    lineHeight: 26,
    color: '#FFFFFF',
    marginLeft: 115,
    marginTop: -80,
  },
  boxText4: {
    fontSize: 17,
    fontWeight: '700',
    lineHeight: 26,
    color: '#FFFFFF',
    marginLeft: 115,
  },
  boxText5: {
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 26,
    color: '#E2E2E2E3',
    marginLeft: 115,
  },
});

export default PreviousInterview;
