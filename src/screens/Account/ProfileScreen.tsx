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
          <LinearGradient
            colors={['#F16C0E', '#C2312C']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            style={styles.gradientBox}>
            <Text style={styles.gradientBoxText}>ATS Score</Text>
          </LinearGradient>
          <LinearGradient
            colors={['#F16C0E', '#C2312C']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            style={styles.gradientBox1}>
            <Text style={styles.gradientBoxText1}>Previous Interview</Text>
          </LinearGradient>
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
          <View style={styles.box4}>
            <Text style={styles.text4}>Team Management</Text>
          </View>
          <View style={styles.box5}>
            <Text style={styles.text5}>Writing/Direction</Text>
          </View>
          <View style={styles.box6}>
            <Text style={styles.text6}>Marketing</Text>
          </View>
          <View style={styles.box7}>
            <Text style={styles.text7}>Product Development</Text>
          </View>
          <View style={styles.box8}>
            <Text style={styles.text8}>Filmmaking</Text>
          </View>
          <View style={styles.box9}>
            <Text style={styles.text9}>Planning</Text>
          </View>
          <View style={styles.box10}>
            <Text style={styles.text10}>Software Development</Text>
          </View>
        </View>
        <View style={styles.box11}>
          <Text style={styles.boxText1}>Work Experience</Text>
          <View style={styles.verticalLine} />
          <Text style={styles.boxText2}>Ck Motion Picures</Text>
          <Text style={styles.boxText3}>Script Writer</Text>
          <Text style={styles.boxText4}>2012 - 2013</Text>
          <Text style={styles.boxText5}>Vaaraahi Chalana Chitram</Text>
          <Text style={styles.boxText6}>Script Writer</Text>
          <Text style={styles.boxText7}>2013 - 2014</Text>
          <Text style={styles.boxText5}>Arka Media Works</Text>
          <Text style={styles.boxText6}>Script Writer</Text>
          <Text style={styles.boxText7}>2015 - 2016</Text>
          <Text style={styles.boxText5}>Sommi Films</Text>
          <Text style={styles.boxText6}>Script Writer</Text>
          <Text style={styles.boxText7}>2016 - 2017</Text>
          <Text style={styles.boxText5}>Get Indian Online</Text>
          <Text style={styles.boxText6}>Script Writer</Text>
          <Text style={styles.boxText7}>2015 - 2016</Text>
          <Text style={styles.boxText5}>Zezo</Text>
          <Text style={styles.boxText6}>Script Writer</Text>
          <Text style={styles.boxText7}>2016 - 2017</Text>
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
    height: '55%',
    width: '105%',
    backgroundColor: '#1a223c',
    borderColor: '#F16C0E52',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 15,
    marginLeft: -10,
  },
  boxText1: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 19,
    lineHeight: 26,
    marginTop: 20,
    marginLeft: 20,
  },
  verticalLine: {
    position: 'absolute',
    left: 20,
    top: 60,
    width: 1,
    height: '86%',
    backgroundColor: '#F16C0E',
    zIndex: 1,
  },
  boxText2: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 15,
    lineHeight: 26,
    marginLeft: 40,
    marginTop: 20,
  },
  boxText3: {
    color: '#A2A2A2',
    fontWeight: '500',
    fontSize: 13,
    lineHeight: 23,
    marginLeft: 40,
    marginTop: 0,
  },
  boxText4: {
    color: '#A2A2A2',
    fontWeight: '500',
    fontSize: 13,
    lineHeight: 23,
    marginLeft: '75%',
    marginTop: -32,
  },
  boxText5: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 15,
    lineHeight: 26,
    marginLeft: 40,
    marginTop: 50,
  },
  boxText6: {
    color: '#A2A2A2',
    fontWeight: '500',
    fontSize: 13,
    lineHeight: 23,
    marginLeft: 40,
    marginTop: 0,
  },
  boxText7: {
    color: '#A2A2A2',
    fontWeight: '500',
    fontSize: 13,
    lineHeight: 23,
    marginLeft: '75%',
    marginTop: -32,
  },
});

export default ProfileScreen;
