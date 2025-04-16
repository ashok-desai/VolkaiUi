import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const {width} = Dimensions.get('window');

const PreviousInterview = () => {
  return (
    <LinearGradient
      colors={['#000000', '#1a237e', '#000000']}
      start={{x: 0.4, y: -2}}
      end={{x: 3, y: 0.3}}
      style={styles.container}>
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
        <Text style={styles.text}>Crack the ATS Code</Text>
        <Text style={styles.textDescription}>
          Optimize your resume with an AI-powered breakdown highlighting
        </Text>
        <Text style={styles.textDescription1}>
          strengths, weaknesses, and actionable improvements. Get a
        </Text>
        <Text style={styles.textDescription2}>
          clear ATS score and boost your chances of getting shortlisted.
        </Text>
      </View>

      <View style={styles.infoBox}>
        <Text style={styles.text1}>ATS Resume Analysis</Text>
        <Text style={styles.text2}>Using cached analysis</Text>
        <Image
          source={require('../../assets/images/image37.png')}
          style={styles.image}
        />
        <Text style={styles.text3}>Good</Text>
        <View style={styles.infoBox1}>
          <LinearGradient
            colors={['#F16C0E', '#C2312C']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            style={styles.gradientMessageBox}>
            <Text style={styles.analysisText}>Analysis</Text>
          </LinearGradient>
          <Text style={styles.text4}>Keywords</Text>
        </View>
        <View style={styles.container1}>
          <Image
            source={require('../../assets/images/image27.png')}
            style={styles.image1}
          />
          <Text style={styles.text5}>Strengths</Text>
          <Image
          source={require('../../assets/images/image38.png')} 
              style={styles.image2}
           />
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  gradientBorder: {
    position: 'absolute',
    top: 50,
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
  textContainer: {
    marginTop: 40,
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 15,
  },
  textDescription: {
    fontSize: 11.5,
    color: '#CDCDCD',
    lineHeight: 19,
    marginLeft: -30,
  },
  textDescription1: {
    fontSize: 11.5,
    color: '#CDCDCD',
    lineHeight: 19,
    marginLeft: -30,
  },
  textDescription2: {
    fontSize: 11.5,
    color: '#CDCDCD',
    lineHeight: 19,
    marginLeft: -30,
  },
  infoBox: {
    height: '81%',
    width: '105%',
    marginTop: 10,
    backgroundColor: '#0F142478',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#333541',
    padding: 20,
    marginLeft: -10,
  },
  text1: {
    color: '#FFFFFF',
    fontSize: 19,
    fontWeight: '700',
    lineHeight: 18,
    marginTop: 20,
  },
  text2: {
    color: '#BABABA',
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 21,
    marginTop: 10,
  },
  image: {
    height: 95,
    width: 95,
    marginLeft: '70%',
    marginTop: -75,
  },
  text3: {
    color: '#FFFFFF',
    marginLeft: '79%',
    fontSize: 15,
    marginTop: 5,
  },
  infoBox1: {
    height: 60,
    width: '106%',
    marginTop: 10,
    backgroundColor: 'rgba(104, 109, 122, 0.83)',
    borderRadius: 12,
    borderWidth: 1,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: -12,
  },

  gradientMessageBox: {
    height: 45,
    width: 150,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: -8,
  },

  analysisText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 18,
  },
  text4: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 26,
    marginLeft: 60,
  },
  container1:{
    flex:1,
    padding:20
  },
  image1:{
    marginTop:10,
    marginLeft:-25
  },
  text5:{
    color:'#FFFFFF',
    fontWeight:'700',
    fontSize:17,
    marginLeft:15,
    marginTop:-20
  },
  image2:{
    marginLeft:'100%',
    marginTop:-12
  }
});

export default PreviousInterview;
