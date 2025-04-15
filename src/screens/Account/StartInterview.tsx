import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';
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
              <TouchableOpacity>
                <Image
                  source={require('../../assets/images/voice.png')}
                  style={styles.voiceimage}
                />
              </TouchableOpacity>
              <Text style={styles.text}>Start Recording</Text>
            </View>
            <View style={styles.descriptionBox6}>
              <TouchableOpacity>
                <Image
                  source={require('../../assets/images/video.png')}
                  style={styles.videoimage}
                />
              </TouchableOpacity>
              <Text style={styles.text1}>Start Video</Text>
            </View>
          </View>
          <Text style={styles.text2}>Questions Summary</Text>
          <View style={styles.descriptionBox7}>
            <ScrollView style={styles.scrollArea} nestedScrollEnabled={true}>
              <View style={styles.descriptionBox8}>
                <Text style={styles.text3}>
                  Interviewer: "Can you describe the process of setting up a
                  CI/CD
                </Text>
                <Text style={styles.text4}>
                  pipeline for a Full Stack application developed using Next.js
                  and
                </Text>
                <Text style={styles.text5}>MongoDB hosted on AWS?"</Text>
              </View>
              <View style={styles.descriptionBox9}>
                <Text style={styles.text6}>Playing...</Text>
              </View>
              <Text style={styles.text7}>Previous Questions:</Text>
              <View style={styles.descriptionBox10}>
                <Image
                  source={require('../../assets/images/profile1.png')}
                  style={styles.image6}
                />
                <Text style={styles.text8}>You:</Text>
                <Text style={styles.text9}>Thank you very much.</Text>
              </View>
              <View style={styles.descriptionBox11}>
                <Image
                  source={require('../../assets/images/volkaiimage.png')}
                  style={styles.volkaiimage}
                />
                <Text style={styles.text10}>Interviewer:"</Text>
                <Text style={styles.text11}>
                  Can you describe a project where
                </Text>
                <Text style={styles.text12}>
                  you used Next is and MongoDB together and how
                </Text>
                <Text style={styles.text13}>AWS services were beneficial in that context?</Text>
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
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
    marginTop: '5%',
    width: '100%',
    height: 80,
    backgroundColor: '#1F243F',
    borderRadius: 10,
    borderWidth: 1.2,
    borderColor: '#F0700E4F',
  },
  descriptionBox5: {
    marginTop: 13,
    width: '45%',
    height: 50,
    backgroundColor: '#D9D9D933',
    borderRadius: 10,
    marginLeft: 10,
  },
  voiceimage: {
    marginTop: 13,
    width: 25,
    height: 25,
    marginLeft: 10,
  },
  text: {
    color: '#FFFFFF',
    marginLeft: 45,
    marginTop: -24,
    fontWeight: '400',
    fontSize: 15,
  },
  descriptionBox6: {
    marginTop: -50,
    width: '45%',
    height: 50,
    backgroundColor: '#D9D9D933',
    borderRadius: 10,
    marginLeft: '51%',
  },
  videoimage: {
    marginTop: 13,
    width: 25,
    height: 25,
    marginLeft: 14,
  },
  text1: {
    color: '#FFFFFF',
    marginLeft: 55,
    marginTop: -23,
    fontWeight: '400',
    fontSize: 15,
  },
  text2: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 24,
    lineHeight: 28,
    marginLeft: 80,
    marginTop: 10,
  },
  descriptionBox7: {
    marginTop: '4%',
    width: '100%',
    minHeight: 210,
    backgroundColor: '#1F243F',
    borderRadius: 10,
    borderWidth: 1.2,
  },
  scrollArea: {
    paddingHorizontal: 10,
    maxHeight: 180,
  },
  descriptionBox8: {
    marginTop: '4%',
    width: '100%',
    minHeight: 80,
    backgroundColor: '#252323B2',
    borderRadius: 10,
    marginLeft: 0,
  },
  text3: {
    color: '#FFFFFF',
    fontSize: 11.3,
    marginLeft: 10,
    marginTop: 10,
  },
  text4: {
    color: '#FFFFFF',
    fontSize: 11,
    marginLeft: 16,
    marginTop: 5,
  },
  text5: {
    color: '#FFFFFF',
    fontSize: 11,
    marginLeft: 110,
    marginTop: 5,
  },
  descriptionBox9: {
    marginTop: '3%',
    width: '30%',
    minHeight: 45,
    backgroundColor: '#252323B2',
    borderRadius: 10,
    marginLeft: '68%',
  },
  text6: {
    color: '#FFFFFF',
    marginLeft: 30,
    fontWeight: '400',
    fontSize: 13,
    marginTop: 10,
  },
  text7: {
    fontSize: 16,
    fontWeight: '700',
    marginTop: 10,
    marginLeft: 0,
    color: '#F16C0E',
  },
  descriptionBox10: {
    marginTop: '3%',
    width: '60%',
    minHeight: 50,
    borderColor: '#9B9B9BDB',
    borderWidth: 0.3,
    backgroundColor: '#1C1F2A',
    borderRadius: 10,
    marginLeft: '35%',
  },
  image6: {
    height: 22,
    width: 22,
    marginTop: 10,
    marginLeft: 10,
  },
  text8: {
    color: '#FFFFFF',
    marginLeft: 40,
    marginTop: -21,
    fontWeight: '700',
    fontSize: 16,
  },
  text9: {
    color: '#FFFFFF',
    marginLeft: 78,
    fontSize: 13,
    marginTop: -19,
  },
  descriptionBox11: {
    marginTop: '3%',
    width: '85%',
    minHeight: 90,
    borderColor: '#FF6F004D',
    borderWidth: 0.3,
    backgroundColor: '#1C1F2A',
    borderRadius: 10,
  },
  volkaiimage:{
    marginLeft:10,
    marginTop:5
  },
  text10:{
    color:'#FFFFFF',
    fontWeight:'700',
    marginLeft:35,
    marginTop:-19,
    fontSize:14
  },
  text11:{
    color:'#FFFFFF',
    fontSize:11,
    marginLeft:120,
    marginTop:-15
  },
  text12:{
    color:'#FFFFFF',
    fontSize:12.1,
    marginLeft:10,
    marginTop:4
  },
  text13:{
    color:'#FFFFFF',
    fontSize:12.1,
    marginLeft:10,
    marginTop:4
  }
});

export default StartInterview;
