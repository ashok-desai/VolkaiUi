import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const {width} = Dimensions.get('window');
interface CustomDrawerContentProps {
  navigation: any;
}
const AccountScreen: React.FC<CustomDrawerContentProps> = ({
  navigation,
}) => {
  const handleLogout = () => {
    navigation.navigate('LoginScreen');
  };
  return (
    <LinearGradient
      colors={['#000000', '#1a237e', '#000000']}
      start={{x: 0.4, y: -2}}
      end={{x: 4, y: 0.5}}
      style={styles.container}>
      <View style={styles.topBox}>
        <TouchableOpacity>
          <Image
            source={require('../../assets/images/lefticon.png')}
            style={styles.leftIcon}
          />
        </TouchableOpacity>
        <Text style={styles.title}>Account</Text>
      </View>

      <View style={styles.imageContainer}>
        <View style={styles.profileWrapper}>
          <LinearGradient
            colors={['#F38835', '#C02D2B']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            style={styles.gradientBorder}>
            <Image
              source={require('../../assets/images/volkai2.png')}
              style={styles.volkaiImage}
              resizeMode="cover"
            />
          </LinearGradient>

          <TouchableOpacity style={styles.editIconWrapper}>
            <Image
              source={require('../../assets/images/editimage1.png')}
              style={styles.editIcon}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.text}>Ashok Desai</Text>
        <View style={styles.image16Wrapper}>
          <Image
            source={require('../../assets/images/image16.png')}
            style={styles.image16}
            resizeMode="contain"
          />
          <TouchableOpacity>
            <Text style={styles.text1}>Contact Us</Text>
          </TouchableOpacity>
          <Image
            source={require('../../assets/images/image17.png')}
            style={styles.image17}
            resizeMode="contain"
          />
          <TouchableOpacity>
            <Text style={styles.text2}>Whatsapp Support</Text>
          </TouchableOpacity>
          <Image
            source={require('../../assets/images/image18.png')}
            style={styles.image18}
            resizeMode="contain"
          />
          <TouchableOpacity>
            <Text style={styles.text3}>FAQ</Text>
          </TouchableOpacity>
          <Image
            source={require('../../assets/images/image19.png')}
            style={styles.image19}
            resizeMode="contain"
          />
          <TouchableOpacity>
            <Text style={styles.text4}>Grievance Support</Text>
          </TouchableOpacity>
          <Image
            source={require('../../assets/images/image20.png')}
            style={styles.image20}
            resizeMode="contain"
          />
          <TouchableOpacity>
            <Text style={styles.text5}>Privacy Policy </Text>
          </TouchableOpacity>
          <Image
            source={require('../../assets/images/image21.png')}
            style={styles.image21}
            resizeMode="contain"
          />
          <TouchableOpacity>
            <Text style={styles.text6}>Refund & Cancellation Policy</Text>
          </TouchableOpacity>
          <Image
            source={require('../../assets/images/image22.png')}
            style={styles.image22}
            resizeMode="contain"
          />
          <TouchableOpacity>
            <Text style={styles.text7}>Terms and Conditions</Text>
          </TouchableOpacity>
          <Image
            source={require('../../assets/images/image23.png')}
            style={styles.image23}
            resizeMode="contain"
          />
          <TouchableOpacity>
            <Text style={styles.text8}>Report Content</Text>
          </TouchableOpacity>
          <Image
            source={require('../../assets/images/image24.png')}
            style={styles.image24}
            resizeMode="contain"
          />
          <TouchableOpacity>
            <Text style={styles.text9}>Rate us</Text>
          </TouchableOpacity>
          <Image
            source={require('../../assets/images/image25.png')}
            style={styles.image25}
            resizeMode="contain"
          />
          <TouchableOpacity>
            <Text style={styles.text10}>App share</Text>
          </TouchableOpacity>
          <Image
            source={require('../../assets/images/image26.png')}
            style={styles.image26}
            resizeMode="contain"
          />
          <TouchableOpacity>
            <Text style={styles.text11}>About Us</Text>
          </TouchableOpacity>
          <Image
            source={require('../../assets/images/delete.png')}
            style={styles.delete}
            resizeMode="contain"
          />
          <TouchableOpacity>
            <Text style={styles.text12}>Delete Account</Text>
          </TouchableOpacity>
          <Image
            source={require('../../assets/images/logout1.png')}
            style={styles.logout}
            resizeMode="contain"
          />
           <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
            <Text style={styles.text13}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 50,
    marginHorizontal: -5,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.07)',
    borderWidth: 0,
    borderColor: 'rgba(255,255,255,0.2)',
  },
  leftIcon: {
    width: 20,
    height: 20,
    tintColor: '#FFF',
    marginLeft: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: '400',
    color: '#FFF',
    marginLeft: 20,
  },
  imageContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
  profileWrapper: {
    position: 'relative',
  },
  gradientBorder: {
    padding: 2,
    borderRadius: (width * 0.3) / 2 + 2,
  },
  volkaiImage: {
    width: width * 0.3,
    height: width * 0.3,
    borderRadius: (width * 0.3) / 2,
  },
  editIconWrapper: {
    position: 'absolute',
    bottom: 0,
    right: -5,
    padding: 4,
  },
  editIcon: {
    width: 30,
    height: 30,
  },
  text: {
    color: 'white',
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 26,
    lineHeight: 35,
  },
  image16Wrapper: {
    marginTop: 10,
    width: '100%',
    paddingLeft: 40,
    alignItems: 'flex-start',
  },
  image16: {
    width: 60,
    height: 25,
    marginLeft: -40,
    marginTop: 0,
  },
  text1: {
    color: 'white',
    marginLeft: 30,
    marginTop: -27,
    fontWeight: '400',
    fontSize: 19,
    lineHeight: 26,
  },
  image17: {
    width: 60,
    height: 25,
    marginLeft: -40,
    marginTop: 20,
  },
  text2: {
    color: 'white',
    marginLeft: 30,
    marginTop: -27,
    fontWeight: '400',
    fontSize: 19,
    lineHeight: 26,
  },
  image18: {
    width: 60,
    height: 25,
    marginLeft: -40,
    marginTop: 20,
  },
  text3: {
    color: 'white',
    marginLeft: 30,
    marginTop: -27,
    fontWeight: '400',
    fontSize: 19,
    lineHeight: 26,
  },
  image19: {
    width: 60,
    height: 25,
    marginLeft: -40,
    marginTop: 20,
  },
  text4: {
    color: 'white',
    marginLeft: 30,
    marginTop: -27,
    fontWeight: '400',
    fontSize: 19,
    lineHeight: 26,
  },
  image20: {
    width: 60,
    height: 25,
    marginLeft: -40,
    marginTop: 20,
  },
  text5: {
    color: 'white',
    marginLeft: 30,
    marginTop: -27,
    fontWeight: '400',
    fontSize: 19,
    lineHeight: 26,
  },
  image21: {
    width: 60,
    height: 25,
    marginLeft: -40,
    marginTop: 20,
  },
  text6: {
    color: 'white',
    marginLeft: 30,
    marginTop: -27,
    fontWeight: '400',
    fontSize: 19,
    lineHeight: 26,
  },
  image22: {
    width: 60,
    height: 25,
    marginLeft: -40,
    marginTop: 20,
  },
  text7: {
    color: 'white',
    marginLeft: 30,
    marginTop: -27,
    fontWeight: '400',
    fontSize: 19,
    lineHeight: 26,
  },
  image23: {
    width: 60,
    height: 25,
    marginLeft: -40,
    marginTop: 20,
  },
  text8: {
    color: 'white',
    marginLeft: 30,
    marginTop: -27,
    fontWeight: '400',
    fontSize: 19,
    lineHeight: 26,
  },
  image24: {
    width: 60,
    height: 25,
    marginLeft: -40,
    marginTop: 20,
  },
  text9: {
    color: 'white',
    marginLeft: 30,
    marginTop: -27,
    fontWeight: '400',
    fontSize: 19,
    lineHeight: 26,
  },
  image25: {
    width: 60,
    height: 25,
    marginLeft: -40,
    marginTop: 20,
  },
  text10: {
    color: 'white',
    marginLeft: 30,
    marginTop: -27,
    fontWeight: '400',
    fontSize: 19,
    lineHeight: 26,
  },
  image26: {
    width: 60,
    height: 25,
    marginLeft: -40,
    marginTop: 20,
  },
  text11: {
    color: 'white',
    marginLeft: 30,
    marginTop: -27,
    fontWeight: '400',
    fontSize: 19,
    lineHeight: 26,
  },
  delete: {
    width: 60,
    height: 25,
    marginLeft: -40,
    marginTop: 20,
  },
  text12: {
    color: '#FF1414',
    marginLeft: 30,
    marginTop: -27,
    fontWeight: '400',
    fontSize: 19,
    lineHeight: 26,
  },
  logout: {
    width: 60,
    height: 25,
    marginLeft: -40,
    marginTop: 20,
  },
  text13: {
    color: '#FF1414',
    marginLeft: 30,
    marginTop: -27,
    fontWeight: '400',
    fontSize: 19,
    lineHeight: 26,
  },
  logoutButton: {
    position: 'absolute',
    bottom: -8,
    left: 8,
    alignItems: 'flex-end',
    paddingHorizontal: 20,
  },
});

export default AccountScreen;
