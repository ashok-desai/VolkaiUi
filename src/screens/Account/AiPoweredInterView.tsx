import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

type RootStackParamList = {
  AiPoweredInterView: undefined;
  StartInterview: undefined;
};

const {width} = Dimensions.get('window');

const AiPoweredInterView = () => {
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

      <View style={styles.textContainer}>
        <Text style={styles.text}>AI-Powered Interview</Text>
        <Text style={styles.text1}>
          Just provide the job description, and our AI will conduct
        </Text>
        <Text style={styles.text2}>
          a realistic interview tailored to the role. Answer dynamic
        </Text>
        <Text style={styles.text3}>
          questions, experience an interactive interview session, and
        </Text>
        <Text style={styles.text4}>
          receive a detailed performance analysis afterward.
        </Text>
      </View>

      <View style={styles.container1}>
        <LinearGradient
          colors={['#000000', '#1a237e', '#000000']}
          start={{x: 0.4, y: -4}}
          end={{x: 4, y: 0.2}}
          style={styles.innerBox}></LinearGradient>

        <View style={styles.textContainer1}>
          <Text style={styles.innerBoxTitle}>
            Welcome to AI Interview Assistant
          </Text>
          <Text style={styles.innerBoxTitle1}>Enter Job Description</Text>

          <View style={styles.descriptionBox}>
            <Text style={styles.descriptionBoxText}>
              Enter job description here.....
            </Text>
          </View>

          <View style={styles.descriptionBox1}>
            <View style={styles.descriptionBox2}>
              <Text style={styles.descriptionBox1Text}>CEO</Text>
            </View>
            <View style={styles.descriptionBox3}>
              <Text style={styles.descriptionBox1Text1}>HR</Text>
            </View>
            <View style={styles.descriptionBox4}>
              <Text style={styles.descriptionBox1Tex2}>Developer</Text>
            </View>
            <View style={styles.descriptionBox5}>
              <Image
                source={require('../../assets/images/image27.png')}
                style={styles.imageWrapper1}
              />
            </View>
          </View>

          <TouchableOpacity
            style={styles.startButtonWrapper}
            onPress={() => navigation.navigate('StartInterview')}>
            <LinearGradient
              colors={['#F38835', '#C02D2B']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 1}}
              style={styles.startButton}>
              <Text style={styles.startButtonText}>Start Interview</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
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
  leftIconContainer: {
    position: 'absolute',
    top: 68,
    left: 15,
    zIndex: 1,
  },
  leftIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  container1: {
    flex: 1,
    marginBottom: '-44%',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 30,
    marginBottom: '190%',
  },
  text: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#FFFFFF',
    lineHeight: 32,
    marginTop: 45,
    marginBottom: 15,
  },
  text1: {
    fontSize: 13,
    color: '#CDCDCD',
    lineHeight: 19,
    marginLeft: -30,
  },
  text2: {
    fontSize: 13,
    color: '#CDCDCD',
    lineHeight: 19,
    marginLeft: -30,
  },
  text3: {
    fontSize: 13,
    color: '#CDCDCD',
    lineHeight: 19,
    marginLeft: -30,
  },
  text4: {
    fontSize: 13,
    color: '#CDCDCD',
    lineHeight: 19,
    marginLeft: -30,
  },
  textContainer1: {
    flex: 1,
  },
  innerBox: {
    marginTop: '-180%',
    borderRadius: 16,
    paddingVertical: 260,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: '#7D38EE4D',
    width: '100%',
    marginBottom: '20%',
  },
  innerBoxTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginTop: '-160%',
    textAlign: 'center',
  },
  innerBoxTitle1: {
    fontSize: 15,
    fontWeight: '400',
    color: '#CDCDCD',
    marginTop: '7%',
    textAlign: 'center',
    marginRight: '50%',
  },
  descriptionBox: {
    height: 200,
    backgroundColor: '#0F142478',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#333541',
    marginHorizontal: 15,
    marginTop: 20,
  },
  descriptionBoxText: {
    color: '#CDCDCD',
    marginTop: 15,
    marginLeft: 20,
    fontSize: 15,
    lineHeight: 20,
  },
  descriptionBox1: {
    height: 60,
    backgroundColor: '#0F142478',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#333541',
    marginHorizontal: 15,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  descriptionBox2: {
    backgroundColor: '#F16C0E',
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderRadius: 5,
    marginLeft: 10,
    marginTop: 25,
  },
  descriptionBox1Text: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '600',
  },
  descriptionBox3: {
    backgroundColor: '#F16C0E',
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderRadius: 5,
    marginLeft: 10,
  },
  descriptionBox1Text1: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '600',
  },
  descriptionBox4: {
    backgroundColor: '#F16C0E',
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderRadius: 5,
    marginLeft: 10,
  },
  descriptionBox1Tex2: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '600',
  },
  descriptionBox5: {
    marginLeft: 10,
  },
  imageWrapper1: {
    width: 24,
    height: 24,
    marginLeft: 20,
  },
  startButtonWrapper: {
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  startButton: {
    paddingVertical: 16,
    paddingHorizontal: 100,
    borderRadius: 10,
    marginTop: -15,
  },
  startButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AiPoweredInterView;
