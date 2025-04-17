import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  Animated,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const {width} = Dimensions.get('window');

const PreviousInterview = () => {
  const [showUpperText, setShowUpperText] = useState(false);
  const [showLowerText1, setShowLowerText1] = useState(false);
  const [showLowerText2, setShowLowerText2] = useState(false);

  const upperRotation = useState(new Animated.Value(0))[0];
  const lowerRotation1 = useState(new Animated.Value(0))[0];
  const lowerRotation2 = useState(new Animated.Value(0))[0];

  const handleUpperImagePress = () => {
    const newShowUpperText = !showUpperText;
    setShowUpperText(newShowUpperText);
    Animated.timing(upperRotation, {
      toValue: newShowUpperText ? 1 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const handleLowerImagePress1 = () => {
    const newShow = !showLowerText1;
    setShowLowerText1(newShow);
    Animated.timing(lowerRotation1, {
      toValue: newShow ? 1 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const handleLowerImagePress2 = () => {
    const newShow = !showLowerText2;
    setShowLowerText2(newShow);
    Animated.timing(lowerRotation2, {
      toValue: newShow ? 1 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const upperRotateInterpolation = upperRotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '-180deg'],
  });

  const lowerRotateInterpolation1 = lowerRotation1.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '-180deg'],
  });

  const lowerRotateInterpolation2 = lowerRotation2.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '-180deg'],
  });

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

        <ScrollView
          style={styles.container1}
          contentContainerStyle={{paddingBottom: 20}}
          showsVerticalScrollIndicator={false}>
          <Image
            source={require('../../assets/images/image27.png')}
            style={styles.image1}
          />
          <Text style={styles.text5}>Strengths</Text>

          <TouchableOpacity onPress={handleUpperImagePress}>
            <Animated.Image
              source={require('../../assets/images/image38.png')}
              style={[
                styles.image2,
                {transform: [{rotate: upperRotateInterpolation}]},
              ]}
            />
          </TouchableOpacity>

          {showUpperText && (
            <View style={styles.textBlock}>
              <Text style={styles.clickText}>
                <Text style={styles.dot}>• </Text>
                {'  '}Clear listing of progressive job titles
              </Text>
              <Text style={styles.clickText}>
                <Text style={styles.dot}>• </Text>
                {'  '}Diverse set of skills aligned with various roles
              </Text>
              <Text style={styles.clickText}>
                <Text style={styles.dot}>• </Text>
                {'  '}Entrepreneurial experience highlighted
              </Text>
            </View>
          )}

          <Image
            source={require('../../assets/images/image39.png')}
            style={styles.image1}
          />
          <Text style={styles.text5}>Weaknesses</Text>

          <TouchableOpacity onPress={handleLowerImagePress1}>
            <Animated.Image
              source={require('../../assets/images/image38.png')}
              style={[
                styles.image2,
                {transform: [{rotate: lowerRotateInterpolation1}]},
              ]}
            />
          </TouchableOpacity>

          {showLowerText1 && (
            <View style={styles.textBlock}>
              <Text style={styles.clickText}>
                <Text style={styles.dot1}>• </Text>
                {'  '}Incomplete educational details
              </Text>
              <Text style={styles.clickText}>
                <Text style={styles.dot1}>• </Text>
                {'  '}Use of 'N/A' instead of providing specific
              </Text>
              <Text style={styles.clickText1}>
                dates or simply leaving unspecified
              </Text>
              <Text style={styles.clickText}>
                <Text style={styles.dot1}>• </Text>
                {'  '}Lack of specific key achievements or metrics
              </Text>
              <Text style={styles.clickText1}>in role descriptions</Text>
            </View>
          )}

          <Image
            source={require('../../assets/images/image40.png')}
            style={styles.image1}
          />
          <Text style={styles.text5}>Improvement Suggestions</Text>

          <TouchableOpacity onPress={handleLowerImagePress2}>
            <Animated.Image
              source={require('../../assets/images/image38.png')}
              style={[
                styles.image2,
                {transform: [{rotate: lowerRotateInterpolation2}]},
              ]}
            />
          </TouchableOpacity>

          {showLowerText2 && (
            <View style={styles.textBlock}>
              <Text style={styles.clickText}>
                <Text style={styles.dot2}>1 </Text>
                {'  '}Include specific employment dates to
              </Text>
              <Text style={styles.clickText2}>
                show the duration of employment at
              </Text>
              <Text style={styles.clickText3}> each company.</Text>
              <Text style={styles.clickText}>
                <Text style={styles.dot2}>2 </Text>
                {'  '}Add detailed descriptions of projects,
              </Text>
              <Text style={styles.clickText4}>
                responsibilities, and achievements in the
              </Text>
              <Text style={styles.clickText5}>
                experience section to provide context
              </Text>
              <Text style={styles.clickText6}>and demonstrate impact.</Text>
              <Text style={styles.clickText}>
                <Text style={styles.dot2}>3 </Text>
                {'  '}Provide examples of how you have
              </Text>
              <Text style={styles.clickText2}>
                effectively used your soft skills such as
              </Text>
              <Text style={styles.clickText2}>
                communication or teamwork in
              </Text>
              <Text style={styles.clickText2}>professional settings.</Text>
              <Text style={styles.clickText}>
                <Text style={styles.dot2}>4 </Text>
                {'  '}Match more key skills and technologies
              </Text>
              <Text style={styles.clickText2}>specifically required in the job rolesyou</Text>
              <Text style={styles.clickText2}>are applying for.</Text>
            </View>
          )}
        </ScrollView>
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
    borderRadius: 8,
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
  container1: {
    flex: 1,
    padding: 20,
  },
  image1: {
    marginTop: 10,
    marginLeft: -20,
  },
  text5: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 17,
    marginLeft: 15,
    marginTop: -20,
  },
  image2: {
    width: 25,
    height: 15,
    marginTop: -16,
    marginLeft: '95%',
  },
  textBlock: {
    marginTop: 20,
    marginLeft: 10,
  },
  clickText: {
    color: '#BABABA',
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 21,
    marginBottom: 4,
    marginLeft: -10,
  },
  clickText1: {
    color: '#BABABA',
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 21,
    marginBottom: 4,
  },
  clickText2: {
    color: '#BABABA',
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 21,
    marginBottom: 4,
    marginLeft: 8,
  },
  clickText3: {
    color: '#BABABA',
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 21,
    marginBottom: 4,
    marginLeft: 5,
  },
  clickText4: {
    color: '#BABABA',
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 21,
    marginBottom: 4,
    marginLeft: 8,
  },
  clickText5: {
    color: '#BABABA',
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 21,
    marginBottom: 4,
    marginLeft: 8,
  },
  clickText6: {
    color: '#BABABA',
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 21,
    marginBottom: 4,
    marginLeft: 8,
  },
  dot: {
    color: '#1CC84B',
    fontSize: 14,
    marginRight: 5,
  },
  dot1: {
    color: '#DEA53A',
    fontSize: 14,
    marginRight: 5,
  },
  dot2: {
    color: '#F16C0E',
    fontWeight: 'bold',
    fontSize: 14,
    marginRight: 5,
  },
});

export default PreviousInterview;
