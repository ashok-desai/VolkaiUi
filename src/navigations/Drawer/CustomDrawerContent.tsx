import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface CustomDrawerContentProps {
  navigation: any;
}

const CustomDrawerContent: React.FC<CustomDrawerContentProps> = ({
  navigation,
}) => {
  const handleLogout = () => {
    navigation.navigate('LoginScreen');
  };

  return (
    <View style={{flex: 1}}>
      <LinearGradient
        colors={['#000000', '#1a237e', '#000000']}
        start={{x: 0.4, y: -1}}
        end={{x: 3, y: 0.9}}
        style={StyleSheet.absoluteFill}
      />
      <View style={styles.drawerContainer}>
        <View style={styles.drawerHeader}>
          <View style={styles.searchContainer}>
            <Image
              source={require('../../assets/images/searchicon.png')}
              style={styles.searchIcon}
            />
            <TextInput
              placeholder="Search chat history"
              placeholderTextColor="#FFFFFF"
              style={styles.searchInput}
            />
          </View>

          <Image
            source={require('../../assets/images/volkai1.png')}
            style={styles.image}
          />

          <Image
            source={require('../../assets/images/profile.png')}
            style={styles.image1}
          />

          <Text style={styles.text}>Account</Text>

          <TouchableOpacity
            style={styles.touchArea}
            onPress={() => navigation.navigate('AccountScreen')}>
            <Image
              source={require('../../assets/images/righticon.png')}
              style={styles.image2}
            />
          </TouchableOpacity>

          <Image
            source={require('../../assets/images/image14.png')}
            style={styles.image3}
          />
          <Text style={styles.text2}>Volkai HR</Text>
          <TouchableOpacity
            style={styles.touchArea1}
            onPress={() => navigation.navigate('AiPoweredInterView')}>
            <Image
              source={require('../../assets/images/righticon.png')}
              style={styles.image4}
            />
          </TouchableOpacity>
          <View style={styles.divider} />
          <Text style={styles.text3}>Recent Chats</Text>
          <Text style={styles.text4}>Web Page Design - CSS/HTML/...</Text>
          <Text style={styles.text5}>AI Impact On UI/UX Design</Text>
          <Text style={styles.text6}>Web Page Design - CSS/HTML/...</Text>
          <Text style={styles.text7}>AI Impact On UI/UX Design</Text>
          <Text style={styles.text8}>Last Months</Text>
          <Text style={styles.text9}>Web Page Design - CSS/HTML/...</Text>
          <Text style={styles.text10}>AI Impact On UI/UX Design</Text>

          <Image
            source={require('../../assets/images/image15.png')}
            style={styles.image5}
          />
          <Text style={styles.text11}>Volkai</Text>

          <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
            <Image
              source={require('../../assets/images/logout.png')}
              style={styles.image6}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    padding: 20,
  },
  drawerHeader: {
    marginBottom: 20,
    marginTop: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    borderColor: '#BBBBBB',
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 10,
    backgroundColor: '#1a237e',
    marginTop: 10,
    marginLeft: -10,
  },
  searchIcon: {
    width: 22,
    height: 22,
    tintColor: '#FFFFFF',
  },
  searchInput: {
    flex: 1,
    paddingLeft: 10,
    fontSize: 16,
    color: '#FFFFFF',
    backgroundColor: 'transparent',
  },
  image: {
    marginTop: 15,
    marginLeft: -10,
  },
  image1: {
    marginTop: 20,
    marginLeft: -10,
  },
  text: {
    color: 'white',
    marginLeft: '15%',
    lineHeight: 25,
    fontSize: 26,
    fontWeight: '400',
    marginTop: -23,
  },
  touchArea: {
    position: 'absolute',
    top: 140,
    right: -5,
    padding: 15,
  },
  touchArea1: {
    position: 'absolute',
    top: 180,
    right: -12,
    padding: 15,
  },
  image2: {
    marginTop: -15,
    marginLeft: '100%',
  },
  image3: {
    marginTop: 20,
    marginLeft: -10,
  },
  text2: {
    color: 'white',
    marginLeft: '15%',
    lineHeight: 25,
    fontSize: 26,
    fontWeight: '400',
    marginTop: -23,
  },
  image4: {
    marginTop: -15,
    marginLeft: '97%',
  },
  divider: {
    marginTop: 20,
    height: 1,
    backgroundColor: '#FFFFFF',
    width: '105%',
    opacity: 0.4,
    marginLeft: -5,
  },
  text3: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 19,
    marginTop: 20,
    marginLeft: -5,
    color: '#F38835',
    textShadowColor: '#C02D2B',
    textShadowRadius: 1,
  },
  text4: {
    fontSize: 19,
    fontWeight: '500',
    lineHeight: 23,
    marginTop: 20,
    marginLeft: 5,
    color: '#FFF',
    textShadowRadius: 1,
  },
  text5: {
    fontSize: 19,
    fontWeight: '500',
    lineHeight: 23,
    marginTop: 20,
    marginLeft: 5,
    color: '#FFF',
    textShadowRadius: 1,
  },
  text6: {
    fontSize: 19,
    fontWeight: '500',
    lineHeight: 23,
    marginTop: 20,
    marginLeft: 5,
    color: '#FFF',
    textShadowRadius: 1,
  },
  text7: {
    fontSize: 19,
    fontWeight: '500',
    lineHeight: 23,
    marginTop: 20,
    marginLeft: 5,
    color: '#FFF',
    textShadowRadius: 1,
  },
  text8: {
    fontSize: 19,
    fontWeight: '500',
    lineHeight: 23,
    marginTop: 45,
    marginLeft: -5,
    color: '#F38835',
    textShadowColor: '#C02D2B',
    textShadowRadius: 1,
  },
  text9: {
    fontSize: 19,
    fontWeight: '500',
    lineHeight: 23,
    marginTop: 20,
    marginLeft: 5,
    color: '#FFF',
    textShadowRadius: 1,
  },
  text10: {
    fontSize: 19,
    fontWeight: '500',
    lineHeight: 23,
    marginTop: 20,
    marginLeft: 5,
    color: '#FFF',
    textShadowRadius: 1,
  },
  image5: {
    marginTop: '50%',
    marginLeft: -5,
    width: 52,
    height: 52,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#F38835',
    shadowColor: '#C02D2B',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 5,
  },
  text11: {
    fontSize: 29,
    fontWeight: 'bold',
    marginTop: -47,
    marginLeft: '25%',
    color: '#FFF',
    textShadowRadius: 2,
  },
  image6: {
    width: 55,
    height: 55,
    marginLeft: '82%',
  },
  logoutButton: {
    position: 'absolute',
    bottom: -8,
    left: 8,
    alignItems: 'flex-end',
    paddingHorizontal: 20,
  },
});

export default CustomDrawerContent;
