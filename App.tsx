import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from './src/Splash/SplashScreen';
import SplashScreen1 from './src/Splash/SplashScreen1';
import SplashScreen2 from './src/Splash/SplashScreen2';
import SplashScreen3 from './src/Splash/SplashScreen3';
import SignUpScreen from './src/screens/Auth/SignUpScreen';
import LoginScreen from './src/screens/Auth/LoginScreen';
import ForgotPasswordScreen from './src/screens/Auth/ForgotPasswordScreen';
import VerifyOtpScreen from './src/screens/Auth/VerifyOtpScreen';
import VerifyOtpScreen1 from './src/screens/Auth/VerifyOtpScreen1';
import DrawerNavigation from './src/navigations/Drawer/DrawerNavigation';
import AccountScreen from './src/screens/Account/AccountScreen';
import AiPoweredInterView from './src/screens/Account/AiPoweredInterView';
import StartInterview from './src/screens/Account/StartInterview';

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
        <Stack.Screen
          name="ForgotPasswordScreen"
          component={ForgotPasswordScreen}
        />
        <Stack.Screen name="VerifyOtpScreen" component={VerifyOtpScreen} />
        <Stack.Screen name="VerifyOtpScreen1" component={VerifyOtpScreen1} />
        <Stack.Screen name="Main" component={DrawerNavigation} />
        <Stack.Screen name="AccountScreen" component={AccountScreen} />
        <Stack.Screen
          name="AiPoweredInterView"
          component={AiPoweredInterView}
        />
        <Stack.Screen name="StartInterview" component={StartInterview} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
