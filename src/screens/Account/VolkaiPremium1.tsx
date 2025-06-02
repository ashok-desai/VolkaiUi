import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  TextInput,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation, RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

type RootStackParamList = {
  VolkaiPremium1: {plan: Plan}; 
};

type Plan = {
  title: string;
  price: string;
  titleColor: string;
  features: {text: string; icon: any}[];
  buttonText: string;
  borderColor: string;
  bgColor: string;
  btnBgColor: string;
  btnTextColor: string;
  badge: any;
};

const VolkaiPremium1 = ({
  route,
}: {
  route: RouteProp<RootStackParamList, 'VolkaiPremium1'>;
}) => {
  const {plan} = route.params;
  const [coupon, setCoupon] = useState('');
  const [applyClicked, setApplyClicked] = useState(false);
  const navigation =
    useNavigation<StackNavigationProp<RootStackParamList, 'VolkaiPremium1'>>();

  const handleApplyCoupon = () => {
    setApplyClicked(true); 
  };

  return (
    <LinearGradient
      colors={['#000000', '#1a237e', '#000000']}
      start={{x: 0.4, y: -2.2}}
      end={{x: 4, y: 0.1}}
      style={styles.container}>
      {!applyClicked ? (
        <View style={styles.descriptionBox}>
          <View style={styles.descriptionBoxContainer}>
            <TouchableOpacity
              style={styles.leftIconContainer}
              activeOpacity={0.7}
              onPress={() => navigation.goBack()}>
              <Image
                source={require('../../assets/images/lefticon.png')}
                style={styles.image}
              />
            </TouchableOpacity>

            <Text style={styles.text}>Checkout</Text>

            {plan.title === 'Basic' && (
              <View style={styles.centeredContainer}>
                <Text style={[styles.centeredText, {color: plan.titleColor}]}>
                  {plan.title}
                </Text>
                <Text style={styles.freeLabel}>Free</Text>
              </View>
            )}

            {plan.title !== 'Basic' && (
              <>
                <Text style={[styles.text1, {color: plan.titleColor}]}>
                  {plan.title}
                </Text>
                <Text style={styles.text2}>{plan.price}</Text>
              </>
            )}

            <Image
              source={require('../../assets/images/image55.png')}
              style={styles.image1}
            />

            <TextInput
              style={styles.input}
              placeholder="Enter coupon code"
              placeholderTextColor="#ccc"
              value={coupon}
              onChangeText={setCoupon}
            />
            <TouchableOpacity onPress={handleApplyCoupon}>
              <LinearGradient
                colors={['#F38835', '#C02D2B']}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}
                style={styles.loginButtonGradient}>
                <Text style={styles.applyText}>Apply</Text>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity style={styles.descriptionBox1}>
              <Text style={styles.text3}>Pay Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <View style={styles.centeredImageContainer}>
          <Image
            source={require('../../assets/images/successfully.png')}  
            style={styles.successImage}
          />
        </View>
      )}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  descriptionBox: {
    height: '70%',
    backgroundColor: '#0F142478',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(214, 214, 214, 0.3)',
    marginHorizontal: 15,
    marginTop: 110,
    padding: 20,
  },
  descriptionBoxContainer: {
    flex: 1,
  },
  image: {
    height: 24,
    width: 22,
    marginLeft: -10,
    marginTop: 25,
  },
  leftIconContainer: {
    padding: 10,
  },
  text: {
    fontSize: 27,
    fontWeight: '600',
    color: '#FFF',
    marginLeft: 45,
    marginTop: -40,
  },
  centeredContainer: {
    alignItems: 'center',
    marginTop: 35,
  },
  centeredText: {
    fontSize: 36,
    fontWeight: '600',
    color: '#FFF',
    textAlign: 'center',
  },
  freeLabel: {
    fontSize: 34,
    fontWeight: '500',
    color: '#FFF',
    marginTop: 0,
  },
  text1: {
    fontSize: 36,
    fontWeight: '600',
    color: '#FFF',
    marginLeft: 90,
    marginTop: 35,
  },
  text2: {
    fontSize: 36,
    fontWeight: '600',
    color: '#FFF',
    marginLeft: 122,
    marginTop: 10,
  },
  image1: {
    marginLeft: 50,
    marginTop: -45,
    width: 220,
    height: 160,
    resizeMode: 'contain',
  },
  input: {
    width: '106%',
    borderRadius: 5,
    borderColor: 'rgba(211, 211, 211, 0.3)',
    borderWidth: 1,
    paddingHorizontal: 15,
    paddingVertical: 18,
    fontSize: 20,
    color: '#fff',
    marginLeft: -10,
  },
  loginButtonGradient: {
    width: '106%',
    paddingVertical: 14,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginLeft: -10,
  },
  applyText: {
    color: '#fff',
    fontSize: 20,
    height: 30,
    fontWeight: 'bold',
    marginLeft: -30,
  },
  descriptionBox1: {
    height: '11.5%',
    width: '106%',
    backgroundColor: 'rgba(102, 102, 102, 0.02)',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(51, 53, 65, 1)',
    marginTop: 20,
    padding: 20,
    marginLeft: -10,
  },
  text3: {
    fontSize: 21,
    fontWeight: '600',
    color: '#FFF',
    marginTop: -4,
    marginLeft: 90,
  },
  centeredImageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  successImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
});

export default VolkaiPremium1;
