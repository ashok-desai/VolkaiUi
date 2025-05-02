import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';

type NavigationProp = NativeStackNavigationProp<{
  AccountScreen: undefined;
  AiPoweredInterView: undefined;
  PreviousInterviewReport: undefined;
  PreviousInterview: undefined;
  LiveInterviewBeta: undefined;
  VolkaiPremium: undefined;
  AiCareerAdvisor: undefined;
  PrepareWithAi: undefined;
  LoginScreen: undefined;
  AiResumeBuilder: undefined;
  AiSmartJobApply: undefined;
  ConnectWithHiringManagers: undefined;
  GetDemo: undefined;
  ProfileScreen: undefined;
}>;

const CustomDrawerContent: React.FC<DrawerContentComponentProps> = props => {
  const navigation = useNavigation<NavigationProp>();

  const handleLogout = () => {
    navigation.navigate('LoginScreen');
  };

  const goToProfile = () => {
    navigation.navigate('ProfileScreen');
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#000000', '#1a237e', '#000000']}
        start={{x: 0.4, y: -2}}
        end={{x: 3, y: 0.9}}
        style={StyleSheet.absoluteFill}
      />

      <View style={styles.logoContainer}>
        <Image
          source={require('../../assets/images/volkaihr.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.sectionTitle}>Interview</Text>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.accountContainer}>
          <Image
            source={require('../../assets/images/profile.png')}
            style={styles.profileIcon}
          />
          <Text style={styles.accountText}>Account</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('AccountScreen')}
            style={styles.rightArrow}>
            <Image
              source={require('../../assets/images/righticon.png')}
              style={styles.arrowIcon}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.linkContainer}>
          <DrawerItem
            title="AI-Powered Interview"
            icon={require('../../assets/images/image28.png')}
            onPress={() => navigation.navigate('AiPoweredInterView')}
          />
          <DrawerItem
            title="Live Interview (Beta)"
            icon={require('../../assets/images/image29.png')}
            onPress={() => navigation.navigate('LiveInterviewBeta')}
          />
          <DrawerItem
            title="Volkai Premium"
            icon={require('../../assets/images/premium.png')}
            onPress={() => navigation.navigate('VolkaiPremium')}
          />
          <DrawerItem
            title="Previous Interview"
            icon={require('../../assets/images/image30.png')}
            onPress={() => navigation.navigate('PreviousInterview')}
          />
          <DrawerItem
            title="Previous Interview Report"
            icon={require('../../assets/images/image30.png')}
            onPress={() => navigation.navigate('PreviousInterviewReport')}
          />
          <LinearGradient
            colors={['#F16C0E', '#C2312C']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            style={styles.gradientBox}>
            <TouchableOpacity
              style={styles.row}
              onPress={() => navigation.navigate('PrepareWithAi')}>
              <Image
                source={require('../../assets/images/image31.png')}
                style={styles.icon}
              />
              <Text style={styles.drawerText}>Prepare with AI</Text>
            </TouchableOpacity>
          </LinearGradient>

          <Text style={styles.sectionLabel}>Career Tools</Text>
          <DrawerItem
            title="AI Career Advisor"
            icon={require('../../assets/images/image32.png')}
            onPress={() => navigation.navigate('AiCareerAdvisor')}
          />
          <DrawerItem
            title="AI Resume Builder"
            icon={require('../../assets/images/image33.png')}
            onPress={() => navigation.navigate('AiResumeBuilder')}
          />
          <DrawerItem
            title="AI Smart Job Apply"
            icon={require('../../assets/images/image34.png')}
            onPress={() => navigation.navigate('AiSmartJobApply')}
          />
          <DrawerItem
            title="Connect with Hiring Managers"
            icon={require('../../assets/images/image35.png')}
            onPress={() => navigation.navigate('ConnectWithHiringManagers')}
            multiLine
          />

          <Text style={styles.sectionLabel}>Demo & Learning</Text>
          <DrawerItem
            title="Get Demo"
            icon={require('../../assets/images/image36.png')}
            onPress={() => navigation.navigate('GetDemo')}
          />
        </View>
      </ScrollView>

      <View style={styles.bottomContainer}>
        <TouchableOpacity onPress={goToProfile} style={styles.profileBox}>
          <Image
            source={require('../../assets/images/image15.png')}
            style={styles.profileImage}
          />
        </TouchableOpacity>

        <Text style={styles.brand}>Volkai</Text>

        <TouchableOpacity onPress={handleLogout} style={styles.logoutBox}>
          <Image
            source={require('../../assets/images/logout.png')}
            style={styles.logoutIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const DrawerItem = ({
  title,
  icon,
  onPress,
  multiLine = false,
}: {
  title: string;
  icon: any;
  onPress: () => void;
  multiLine?: boolean;
}) => (
  <TouchableOpacity style={styles.drawerBox} onPress={onPress}>
    <Image source={icon} style={styles.icon} />
    <View style={{marginLeft: 10}}>
      <Text style={styles.drawerText}>
        {multiLine ? title.split(' ')[0] : title}
      </Text>
      {multiLine && (
        <Text style={styles.drawerText}>
          {title.split(' ').slice(1).join(' ')}
        </Text>
      )}
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {flex: 1},
  logoContainer: {
    marginTop: 40,
    marginHorizontal: 20,
    backgroundColor: '#1b2a49',
    borderRadius: 15,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 180,
    height: 60,
  },
  scrollContainer: {
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  accountContainer: {
    marginTop: 20,
    marginLeft: 10,
  },
  sectionTitle: {
    color: '#D8D8D8',
    fontSize: 20,
    fontWeight: '400',
    marginLeft:25,
    marginTop:20
  },
  profileIcon: {
    marginTop: -5,
    marginLeft:-8
  },
  accountText: {
    position: 'absolute',
    left: 50,
    top: -10,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
  },
  rightArrow: {
    position: 'absolute',
    right: 0,
    top: -13,
    padding: 10,
  },
  arrowIcon: {
    width: 12,
    height: 20,
  },
  linkContainer: {
    marginTop: 20,
  },
  drawerBox: {
    backgroundColor: '#252525',
    borderColor: '#3A3F4D4F',
    borderWidth: 1,
    borderRadius: 10,
    height: 50,
    marginBottom: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 30,
    height: 30,
  },
  drawerText: {
    color: '#fff',
    fontSize: 17,
    marginLeft:10
  },
  gradientBox: {
    borderRadius: 10,
    height: 50,
    justifyContent: 'center',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sectionLabel: {
    color: '#ccc',
    marginTop: 20,
    marginBottom: 10,
    fontSize: 16,
    fontWeight: '600',
  },
  bottomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
    paddingVertical: 10,
    marginBottom: 20,
  },
  profileBox: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
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
  brand: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 20,
    marginRight: 100,
  },
  logoutBox: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoutIcon: {
    width: 50,
    height: 50,
  },
});

export default CustomDrawerContent;
