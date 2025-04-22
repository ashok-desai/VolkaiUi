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
import {useNavigation} from '@react-navigation/native';

const {width} = Dimensions.get('window');

const PreviousInterviewReport = () => {
  const [activeTab, setActiveTab] = useState<'Analysis' | 'Keywords'>(
    'Analysis',
  );
  const [showUpperText, setShowUpperText] = useState(false);
  const [showLowerText1, setShowLowerText1] = useState(false);
  const [showLowerText2, setShowLowerText2] = useState(false);

  const upperRotation = useState(new Animated.Value(0))[0];
  const lowerRotation1 = useState(new Animated.Value(0))[0];
  const lowerRotation2 = useState(new Animated.Value(0))[0];

  const navigation = useNavigation();

  const handleImagePress = (
    setter: React.Dispatch<React.SetStateAction<boolean>>,
    rotation: Animated.Value,
    show: boolean,
  ) => {
    const newShow = !show;
    setter(newShow);
    Animated.timing(rotation, {
      toValue: newShow ? 1 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const rotationStyle = (rotation: Animated.Value) =>
    rotation.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '-180deg'],
    });

  return (
    <LinearGradient
      colors={['#000000', '#1a237e', '#000000']}
      start={{x: 0.4, y: -2}}
      end={{x: 3, y: 0.3}}
      style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
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
        <Text style={styles.text}>Crack the ATS Code</Text>
        <Text style={styles.textDescription}>
          Optimize your resume with an AI-powered breakdown highlighting
        </Text>
        <Text style={styles.textDescription}>
          strengths, weaknesses, and actionable improvements. Get a
        </Text>
        <Text style={styles.textDescription}>
          clear ATS score and boost your chances of getting shortlisted.
        </Text>
      </View>

      <View style={styles.infoBox}>
        <Text style={styles.textDescription1}>ATS Resume Analysis</Text>
        <Text style={styles.textDescription2}>Using cached analysis</Text>
        <Image
          source={require('../../assets/images/image37.png')}
          style={styles.image}
        />
        <Text style={styles.textDescription3}>Good</Text>
        <View style={styles.tabBox}>
          <TouchableOpacity
            onPress={() => setActiveTab('Analysis')}
            style={styles.tabButton}>
            {activeTab === 'Analysis' ? (
              <LinearGradient
                colors={['#F16C0E', '#C2312C']}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}
                style={styles.activeTab}>
                <Text style={[styles.tabText, styles.activeTabText]}>
                  Analysis
                </Text>
              </LinearGradient>
            ) : (
              <Text style={styles.tabText}>Analysis</Text>
            )}
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setActiveTab('Keywords')}
            style={styles.tabButton}>
            {activeTab === 'Keywords' ? (
              <LinearGradient
                colors={['#F16C0E', '#C2312C']}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}
                style={styles.activeTab}>
                <Text style={[styles.tabText, styles.activeTabText]}>
                  Keywords
                </Text>
              </LinearGradient>
            ) : (
              <Text style={styles.tabText}>Keywords</Text>
            )}
          </TouchableOpacity>
        </View>

        <ScrollView contentContainerStyle={styles.contentContainer}>
          {activeTab === 'Analysis' ? (
            <>
              <Image
                source={require('../../assets/images/image27.png')}
                style={styles.image27}
              />
              <Text style={styles.sectionTitle}>Strengths</Text>
              <TouchableOpacity
                onPress={() =>
                  handleImagePress(
                    setShowUpperText,
                    upperRotation,
                    showUpperText,
                  )
                }>
                <Animated.Image
                  source={require('../../assets/images/image38.png')}
                  style={[
                    styles.toggleIcon,
                    {transform: [{rotate: rotationStyle(upperRotation)}]},
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
                style={styles.image39}
              />
              <Text style={styles.sectionTitle1}>Weaknesses</Text>
              <TouchableOpacity
                onPress={() =>
                  handleImagePress(
                    setShowLowerText1,
                    lowerRotation1,
                    showLowerText1,
                  )
                }>
                <Animated.Image
                  source={require('../../assets/images/image38.png')}
                  style={[
                    styles.toggleIcon1,
                    {transform: [{rotate: rotationStyle(lowerRotation1)}]},
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
                style={styles.image40}
              />
              <Text style={styles.sectionTitle2}>Improvement Suggestions</Text>
              <TouchableOpacity
                onPress={() =>
                  handleImagePress(
                    setShowLowerText2,
                    lowerRotation2,
                    showLowerText2,
                  )
                }>
                <Animated.Image
                  source={require('../../assets/images/image38.png')}
                  style={[
                    styles.toggleIcon2,
                    {transform: [{rotate: rotationStyle(lowerRotation2)}]},
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
                  <Text style={styles.clickText7}>
                    communnication to teamwork in
                  </Text>
                  <Text style={styles.clickText7}>professional settings</Text>
                  <Text style={styles.clickText}>
                    <Text style={styles.dot2}>4 </Text>
                    {'  '}Match more key skills and technologies
                  </Text>
                  <Text style={styles.clickText2}>
                    specifically required in the job roles you
                  </Text>
                  <Text style={styles.clickText7}>are applying for.</Text>
                </View>
              )}
            </>
          ) : (
            <View style={styles.keywordSection}>
              <Image
                source={require('../../assets/images/image42.png')}
                style={styles.image42}
              />
              <Text style={styles.awsText}>Included Buzzwords</Text>
              <TouchableOpacity style={styles.box}>
                <Text style={styles.boxText}>Team Management</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.box1}>
                <Text style={styles.boxText1}>Product Development</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.box2}>
                <Text style={styles.boxText2}>Software Development</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.box3}>
                <Text style={styles.boxText3}>Marketing</Text>
              </TouchableOpacity>
              <Image
                source={require('../../assets/images/image43.png')}
                style={styles.image43}
              />
              <Text style={styles.boxText4}>Missing Buzzwords</Text>
              <TouchableOpacity style={styles.box4}>
                <Text style={styles.boxText5}>Project Management</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.box5}>
                <Text style={styles.boxText6}>Digital Marketing</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.box6}>
                <Text style={styles.boxText7}>Strategic Planning</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.box7}>
                <Text style={styles.boxText8}>Content Creation</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.box8}>
                <Text style={styles.boxText9}>Analytics</Text>
              </TouchableOpacity>
              <View style={styles.box9}>
                <Text style={styles.boxText10}>Keyword Match Analysis</Text>
                <Text style={styles.boxText11}>
                  Your resume includes 17 out of 24
                </Text>
                <Text style={styles.boxText11}>
                  recommended keywords for your
                </Text>
                <Text style={styles.boxText11}>target role</Text>
                <View style={styles.lineButton}>
                  <View style={styles.lineButton1} />
                </View>
              </View>
            </View>
          )}
        </ScrollView>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  backButton: {
    position: 'absolute',
    top: 60,
    left: 10,
    zIndex: 1,
  },
  leftIcon: {
    width: 20,
    height: 20,
    marginTop: -5,
    tintColor: '#fff',
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
    marginTop: 50,
    paddingHorizontal: 20,
    marginLeft: 30,
  },
  text: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  textDescription: {
    color: '#ccc',
    fontSize: 12,
    marginLeft: -40,
  },
  textDescription1: {
    color: '#FFFFFF',
    marginTop: 20,
    fontSize: 19,
    lineHeight: 26,
    fontWeight: '700',
    textAlign: 'center',
    marginLeft: '-40%',
  },
  textDescription2: {
    fontSize: 13,
    lineHeight: 21,
    fontWeight: '400',
    color: '#BABABA',
    marginLeft: 8,
    marginTop: 10,
  },
  image: {
    height: 100,
    width: 100,
    marginLeft: '70%',
    marginTop: -80,
  },
  textDescription3: {
    fontSize: 12,
    fontWeight: '600',
    lineHeight: 16,
    color: '#FFFFFF',
    marginLeft: '80%',
  },
  infoBox: {
    height: '77%',
    width: '97%',
    marginTop: 30,
    backgroundColor: '#0F142478',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#F3883580',
    padding: 20,
    marginLeft: 5,
  },
  tabBox: {
    width: '105%',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 50,
    backgroundColor: '#1a223c',
    borderRadius: 10,
    marginLeft: -10,
    overflow: 'hidden',
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeTab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    height: '100%',
    width: '100%',
  },
  tabText: {
    color: '#fff',
    fontSize: 16,
  },
  activeTabText: {
    fontWeight: 'bold',
    color: '#fff',
  },
  contentContainer: {
    paddingBottom: 30,
    paddingHorizontal: 20,
  },
  image27: {
    marginLeft: -20,
    marginTop: 40,
  },
  image39: {
    marginLeft: -20,
    marginTop: 25,
  },
  image40: {
    marginLeft: -20,
    marginTop: 25,
  },
  sectionTitle: {
    fontWeight: '700',
    color: '#fff',
    fontSize: 18,
    marginTop: -22,
    marginLeft: 10,
  },
  sectionTitle1: {
    fontWeight: '700',
    color: '#fff',
    fontSize: 18,
    marginTop: -20,
    marginLeft: 10,
  },
  sectionTitle2: {
    fontWeight: '700',
    color: '#fff',
    fontSize: 18,
    marginTop: -22,
    marginLeft: 10,
  },
  toggleIcon: {
    width: 20,
    height: 15,
    alignSelf: 'center',
    marginLeft: '98%',
    marginTop: -18,
  },
  toggleIcon1: {
    width: 20,
    height: 15,
    alignSelf: 'center',
    marginLeft: '98%',
    marginTop: -18,
  },
  toggleIcon2: {
    width: 20,
    height: 15,
    alignSelf: 'center',
    marginLeft: '98%',
    marginTop: -18,
  },
  textBlock: {
    padding: 10,
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
    marginLeft: 5,
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
  clickText7: {
    color: '#BABABA',
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 21,
    marginBottom: 4,
    marginLeft: 9,
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
  keywordSection: {
    marginTop: 20,
  },
  image42: {
    marginLeft: -20,
    marginTop: 10,
  },
  awsText: {
    fontWeight: '700',
    lineHeight: 24,
    color: '#fff',
    fontSize: 18,
    marginLeft: 10,
    marginTop: -21,
  },
  box: {
    height: 40,
    width: '52%',
    backgroundColor: '#0A08081A',
    borderColor: '#FFFFFF1A',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 10,
    marginLeft: -20,
  },
  boxText: {
    fontSize: 15,
    fontWeight: '500',
    marginLeft: 10,
    marginTop: 6,
    color: '#FFFFFF',
  },
  box1: {
    height: 40,
    width: '58%',
    backgroundColor: '#0A08081A',
    borderColor: '#FFFFFF1A',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: -40,
    marginLeft: '48%',
  },
  boxText1: {
    fontSize: 15,
    fontWeight: '500',
    marginLeft: 10,
    marginTop: 6,
    color: '#FFFFFF',
  },
  box2: {
    height: 40,
    width: '60%',
    backgroundColor: '#0A08081A',
    borderColor: '#FFFFFF1A',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 10,
    marginLeft: -20,
  },
  boxText2: {
    fontSize: 15,
    fontWeight: '500',
    marginLeft: 10,
    marginTop: 6,
    color: '#FFFFFF',
  },
  box3: {
    height: 40,
    width: '32%',
    backgroundColor: '#0A08081A',
    borderColor: '#FFFFFF1A',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: -40,
    marginLeft: '57%',
  },
  boxText3: {
    fontSize: 15,
    fontWeight: '500',
    marginLeft: 10,
    marginTop: 6,
    color: '#FFFFFF',
  },
  image43: {
    marginTop: 50,
    marginLeft: -18,
  },
  boxText4: {
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 24,
    color: '#FFFFFF',
    marginLeft: 15,
    marginTop: -19,
  },
  box4: {
    height: 40,
    width: '57%',
    backgroundColor: '#C32B371A',
    borderColor: '#FFFFFF1A',
    borderWidth: 1,
    borderRadius: 16,
    marginTop: 20,
    marginLeft: -20,
  },
  boxText5: {
    fontSize: 15,
    fontWeight: '500',
    marginLeft: 15,
    marginTop: 6,
    color: '#C32B37',
  },
  box5: {
    height: 40,
    width: '50%',
    backgroundColor: '#C32B371A',
    borderColor: '#FFFFFF1A',
    borderWidth: 1,
    borderRadius: 16,
    marginTop: 20,
    marginLeft: -20,
  },
  boxText6: {
    fontSize: 15,
    fontWeight: '500',
    marginLeft: 15,
    marginTop: 6,
    color: '#C32B37',
  },
  box6: {
    height: 40,
    width: '52%',
    backgroundColor: '#C32B371A',
    borderColor: '#FFFFFF1A',
    borderWidth: 1,
    borderRadius: 16,
    marginTop: -100,
    marginLeft: '52%',
  },
  boxText7: {
    fontSize: 15,
    fontWeight: '500',
    marginLeft: 15,
    marginTop: 6,
    color: '#C32B37',
  },
  box7: {
    height: 40,
    width: '52%',
    backgroundColor: '#C32B371A',
    borderColor: '#FFFFFF1A',
    borderWidth: 1,
    borderRadius: 16,
    marginTop: 20,
    marginLeft: '45%',
  },
  boxText8: {
    fontSize: 15,
    fontWeight: '500',
    marginLeft: 15,
    marginTop: 6,
    color: '#C32B37',
  },
  box8: {
    height: 40,
    width: '32%',
    backgroundColor: '#C32B371A',
    borderColor: '#FFFFFF1A',
    borderWidth: 1,
    borderRadius: 16,
    marginTop: 20,
    marginLeft: -20,
  },
  boxText9: {
    fontSize: 15,
    fontWeight: '500',
    marginLeft: 15,
    marginTop: 6,
    color: '#C32B37',
  },
  box9: {
    height: 200,
    width: '113%',
    backgroundColor: '#0A08081A',
    borderColor: '#FFFFFF1A',
    borderWidth: 1,
    borderRadius: 11,
    marginTop: 10,
    marginLeft: -20,
  },
  boxText10: {
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 35,
    color: '#FFFFFF',
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 10,
  },
  boxText11: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 25,
    color: '#B3B3B3',
    marginLeft: 20,
  },
  lineButton: {
    height: 15,
    width:'90%',
    backgroundColor: '#555',
    borderRadius: 8,
    marginTop: 30,
    marginLeft:20
  },
  lineButton1: {
    width: '70%',
    backgroundColor: '#FFFFFF',
    height: 15,
    borderRadius: 8,
  },
});

export default PreviousInterviewReport;
