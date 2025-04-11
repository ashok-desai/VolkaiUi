import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from './src/screens/SplashScreen'
import SplashScreen1 from './src/screens/SplashScreen1';
import SplashScreen2 from './src/screens/SplashScreen2';
import SplashScreen3 from './src/screens/SplashScreen3';
import SignUpScreen from './src/components/SignUpScreen';
import LoginScreen from './src/components/LoginScreen';
import ForgotPasswordScreen from './src/components/ForgotPasswordScreen';
import VerifyOtpScreen from './src/components/VerifyOtpScreen';
import VerifyOtpScreen1 from './src/components/VerifyOtpScreen1';
import HomeScreen from './src/components/HomeScreen';

const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="SplashScreen1" component={SplashScreen1} />
        <Stack.Screen name="SplashScreen2" component={SplashScreen2} />
        <Stack.Screen name="SplashScreen3" component={SplashScreen3} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} />
        <Stack.Screen name="VerifyOtpScreen" component={VerifyOtpScreen} />
        <Stack.Screen name="VerifyOtpScreen1" component={VerifyOtpScreen1} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App