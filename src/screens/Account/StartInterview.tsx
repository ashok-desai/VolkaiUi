import React from 'react';
import {StyleSheet, View, Image, Dimensions, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const {width} = Dimensions.get('window');

const StartInterview = () => {
  return (
    <LinearGradient
      colors={['#000000', '#1a237e', '#000000']}
      start={{x: 0.4, y: -2}}
      end={{x: 3, y: 0.3}}
      style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.textInputBox}>
          <Image
            source={require('../../assets/images/volkaihr.png')}
            style={styles.image}
          />
        </View>
      </View>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}>
        <View style={styles.container1}>
          <Image
            source={require('../../assets/images/interviewimage.png')}
            style={styles.image1}
          />
          <Image
            source={require('../../assets/images/interviewimage1.png')}
            style={styles.image2}
          />

          <View style={styles.descriptionBox}>
            <View style={styles.descriptionBox1}>
              <Image
                source={require('../../assets/images/volkai3.png')}
                style={styles.image3}
              />
            </View>
            <View style={styles.descriptionBox2}>
              <Image
                source={require('../../assets/images/volkai3.png')}
                style={styles.image4}
              />
            </View>
            <View style={styles.descriptionBox3}>
              <Image
                source={require('../../assets/images/volkai3.png')}
                style={styles.image5}
              />
            </View>
            <View style={styles.descriptionBox4}>
                <View style={styles.descriptionBox5}>
                    <Image source={require('../../assets/images/voice.png')}
                    style={styles.voiceimage}
                     />
                </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    alignItems: 'center',
    marginTop: 60,
    position: 'relative',
  },
  textInputBox: {
    width: '95%',
    height: 60,
    backgroundColor: '#0F142478',
    borderRadius: 12,
    borderWidth: 1.65,
    borderColor: '#7D38EE4D',
    position: 'absolute',
    top: -10,
    zIndex: 0,
  },
  image: {
    width: 150,
    height: 40,
    resizeMode: 'contain',
    borderRadius: 40,
    zIndex: 1,
    marginLeft: '30%',
    marginTop: 10,
  },
  scrollContent: {
    paddingBottom: 10,
  },
  container1: {
    paddingBottom: 20,
  },
  image1: {
    marginTop: 70,
    marginLeft: 10,
  },
  image2: {
    marginTop: '-55%',
    marginLeft: '88%',
    height: 25,
    width: 25,
  },
  descriptionBox: {
    marginTop: '52%',
    width: '95%',
    height: 130,
    backgroundColor: '#1F243F',
    borderRadius: 10,
    borderWidth: 1.2,
    borderColor: '#F0700E4F',
    marginLeft: 10,
  },
  descriptionBox1: {
    marginTop: '4%',
    width: '30%',
    height: 100,
    backgroundColor: '#1B2638',
    borderRadius: 10,
    borderWidth: 1.2,
    borderColor: '#7D38EE4D',
    marginLeft: 10,
  },
  image3: {
    marginTop: 15,
    marginLeft: 16,
    width: 65,
    height: 65,
  },
  descriptionBox2: {
    marginTop: '-26%',
    width: '30%',
    height: 100,
    backgroundColor: '#1B2638',
    borderRadius: 10,
    borderWidth: 1.2,
    borderColor: '#C2312C',
    marginLeft: 130,
  },
  image4: {
    marginTop: 20,
    marginLeft: 23,
    width: 60,
    height: 60,
  },
  descriptionBox3: {
    marginTop: '-27%',
    width: '30%',
    height: 100,
    backgroundColor: '#1B2638',
    borderRadius: 10,
    borderWidth: 1.2,
    borderColor: '#7D38EE4D',
    marginLeft: '67%',
  },
  image5: {
    marginTop: 15,
    marginLeft: 20,
    width: 65,
    height: 65,
  },
  descriptionBox4: {
    marginTop: '7%',
    width: '100%',
    height: 80,
    backgroundColor: '#1F243F',
    borderRadius: 10,
    borderWidth: 1.2,
    borderColor: '#F0700E4F',
  },
  descriptionBox5: {
    marginTop: '3%',
    width: '50%',
    height: 55,
    backgroundColor: '#D9D9D933',
    borderRadius: 10,
    marginLeft: 10,
  },
  voiceimage:{
    marginTop:15,
    width:24,
    height:24,
    marginLeft:10
  }
});

export default StartInterview;
