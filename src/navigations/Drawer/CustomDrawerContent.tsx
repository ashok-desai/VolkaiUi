import React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';

type NavigationProp = NativeStackNavigationProp<{
  AccountScreen: undefined;
  AiPoweredInterView: undefined;
  PreviousInterview: undefined;
  LiveInterviewBeta: undefined;
  AiCareerAdvisor: undefined;
  PrepareWithAi: undefined;
  LoginScreen: undefined;
  AiResumeBuilder: undefined;
  AiSmartJobApply: undefined;
  ConnectWithHiringManagers: undefined;
  GetDemo: undefined;
  ProfileScreen: undefined;
}>;
const CustomDrawerContent: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();

  const handleLogout = () => {
    navigation.navigate('LoginScreen');
  };
  const goToProfile = () => {
    navigation.navigate('ProfileScreen');
  };
  return (
    <View style={{flex: 1}}>
      <LinearGradient
        colors={['#000000', '#1a237e', '#000000']}
        start={{x: 0.4, y: -2}}
        end={{x: 3, y: 0.9}}
        style={StyleSheet.absoluteFill}
      />

      <View style={styles.boxContainer}>
        <Image
          source={require('../../assets/images/volkaihr.png')}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      <View style={styles.Container}>
        <Text style={styles.text}>Interview</Text>
        <Image
          source={require('../../assets/images/profile.png')}
          style={styles.image1}
        />
        <Text style={styles.text1}>Account</Text>

        <TouchableOpacity
          onPress={() => navigation.navigate('AccountScreen')}
          style={styles.touchArea}
          activeOpacity={0.7}>
          <Image
            source={require('../../assets/images/righticon.png')}
            style={styles.image2}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('AiPoweredInterView')}
          activeOpacity={0.8}
          style={styles.boxContainer1}>
          <Image
            source={require('../../assets/images/image28.png')}
            style={styles.image3}
          />
          <Text style={styles.text2}>AI-Powered Interview</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('LiveInterviewBeta')}
          activeOpacity={0.8}
          style={styles.boxContainer2}>
          <Image
            source={require('../../assets/images/image29.png')}
            style={styles.image4}
          />
          <Text style={styles.text3}>Live Interview (Beta)</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('PreviousInterview')}
          activeOpacity={0.8}
          style={styles.boxContainer3}>
          <Image
            source={require('../../assets/images/image30.png')}
            style={styles.image5}
          />
          <Text style={styles.text4}>Previous Interview Report</Text>
        </TouchableOpacity>

        <LinearGradient
          colors={['#F16C0E', '#C2312C']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          style={styles.boxContainer4}>
          <TouchableOpacity
            onPress={() => navigation.navigate('PrepareWithAi')}
            activeOpacity={0.8}
            style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={require('../../assets/images/image31.png')}
              style={styles.image6}
            />
            <Text style={styles.text5}>Prepare with AI</Text>
          </TouchableOpacity>
        </LinearGradient>
        <Text style={styles.text6}>Career Tools</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('AiCareerAdvisor')}
          activeOpacity={0.8}
          style={styles.boxContainer5}>
          <Image
            source={require('../../assets/images/image32.png')}
            style={styles.image7}
          />
          <Text style={styles.text7}>AI Career Advisor</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('AiResumeBuilder')}
          activeOpacity={0.8}
          style={styles.boxContainer6}>
          <Image
            source={require('../../assets/images/image33.png')}
            style={styles.image8}
          />
          <Text style={styles.text8}>AI Resume Builder</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('AiSmartJobApply')}
          activeOpacity={0.8}
          style={styles.boxContainer7}>
          <Image
            source={require('../../assets/images/image34.png')}
            style={styles.image9}
          />
          <Text style={styles.text9}>AI Smart Job Apply</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('ConnectWithHiringManagers')}
          activeOpacity={0.8}
          style={styles.boxContainer8}>
          <Image
            source={require('../../assets/images/image35.png')}
            style={styles.image10}
          />
          <Text style={styles.text10}>Connect with Hiring</Text>
          <Text style={styles.text11}> Managers</Text>
        </TouchableOpacity>
        <Text style={styles.text12}>Demo & Learning</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('GetDemo')}
          activeOpacity={0.8}
          style={styles.boxContainer9}>
          <Image
            source={require('../../assets/images/image36.png')}
            style={styles.image11}
          />
          <Text style={styles.text13}>Get Demo</Text>
        </TouchableOpacity>
        <View style={{marginBottom: 20, alignItems: 'center'}}>
          <TouchableOpacity onPress={goToProfile}>
            <Image
              source={require('../../assets/images/image15.png')}
              style={styles.image12}
            />
          </TouchableOpacity>
        </View>
        <View style={{marginBottom: 20, alignItems: 'center'}}>
          <Text style={styles.text14}>Volkai</Text>

          <TouchableOpacity onPress={handleLogout}>
            <Image
              source={require('../../assets/images/logout.png')}
              style={styles.image13}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  boxContainer: {
    marginTop: 40,
    marginHorizontal: 20,
    width: '95%',
    height: 60,
    backgroundColor: '#1b2a49',
    borderRadius: 15,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
  },
  image: {
    width: 190,
    height: 190,
  },
  Container: {
    marginTop: 10,
    marginLeft: 30,
  },
  text: {
    color: '#D8D8D8',
    fontSize: 20,
    fontWeight: '400',
    marginLeft: -15,
    marginTop: -10,
  },
  image1: {
    marginTop: 15,
    marginLeft: -15,
  },
  text1: {
    color: '#FFFFFF',
    marginLeft: 30,
    marginTop: -27,
    fontSize: 22,
    fontWeight: 'bold',
  },
  touchArea: {
    position: 'absolute',
    right: -10,
    top: 45,
    padding: 10,
  },
  image2: {
    marginLeft: '90%',
    marginTop: -18,
  },
  boxContainer1: {
    marginTop: 10,
    marginHorizontal: 20,
    width: '105%',
    height: 50,
    backgroundColor: '#252525',
    borderColor: '#3A3F4D4F',
    borderRadius: 10,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: -20,
  },
  image3: {
    marginLeft: '-80%',
    width: 27,
    height: 27,
    marginBottom: 10,
  },
  touchArea1: {
    position: 'absolute',
    top: 32,
    padding: 10,
  },
  text2: {
    color: '#FFFFFF',
    marginTop: -34,
    marginRight: 15,
    fontSize: 19,
  },
  boxContainer2: {
    marginTop: 5,
    marginHorizontal: 20,
    width: '105%',
    height: 50,
    backgroundColor: '#252525',
    borderColor: '#3A3F4D4F',
    borderRadius: 10,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: -20,
  },
  image4: {
    marginLeft: '-80%',
    width: 27,
    height: 27,
    marginBottom: 10,
  },
  text3: {
    color: '#FFFFFF',
    marginTop: -38,
    marginRight: 15,
    fontSize: 19,
  },
  boxContainer3: {
    marginTop: 5,
    marginHorizontal: 20,
    width: '105%',
    height: 50,
    backgroundColor: '#252525',
    borderColor: '#3A3F4D4F',
    borderRadius: 10,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: -20,
  },
  image5: {
    marginLeft: '-80%',
    width: 27,
    height: 27,
    marginBottom: 10,
  },
  text4: {
    color: '#FFFFFF',
    marginTop: -38,
    marginRight: -20,
    fontSize: 19,
  },
  boxContainer4: {
    marginTop: 5,
    marginHorizontal: 20,
    width: '105%',
    height: 50,
    borderRadius: 10,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: -20,
  },
  image6: {
    marginLeft: -110,
    width: 27,
    height: 27,
    marginRight: 10,
  },
  text5: {
    color: '#FFFFFF',
    fontSize: 19,
    marginLeft: 10,
  },
  text6: {
    color: '#D8D8D8',
    marginTop: 5,
    fontWeight: '400',
    fontSize: 15,
    marginLeft: -14,
  },
  boxContainer5: {
    marginTop: 5,
    marginHorizontal: 20,
    width: '105%',
    height: 50,
    backgroundColor: '#252525',
    borderColor: '#3A3F4D4F',
    borderRadius: 10,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: -20,
  },
  image7: {
    marginLeft: '-80%',
    width: 27,
    height: 27,
    marginBottom: 10,
  },
  text7: {
    color: '#FFFFFF',
    marginTop: -38,
    marginRight: 50,
    fontSize: 19,
  },
  boxContainer6: {
    marginTop: 5,
    marginHorizontal: 20,
    width: '105%',
    height: 50,
    backgroundColor: '#252525',
    borderColor: '#3A3F4D4F',
    borderRadius: 10,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: -20,
  },
  image8: {
    marginLeft: '-82%',
    width: 30,
    height: 20,
    marginBottom: 10,
  },
  text8: {
    color: '#FFFFFF',
    marginTop: -38,
    marginRight: 50,
    fontSize: 19,
  },
  boxContainer7: {
    marginTop: 5,
    marginHorizontal: 20,
    width: '105%',
    height: 50,
    backgroundColor: '#252525',
    borderColor: '#3A3F4D4F',
    borderRadius: 10,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: -20,
  },
  image9: {
    marginLeft: '-82%',
    height: 25,
    width: 30,
    marginBottom: 10,
  },
  text9: {
    color: '#FFFFFF',
    marginTop: -38,
    marginRight: 50,
    fontSize: 19,
  },
  boxContainer8: {
    marginTop: 5,
    marginHorizontal: 20,
    width: '105%',
    height: 65,
    backgroundColor: '#252525',
    borderColor: '#3A3F4D4F',
    borderRadius: 10,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: -20,
  },
  image10: {
    marginLeft: '-82%',
    width: 30,
    height: 33,
    marginTop: 5,
  },
  text10: {
    color: '#FFFFFF',
    marginTop: -40,
    marginRight: 40,
    fontSize: 19,
  },
  text11: {
    color: '#FFFFFF',
    marginTop: 0,
    marginRight: 120,
    fontSize: 19,
  },
  text12: {
    color: '#D8D8D8',
    fontWeight: '400',
    marginTop: 10,
    fontSize: 16,
  },
  boxContainer9: {
    marginTop: 5,
    marginHorizontal: 20,
    width: '105%',
    height: 50,
    backgroundColor: '#252525',
    borderColor: '#3A3F4D4F',
    borderRadius: 10,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: -20,
  },
  image11: {
    marginLeft: '-82%',
    marginBottom: 10,
  },
  text13: {
    color: '#FFFFFF',
    marginTop: -38,
    marginRight: 120,
    fontSize: 19,
  },
  image12: {
    marginTop: 60,
    width: 52,
    height: 52,
    marginLeft: '-55%',
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#F38835',
    shadowColor: '#C02D2B',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 5,
  },
  text14: {
    color: '#FFFFFF',
    marginLeft: '-40%',
    marginTop: -60,
    fontSize: 22,
    fontWeight: 'bold',
  },
  image13: {
    marginLeft: '70%',
    marginTop: -40,
    width: 50,
    height: 50,
  },
});

export default CustomDrawerContent;
