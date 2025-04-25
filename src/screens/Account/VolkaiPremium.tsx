import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';
import {useNavigation} from '@react-navigation/native';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';

const {width, height} = Dimensions.get('window');

// Define the navigation parameter types
type RootStackParamList = {
  VolkaiPremium1: {plan: Plan}; // This defines that `VolkaiPremium1` screen will receive a `plan` object
};

// Define the `Plan` type
type Plan = {
  title: string;
  price: string;
  titleColor: string;
  features: {text?: string; text1?: string; icon: any}[]; // Features of the plan
  buttonText: string;
  borderColor: string;
  bgColor: string;
  btnBgColor: string;
  btnTextColor: string;
  badge: any;
};

type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'VolkaiPremium1'
>;

const plans: Plan[] = [
  {
    title: 'Basic',
    price: 'Free',
    titleColor: '#FFC876',
    features: [
      {
        text: '7,700 3-5 day turnaround',
        icon: require('../../assets/images/image50.png'),
      },
      {
        text: '6+ Naive development',
        icon: require('../../assets/images/image50.png'),
      },
      {
        text: '5+ Task delivered one-by-one',
        icon: require('../../assets/images/image50.png'),
      },
      {
        text1: 'AI Blog Updates via dashboard & slack',
        icon: require('../../assets/images/image51.png'),
      },
      {
        text1: 'Advance Updates via dashboard & slack',
        icon: require('../../assets/images/image51.png'),
      },
    ],
    buttonText: 'Get Started',
    borderColor: '#D6D6D612',
    bgColor: '#131621',
    btnBgColor: '#131621',
    btnTextColor: '#FFF',
    badge: require('../../assets/images/image49.png'),
  },
  {
    title: 'Premium',
    price: '₹799',
    titleColor: '#85EA80',
    features: [
      {
        text: '12,700 7-9 day turnaround',
        icon: require('../../assets/images/image50.png'),
      },
      {
        text: '6+ Naive development',
        icon: require('../../assets/images/image50.png'),
      },
      {
        text: '5+ Task delivered one-by-one',
        icon: require('../../assets/images/image50.png'),
      },
      {
        text1: '7,700 3-5 day turnaround',
        icon: require('../../assets/images/image51.png'),
      },
      {
        text1: '6+ Naive development',
        icon: require('../../assets/images/image51.png'),
      },
    ],
    buttonText: 'Get Started',
    borderColor: 'rgba(243, 136, 53, 0.8)',
    bgColor: '#131621',
    btnBgColor: 'rgba(241, 108, 14, 1)',
    btnTextColor: '#FFF',
    badge: require('../../assets/images/image53.png'),
  },
  {
    title: 'Enterprise',
    price: '₹999',
    titleColor: '#FF776F',
    features: [
      {
        text: '7,700 3-5 day turnaround',
        icon: require('../../assets/images/image50.png'),
      },
      {
        text: '6+ Naive development',
        icon: require('../../assets/images/image50.png'),
      },
      {
        text: '5+ Task delivered one-by-one',
        icon: require('../../assets/images/image50.png'),
      },
      {
        text1: 'AI Blog Updates via dashboard & slack',
        icon: require('../../assets/images/image51.png'),
      },
      {
        text1: 'Advance Updates via dashboard & slack',
        icon: require('../../assets/images/image51.png'),
      },
    ],
    buttonText: 'Get Started',
    borderColor: '#D6D6D612',
    bgColor: '#131621',
    btnBgColor: '#131621',
    btnTextColor: '#FFF',
    badge: require('../../assets/images/image54.png'),
  },
];

