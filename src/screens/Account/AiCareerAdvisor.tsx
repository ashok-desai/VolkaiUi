import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions, TextInput, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const {width} = Dimensions.get('window');

const AiCareerAdvisor = () => {
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
        <Text style={styles.text}>AI Career Advisor</Text>
        <Text style={styles.textDescription}>
          Not just advice — real insights tailored to you. From job
        </Text>
        <Text style={styles.textDescription1}>
          search hacks to long-term growth strategies, your AI career
        </Text>
        <Text style={styles.textDescription2}>
          coach is here to help you navigate every step with clarity.
        </Text>
        <Text style={styles.text1}>Hi there, Ashok</Text>
        <Text style={styles.text2}>What would like to know?</Text>
        <Text style={styles.text3}>
          Your personal AI assistant for instant answers, career
        </Text>
        <Text style={styles.text4}>
          guidance, and interview help—available anytime you need it.
        </Text>
        <View style={styles.boxContainer}>
          <Text style={styles.text5}>What are some key tips to make my </Text>
          <Text style={styles.text6}>
            resume stand out to hiring managers and recruiters?
          </Text>
          <Image
            source={require('../../assets/images/messageicon.png')}
            style={styles.image}
          />
        </View>
        <View style={styles.boxContainer1}>
          <Text style={styles.text7}>
            Can you help me prepare for the most commonly
          </Text>
          <Text style={styles.text8}>asked interview questions?</Text>
          <Image
            source={require('../../assets/images/messageicon.png')}
            style={styles.image}
          />
        </View>
        <View style={styles.boxContainer2}>
          <Text style={styles.text9}>
            How should I get ready for a technical interview,
          </Text>
          <Text style={styles.text10}>including coding challenges an.....</Text>
          <Image
            source={require('../../assets/images/messageicon.png')}
            style={styles.image}
          />
        </View>
        <View style={styles.boxContainer3}>
          <Text style={styles.text11}>
            How should I get ready for a technical interview,
          </Text>
          <Text style={styles.text12}>
            including coding challenges and system design....
          </Text>
          <Image
            source={require('../../assets/images/messageicon.png')}
            style={styles.image}
          />
        </View>
         <View style={styles.inputContainer}>
                  <View style={styles.inputWrapper}>
                    <TextInput
                      placeholder="Ask me anything..."
                      placeholderTextColor="#CCCCCC"
                      style={styles.textInput}
                    />
                    <TouchableOpacity activeOpacity={0.8} style={styles.iconWrapper}>
                      <LinearGradient
                        colors={['#F16C0E', '#C2312C']}
                        start={{x: 0, y: 0}}
                        end={{x: 1, y: 1}}
                        style={styles.sendButton}>
                        <Image
                          source={require('../../assets/images/sendicon.png')}
                          style={styles.sendIcon}
                          resizeMode="contain"
                        />
                      </LinearGradient>
                    </TouchableOpacity>
                  </View>
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
    top: 45,
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
    marginTop: 25,
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 10,
    marginLeft: 20,
  },
  textDescription: {
    fontSize: 12,
    color: '#CDCDCD',
    lineHeight: 19,
    marginBottom: 4,
    marginLeft: -27,
  },
  textDescription1: {
    fontSize: 12,
    color: '#CDCDCD',
    lineHeight: 19,
    marginBottom: 4,
    marginLeft: -27,
  },
  textDescription2: {
    fontSize: 12,
    color: '#CDCDCD',
    lineHeight: 19,
    marginBottom: 4,
    marginLeft: -27,
  },
  text1: {
    color: 'rgba(223, 75, 49, 0.94)',
    marginTop: 10,
    marginLeft: -30,
    fontWeight: '700',
    fontSize: 29,
    lineHeight: 40,
  },
  text2: {
    color: 'rgba(223, 75, 49, 0.94)',
    marginLeft: -30,
    fontWeight: '700',
    fontSize: 29,
    lineHeight: 40,
  },
  text3: {
    color: '#FFFFFF',
    fontSize: 13,
    marginLeft: -28,
    marginTop: 10,
  },
  text4: {
    color: '#FFFFFF',
    fontSize: 12.7,
    marginLeft: -28,
  },
  boxContainer: {
    marginTop: 20,
    marginHorizontal: 20,
    width: '117%',
    height: 100,
    borderColor: '#FFFFFF5C',
    borderRadius: 15,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: -31,
  },
  text5: {
    color: '#FFFFFF',
    fontWeight: '500',
    fontSize: 14,
    marginTop: -5,
    marginLeft: -90,
  },
  text6: {
    color: '#FFFFFF',
    fontWeight: '500',
    fontSize: 14,
    marginLeft: 13,
  },
  boxContainer1: {
    marginTop: 10,
    marginHorizontal: 20,
    width: '117%',
    height: 100,
    borderColor: '#FFFFFF5C',
    borderRadius: 15,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: -31,
  },
  text7: {
    color: '#FFFFFF',
    fontWeight: '500',
    fontSize: 14,
    marginTop: -5,
    marginLeft: -10,
  },
  text8: {
    color: '#FFFFFF',
    fontWeight: '500',
    fontSize: 14,
    marginLeft: -150,
  },
  boxContainer2: {
    marginTop: 10,
    marginHorizontal: 20,
    width: '117%',
    height: 100,
    borderColor: '#FFFFFF5C',
    borderRadius: 15,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: -31,
  },
  text9: {
    color: '#FFFFFF',
    fontWeight: '500',
    fontSize: 14,
    marginTop: -5,
    marginLeft: -10,
  },
  text10: {
    color: '#FFFFFF',
    fontWeight: '500',
    fontSize: 14,
    marginLeft: -100,
  },
  boxContainer3: {
    marginTop: 10,
    marginHorizontal: 20,
    width: '117%',
    height: 100,
    borderColor: '#FFFFFF5C',
    borderRadius: 15,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: -31,
  },
  text11: {
    color: '#FFFFFF',
    fontWeight: '500',
    fontSize: 14,
    marginTop: -5,
    marginLeft: -10,
  },
  text12: {
    color: '#FFFFFF',
    fontWeight: '500',
    fontSize: 14,
  },
  image: {
    height: 30,
    width: 25,
    marginTop: 15,
    marginRight: '80%',
  },
  inputContainer: {
    paddingHorizontal: 10,
    marginTop: 65,
    marginLeft: -25,
    marginRight: -20,
  },
  inputWrapper: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  textInput: {
    flex: 1,
    height: 60,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    paddingHorizontal: 15,
    fontSize: 16,
    fontWeight: '500',
    color: '#FFFFFF',
    paddingRight: 50,
    marginLeft: -15,
    marginRight:-10
  },
  iconWrapper: {
    position: 'absolute',
    right: 0,
    height: 48,
    width: 48,
    borderRadius: 24,
    backgroundColor: '#F16C0E',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendIcon: {
    width: 24,
    height: 24,
    tintColor: '#FFFFFF',
  },
  sendButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
});

export default AiCareerAdvisor;
