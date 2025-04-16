import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  KeyboardAvoidingView,
  ScrollView,
  TextInput,
  Platform,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const {width} = Dimensions.get('window');

const PrepareWithAi = () => {
  return (
    <LinearGradient
      colors={['#000000', '#1a237e', '#000000']}
      start={{x: 0.4, y: -2}}
      end={{x: 3, y: 0.3}}
      style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1}}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}>
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
          <Text style={styles.text}>Prepare with AI</Text>
          <Text style={styles.textDescription}>
            Select a specific topic and let our AI generate interview
          </Text>
          <Text style={styles.textDescription1}>
            questions. Practice answering them in a simulated
          </Text>
          <Text style={styles.textDescription2}>
            environment and receive personalized feedback to strengthen
          </Text>
          <Text style={styles.textDescription3}>
            your foundation and boost your confidence.
          </Text>
        </View>

        <View style={styles.infoBox}>
          <LinearGradient
            colors={['#F16C0E', '#C2312C']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            style={styles.gradientMessageBox}>
            <Text style={styles.text1}>
              You: Can you help me prepare for the
            </Text>
            <Text style={styles.text2}>topic: communication?</Text>
          </LinearGradient>
          <View style={styles.infoBox1}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
              <Text style={styles.text3}>
                Absolutely, I'd be happy to help you prepare to learn about
                Amazon Web Services (AWS)! AWS is Amazon's cloud platform and
                it's
              </Text>
              <Text style={styles.text3}>
                one of the most comprehensive and broadly adopted cloud
                platforms in the world, offering over 175 fully-featured
                services
              </Text>
              <Text style={styles.text4}>from data centers globally.</Text>
              <Text style={styles.text5}>
                To get started, it may help to clarify what your goals are. Are
                you looking to gain a general understanding of AWS, are you
              </Text>
              <Text style={styles.text6}>
                preparing for an AWS certification, or do you need to learn AWS
                for a specific project?
              </Text>
              <Text style={styles.text7}>
                Absolutely, I'd be happy to help you prepare to learn about
                Amazon Web Services (AWS)! AWS is Amazon's cloud platform and
                it's
              </Text>
              <Text style={styles.text8}>
                one of the most comprehensive and broadly adopted cloud
                platforms in the world, offering over 175 fully-featured
                services
              </Text>
              <Text style={styles.text9}>from data centers globally.</Text>
              <Text style={styles.text10}>
                To get started, it may help to clarify what your goals are. Are
                you looking to gain a general understanding of AWS, are you
              </Text>
              <Text style={styles.text11}>
                preparing for an AWS certification, or do you need to learn AWS
                for a specific project?
              </Text>
              <Text style={styles.text12}>
                Absolutely, I'd be happy to help you prepare to learn about
                Amazon Web Services (AWS)! AWS is Amazon's cloud platform and
                it's
              </Text>
              <Text style={styles.text13}>
                one of the most comprehensive and broadly adopted cloud
                platforms in the world, offering over 175 fully-featured
                services
              </Text>
              <Text style={styles.text14}>from data centers globally.</Text>
              <Text style={styles.text15}>
                To get started, it may help to clarify what your goals are. Are
                you looking to gain a general understanding of AWS, are you
              </Text>
              <Text style={styles.text16}>
                preparing for an AWS certification, or do you need to learn AWS
                for a specific project?
              </Text>
            </ScrollView>
          </View>
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
      </KeyboardAvoidingView>
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
    top: 30,
    right: 10,
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
    marginTop: 30,
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
    fontSize: 12.2,
    color: '#CDCDCD',
    lineHeight: 19,
    marginLeft: -25,
  },
  textDescription1: {
    fontSize: 12.2,
    color: '#CDCDCD',
    lineHeight: 19,
    marginLeft: -25,
  },
  textDescription2: {
    fontSize: 12.2,
    color: '#CDCDCD',
    lineHeight: 19,
    marginLeft: -25,
  },
  textDescription3: {
    fontSize: 12.2,
    color: '#CDCDCD',
    lineHeight: 19,
    marginLeft: -25,
  },
  infoBox: {
    marginTop: 10,
    backgroundColor: '#0F142478',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#F3883580',
    height: '70%',
    width: '105%',
    marginLeft: -10,
    padding: 10,
  },
  gradientMessageBox: {
    borderRadius: 8,
    height: 45,
    width: '65%',
    alignSelf: 'flex-end',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  text1: {
    color: '#FFFFFF',
    fontSize: 12.3,
    fontWeight: '500',
    marginTop: -10,
  },
  text2: {
    color: '#FFFFFF',
    fontSize: 12.3,
    fontWeight: '500',
    marginLeft: 80,
  },
  infoBox1: {
    flex: 1,
    marginTop: 20,
    backgroundColor: '#0F142478',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#F3883580',
    padding: 10,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  text3: {
    color: '#FFFFFF',
    fontSize: 10.2,
    lineHeight: 14,
    fontWeight: '600',
  },
  text4: {
    color: '#FFFFFF',
    fontSize: 10.2,
    lineHeight: 14,
    fontWeight: '600',
    marginTop: 4,
    marginLeft: 5,
  },
  text5: {
    color: '#FFFFFF',
    fontSize: 10.2,
    lineHeight: 14,
    fontWeight: '600',
    marginTop: 20,
  },
  text6: {
    color: '#FFFFFF',
    fontSize: 10.2,
    lineHeight: 14,
    fontWeight: '600',
  },
  text7: {
    color: '#FFFFFF',
    fontSize: 10.2,
    lineHeight: 14,
    fontWeight: '600',
    marginTop: 20,
  },
  text8: {
    color: '#FFFFFF',
    fontSize: 10.2,
    lineHeight: 14,
    fontWeight: '600',
  },
  text9: {
    color: '#FFFFFF',
    fontSize: 10.2,
    lineHeight: 14,
    fontWeight: '600',
    marginTop: 4,
    marginLeft: 5,
  },
  text10: {
    color: '#FFFFFF',
    fontSize: 10.2,
    lineHeight: 14,
    fontWeight: '600',
    marginTop: 20,
  },
  text11: {
    color: '#FFFFFF',
    fontSize: 10.2,
    lineHeight: 14,
    fontWeight: '600',
  },
  text12: {
    color: '#FFFFFF',
    fontSize: 10.2,
    lineHeight: 14,
    fontWeight: '600',
    marginTop: 20,
  },
  text13: {
    color: '#FFFFFF',
    fontSize: 10.2,
    lineHeight: 14,
    fontWeight: '600',
  },
  text14: {
    color: '#FFFFFF',
    fontSize: 10.2,
    lineHeight: 14,
    fontWeight: '600',
    marginTop: 4,
    marginLeft: 5,
  },
  text15: {
    color: '#FFFFFF',
    fontSize: 10.2,
    lineHeight: 14,
    fontWeight: '600',
    marginTop: 20,
  },
  text16: {
    color: '#FFFFFF',
    fontSize: 10.2,
    lineHeight: 14,
    fontWeight: '600',
  },
  inputContainer: {
    paddingHorizontal: 10,
    marginTop: 50,
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
    marginLeft: 10,
  },
  iconWrapper: {
    position: 'absolute',
    right: 15,
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

export default PrepareWithAi;
