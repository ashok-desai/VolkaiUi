import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';

const {width} = Dimensions.get('window');

const ProfileScreen = () => {
  const navigation = useNavigation();

  const experiences = [
    {
      company: 'Ck Motion Picures',
      role: 'Script Writer',
      start: '2012',
      end: '2013',
    },
    {
      company: 'Vaaraahi Chalana Chitram',
      role: 'Script Writer',
      start: '2013',
      end: '2014',
    },
    {
      company: 'Arka Media Works',
      role: 'Script Writer',
      start: '2015',
      end: '2016',
    },
    {company: 'Sommi Films', role: 'Script Writer', start: '2016', end: '2017'},
    {
      company: 'Get Indian Online',
      role: 'Script Writer',
      start: '2015',
      end: '2016',
    },
    {company: 'Zezo', role: 'Script Writer', start: '2016', end: '2017'},
  ];

  const education = [
    {
      degree: 'Bachelor of Arts',
      role: 'Script Writer',
      start: '',
      end: '',
    },
    {degree: 'MBA', role: 'Script Writer', start: '', end: ''},
  ];

  return (
    <LinearGradient
      colors={['#000000', '#1a237e', '#000000']}
      start={{x: 0.4, y: -2}}
      end={{x: 3.5, y: 0.2}}
      style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../../assets/images/lefticon.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>My Profile</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.box}>
          <Text style={styles.text}>Dev Desai</Text>
          <TouchableOpacity>
            <LinearGradient
              colors={['#F16C0E', '#C2312C']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              style={styles.gradientBox}>
              <Text style={styles.gradientBoxText}>ATS Score</Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity>
            <LinearGradient
              colors={['#F16C0E', '#C2312C']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              style={styles.gradientBox1}>
              <Text style={styles.gradientBoxText1}>Previous Interview</Text>
            </LinearGradient>
          </TouchableOpacity>
          <View style={styles.box1}>
            <Image
              source={require('../../assets/images/icon1.png')}
              style={styles.iconImage}
            />
            <Text style={styles.text1}>Dev@Zezosoft.com</Text>
          </View>
          <View style={styles.box2}>
            <Image
              source={require('../../assets/images/icon2.png')}
              style={styles.iconImage1}
            />
            <Text style={styles.text2}>+91-8779549867</Text>
          </View>
        </View>
        <View style={styles.box3}>
          <Text style={styles.text3}>Skills*</Text>

          <TouchableOpacity style={styles.box4}>
            <Text style={styles.text4}>Team Management</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.box5}>
            <Text style={styles.text5}>Writing/Direction</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.box6}>
            <Text style={styles.text6}>Marketing</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.box7}>
            <Text style={styles.text7}>Product Development</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.box8}>
            <Text style={styles.text8}>Filmmaking</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.box9}>
            <Text style={styles.text9}>Planning</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.box10}>
            <Text style={styles.text10}>Software Development</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.box11}>
          <View style={styles.workExperienceSection}>
            <Text style={styles.sectionTitle}>Work Experience</Text>

            {experiences.map((item, index) => (
              <View key={index} style={styles.timelineItem}>
                <View style={styles.leftContent}>
                  <View style={styles.dotWithLine}>
                    <View
                      style={[
                        styles.dottedLine,
                        index === experiences.length + 1 && {height: 0},
                      ]}
                    />
                  </View>
                  <View style={styles.companyInfo}>
                    <Text style={styles.company}>{item.company}</Text>
                    <Text style={styles.role}>{item.role}</Text>
                  </View>
                </View>

                <View style={styles.rightContent}>
                  <Text style={styles.dates}>
                    {item.start} — {item.end}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </View>
        <View style={styles.box12}>
          <View style={styles.workExperienceSection}>
            <Text style={styles.sectionTitle}>Education</Text>

            {education.map((item, index) => (
              <View key={index} style={styles.timelineItem}>
                <View style={styles.leftContent}>
                  <View style={styles.dotWithLine}>
                    <View
                      style={[
                        styles.dottedLine,
                        index === education.length + 1 && {height: 0},
                      ]}
                    />
                  </View>
                  <View style={styles.companyInfo}>
                    <Text style={styles.company}>{item.degree}</Text>
                    <Text style={styles.role}>{item.role}</Text>
                  </View>
                </View>

                <View style={styles.rightContent}>
                  <Text style={styles.dates1}>
                    {item.start} — {item.end}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </View>
        <View style={styles.box13}>
          <Text style={styles.box13Text}>Certifications</Text>
          <Text style={styles.box13Text1}>No experience listed.</Text>
        </View>
        <View style={styles.box14}>
          <Text style={styles.box14Text}>Upload Resume</Text>
          <Text style={styles.box14Text1}>Choose File No file chosen</Text>
          <TouchableOpacity>
            <LinearGradient
              colors={['#F16C0E', '#C2312C']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              style={styles.gradientBox3}>
              <Image
                source={require('../../assets/images/image41.png')}
                style={styles.image2}
              />
              <Text style={styles.gradientBoxText3}>Ashok Dev-01.pdf</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  icon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginRight: 15,
    marginTop: 45,
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginLeft: 15,
    marginTop: 40,
  },
  scrollContent: {
    padding: 20,
    marginTop: -10,
  },
  box: {
    height: 275,
    width: '105%',
    backgroundColor: '#1a223c',
    borderColor: '#F16C0E52',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 15,
    marginLeft: -10,
  },
  text: {
    color: '#FFFFFF',
    marginLeft: 20,
    marginTop: 25,
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 19,
  },
  gradientBox: {
    height: 35,
    width: '25%',
    paddingHorizontal: 12,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    marginTop: 20,
    marginLeft: 15,
  },
  gradientBoxText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
    marginLeft: -5,
  },
  gradientBox1: {
    height: 36,
    width: '45%',
    paddingHorizontal: 12,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    marginTop: -35,
    marginLeft: 115,
  },
  gradientBoxText1: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
  box1: {
    height: 55,
    width: '95%',
    backgroundColor: '#1a223c',
    borderColor: '#F16C0E52',
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 15,
    marginLeft: 10,
  },
  iconImage: {
    height: 17,
    width: 20,
    marginLeft: 10,
    marginTop: 18,
  },
  text1: {
    color: '#FFFFFF',
    fontWeight: '500',
    fontSize: 17,
    lineHeight: 29,
    marginLeft: 45,
    marginTop: -24,
  },
  box2: {
    height: 55,
    width: '95%',
    backgroundColor: '#1a223c',
    borderColor: '#F16C0E52',
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 15,
    marginLeft: 10,
  },
  iconImage1: {
    height: 17,
    width: 20,
    marginLeft: 10,
    marginTop: 18,
  },
  text2: {
    color: '#FFFFFF',
    fontWeight: '500',
    fontSize: 17,
    lineHeight: 29,
    marginLeft: 45,
    marginTop: -24,
  },
  box3: {
    height: 220,
    width: '105%',
    backgroundColor: '#1a223c',
    borderColor: '#F16C0E52',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 15,
    marginLeft: -10,
  },
  text3: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 19,
    lineHeight: 26,
    marginLeft: 20,
    marginTop: 20,
  },
  box4: {
    height: 40,
    width: '43%',
    backgroundColor: '#1a223c',
    borderColor: '#F16C0E52',
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 10,
    marginLeft: 10,
  },
  text4: {
    color: '#FFFFFF',
    fontWeight: '500',
    fontSize: 15,
    lineHeight: 23,
    marginLeft: 10,
    marginTop: 5,
  },
  box5: {
    height: 40,
    width: '38%',
    backgroundColor: '#1a223c',
    borderColor: '#F16C0E52',
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 10,
    marginLeft: 10,
  },
  text5: {
    color: '#FFFFFF',
    fontWeight: '500',
    fontSize: 15,
    lineHeight: 23,
    marginLeft: 10,
    marginTop: 5,
  },
  box6: {
    height: 40,
    width: '26%',
    backgroundColor: '#1a223c',
    borderColor: '#F16C0E52',
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 10,
    marginLeft: 10,
  },
  text6: {
    color: '#FFFFFF',
    fontWeight: '500',
    fontSize: 15,
    lineHeight: 23,
    marginLeft: 10,
    marginTop: 5,
  },
  box7: {
    height: 40,
    width: '46%',
    backgroundColor: '#1a223c',
    borderColor: '#F16C0E52',
    borderWidth: 1,
    borderRadius: 10,
    marginTop: -141,
    marginLeft: 180,
  },
  text7: {
    color: '#FFFFFF',
    fontWeight: '500',
    fontSize: 15,
    lineHeight: 23,
    marginLeft: 10,
    marginTop: 5,
  },
  box8: {
    height: 40,
    width: '27%',
    backgroundColor: '#1a223c',
    borderColor: '#F16C0E52',
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 10,
    marginLeft: 155,
  },
  text8: {
    color: '#FFFFFF',
    fontWeight: '500',
    fontSize: 15,
    lineHeight: 23,
    marginLeft: 10,
    marginTop: 5,
  },
  box9: {
    height: 40,
    width: '27%',
    backgroundColor: '#1a223c',
    borderColor: '#F16C0E52',
    borderWidth: 1,
    borderRadius: 10,
    marginTop: -40,
    marginLeft: 262,
  },
  text9: {
    color: '#FFFFFF',
    fontWeight: '500',
    fontSize: 15,
    lineHeight: 23,
    marginLeft: 10,
    marginTop: 5,
  },
  box10: {
    height: 40,
    width: '50%',
    backgroundColor: '#1a223c',
    borderColor: '#F16C0E52',
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 11,
    marginLeft: 115,
  },
  text10: {
    color: '#FFFFFF',
    fontWeight: '500',
    fontSize: 15,
    lineHeight: 23,
    marginLeft: 10,
    marginTop: 5,
  },
  box11: {
    height: '33.5%',
    width: '105%',
    backgroundColor: '#1a223c',
    borderColor: '#F16C0E52',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 15,
    marginLeft: -10,
  },
  workExperienceSection: {
    marginVertical: 20,
    marginHorizontal: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 30,
    marginLeft: 11,
  },
  timelineItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 25,
  },
  leftContent: {
    flexDirection: 'row',
    flex: 1,
  },
  dotWithLine: {
    alignItems: 'center',
    marginRight: 10,
    width: 20,
  },

  dottedLine: {
    flex: 1,
    width: 1,
    height: 60,
    backgroundColor: '#F16C0E',
    borderStyle: 'dotted',
    borderWidth: 1,
    borderColor: '#F16C0E',
    marginTop: -5,
  },
  companyInfo: {
    flex: 1,
  },
  company: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  role: {
    color: '#BBBBBB',
    fontSize: 13,
  },
  rightContent: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    width: 80,
  },
  dates: {
    color: '#999999',
    fontSize: 12,
    marginTop: 20,
    marginRight: 10,
  },
  dates1: {
    color: '#999999',
    fontSize: 12,
    marginTop: 20,
    marginRight: 30,
  },
  box12: {
    height: 205,
    width: '105%',
    backgroundColor: '#1a223c',
    borderColor: '#F16C0E52',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 15,
    marginLeft: -10,
  },
  box13: {
    height: 100,
    width: '105%',
    backgroundColor: '#1a223c',
    borderColor: '#F16C0E52',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 15,
    marginLeft: -10,
  },
  box13Text: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 26,
    marginLeft: 20,
    marginTop: 20,
  },
  box13Text1: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '500',
    lineHeight: 28,
    marginLeft: 20,
    marginTop: 5,
  },
  box14: {
    height: '11%',
    width: '105%',
    backgroundColor: '#1a223c',
    borderColor: '#F16C0E52',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: '10%',
    marginLeft: -10,
  },
  box14Text: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 26,
    marginLeft: 105,
    marginTop: 30,
  },
  box14Text1: {
    color: '#D9D9D9',
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 22,
    marginLeft: 90,
    marginTop: 5,
  },
  gradientBox3: {
    height: 50,
    width: '92%',
    paddingHorizontal: 12,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    marginTop: 30,
    marginLeft: 15,
  },
  image2: {
    width: 19,
    height: 23,
    marginLeft: '-55%',
    marginTop: 0,
    tintColor: 'white',
  },
  gradientBoxText3: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: -5,
    marginTop: -22,
  },
});

export default ProfileScreen;