const VolkaiPremium = () => {
  const navigation = useNavigation<NavigationProp>();

  const handleGetStartedClick = (plan: Plan): void => {
    navigation.navigate('VolkaiPremium1', {plan});
  };
  return (
    <LinearGradient
      colors={['#000000', '#1a237e', '#000000']}
      start={{x: 0.4, y: -2}}
      end={{x: 4, y: 0.2}}
      style={styles.container}>
      <View style={styles.centeredView}>
        <MaskedView
          maskElement={<Text style={styles.maskedText}>Pricing</Text>}>
          <LinearGradient
            colors={['#F16C0E', '#C2312C']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}>
            <Text style={[styles.maskedText, {opacity: 0}]}>Pricing</Text>
          </LinearGradient>
        </MaskedView>
        <Text style={styles.text}>Pricing plans for everyone</Text>
      </View>

      <View style={styles.descriptionBox}>
        <Text style={styles.text1}>Monthly</Text>
        <View style={styles.descriptionBox1}>
          <View style={styles.yearlyWithDiscount}>
            <Text style={styles.text2}>Yearly</Text>
            <View style={styles.discountBox}>
              <Text style={styles.text3}>-10%</Text>
            </View>
          </View>
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.plansContainer}>
        {plans.map((plan, idx) => (
          <View
            key={idx}
            style={[styles.planWrapper, idx === 1 && {marginTop: 30}]}>
            {plan.price === '₹799' && (
              <View style={styles.bestOfferBox}>
                <Text style={styles.bestOfferText}>Best Offer</Text>
              </View>
            )}

            <View
              style={[
                styles.planCard,
                {
                  borderColor: plan.borderColor,
                  backgroundColor: plan.bgColor,
                  width: width - 40,
                  height: height - 260,
                },
              ]}>
              <Image source={plan.badge} style={styles.badge} />
              <Text style={[styles.title, {color: plan.titleColor}]}>
                {plan.title}
              </Text>
              <Text style={styles.forHeading}>
                For large teams & corporations
              </Text>

              <View style={styles.priceRow}>
                <Text style={styles.price}>{plan.price}</Text>
                {(plan.price === '₹799' || plan.price === '₹999') && (
                  <Text style={styles.perYear}>/Per Year</Text>
                )}
              </View>

              <Text style={styles.featuresHeading}>Features</Text>
              <View style={styles.divider} />

              {plan.features.map((item, i) => (
                <View key={i} style={styles.featureRow}>
                  <Image source={item.icon} style={styles.featureIcon} />
                  <Text style={item.text ? styles.feature : styles.feature1}>
                    {item.text || item.text1}
                  </Text>
                </View>
              ))}

              {plan.price === '₹799' && (
                <Text style={styles.showMoreText}>Show More</Text>
              )}

              <TouchableOpacity
                style={[
                  styles.button,
                  {
                    backgroundColor: plan.btnBgColor,
                    borderColor: 'rgba(255, 255, 255, 0.10)',
                    borderWidth: 1.5,
                    marginTop: 40,
                  },
                ]}
                onPress={() => handleGetStartedClick(plan)}>
                <Text style={[styles.buttonText, {color: plan.btnTextColor}]}>
                  {plan.buttonText}
                </Text>
              </TouchableOpacity>

              <Text style={styles.validityText}>Validity 7 Days</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centeredView: {
    alignItems: 'center',
    paddingTop: 40,
  },
  maskedText: {
    fontSize: 20,
    fontWeight: '700',
  },
  text: {
    fontSize: 25,
    fontWeight: '600',
    color: '#FFF',
    marginTop: 8,
  },
  descriptionBox: {
    marginTop: 20,
    marginHorizontal: 100,
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#FFFFFF1A',
  },
  text1: {
    color: '#FFFFFF',
    fontWeight: '400',
    fontSize: 17,
    marginLeft: 45,
  },
  descriptionBox1: {
    marginTop: 12,
    backgroundColor: '#3E414B',
    borderRadius: 8,
    padding: 10,
  },
  yearlyWithDiscount: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 30,
  },
  text2: {
    color: '#FFF',
    fontSize: 15,
    marginRight: 8,
  },
  discountBox: {
    backgroundColor: '#85EA80',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  text3: {
    color: '#000',
    fontSize: 13,
    fontWeight: '600',
  },
  plansContainer: {
    paddingVertical: 20,
    alignItems: 'center',
    paddingBottom: 40,
  },
  planWrapper: {
    alignItems: 'center',
    marginBottom: 50,
  },
  planCard: {
    borderWidth: 1.5,
    borderRadius: 12,
    padding: 16,
    position: 'relative',
  },
  badge: {
    width: 42,
    height: 42,
    marginBottom: 8,
  },
  forHeading: {
    color: '#FFF',
    fontSize: 14,
    marginBottom: 4,
  },
  title: {
    color: '#FFC876',
    fontSize: 20,
    marginTop: -10,
  },

  priceRow: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  price: {
    color: '#FFF',
    fontSize: 40,
    marginTop: 10,
  },

  perYear: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.5)',
    marginLeft: 8,
    marginTop: 30,
  },
  featuresHeading: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '400',
    marginTop: -4,
    marginBottom: 8,
    textAlign: 'center',
    marginLeft: '-80%',
  },
  divider: {
    height: 1,
    backgroundColor: '#FFFFFF33',
    marginVertical: 8,
    width: '100%',
  },
  featureRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  featureIcon: {
    width: 20,
    height: 20,
    marginRight: 8,
    marginTop: 12,
  },
  image51: {
    tintColor: '#1516274D',
  },
  feature: {
    color: '#BCC3D7',
    fontSize: 14,
    flexShrink: 1,
    marginTop: 10,
  },
  feature1: {
    color: '#8A8D9373',
    fontSize: 14,
    flexShrink: 1,
    marginTop: 10,
  },
  button: {
    marginTop: 12,
    paddingVertical: 14,
    borderRadius: 8,
  },
  buttonText: {
    fontWeight: '400',
    fontSize: 15,
    lineHeight: 22,
    textAlign: 'center',
  },
  validityText: {
    marginTop: 15,
    textAlign: 'center',
    fontSize: 15,
    color: 'rgba(255, 184, 0, 1)',
    fontWeight: '400',
  },
  showMoreText: {
    fontSize: 15,
    fontWeight: '400',
    color: '#FFFFFF',
    marginBottom: -35,
    alignSelf: 'flex-start',
    marginLeft: 5,
    marginTop: 30,
  },
  bestOfferBox: {
    position: 'absolute',
    top: -12,
    zIndex: 10,
    backgroundColor: '#FFB700',
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 6,
    marginTop: -5,
  },
  bestOfferText: {
    color: '#000',
    fontSize: 13,
    fontWeight: '700',
  },
});

export default VolkaiPremium;
