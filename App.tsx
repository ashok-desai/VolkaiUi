import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from './src/screens/Splash/SplashScreen';
import SplashScreen1 from './src/screens/Splash/SplashScreen1';
import SplashScreen2 from './src/screens/Splash/SplashScreen2';
import SplashScreen3 from './src/screens/Splash/SplashScreen3';
import SignUpScreen from './src/screens/Auth/SignUpScreen';
import LoginScreen from './src/screens/Auth/LoginScreen';
import ForgotPasswordScreen from './src/screens/Auth/ForgotPasswordScreen';
import VerifyOtpScreen from './src/screens/Auth/VerifyOtpScreen';
import VerifyOtpScreen1 from './src/screens/Auth/VerifyOtpScreen1';
import DrawerNavigation from './src/navigations/Drawer/DrawerNavigation';
import AccountScreen from './src/screens/Account/AccountScreen';
import AiPoweredInterView from './src/screens/Account/AiPoweredInterView';
import StartInterview from './src/screens/Account/StartInterview';
import AiCareerAdvisor from './src/screens/Account/AiCareerAdvisor';
import PrepareWithAi from './src/screens/Account/PrepareWithAi';
import LiveInterviewBeta from './src/screens/Account/LiveInterviewBeta';
import AiResumeBuilder from './src/screens/Account/AiResumeBuilder';
import AiSmartJobApply from './src/screens/Account/AiSmartJobApply';
import ConnectWithHiringManagers from './src/screens/Account/ConnectWithHiringManagers';
import GetDemo from './src/screens/Account/GetDemo';
import ProfileScreen from './src/screens/Account/ProfileScreen';
import PreviousInterviewReport from './src/screens/Account/PreviousInterviewReport';
import PreviousInterview from './src/screens/Account/PreviousInterview';
import PrepareWithAi1 from './src/screens/Account/PrepareWithAi1';
import VolkaiPremium from './src/screens/Account/VolkaiPremium';
import VolkaiPremium1 from './src/screens/Account/VolkaiPremium1';


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
        <Stack.Screen name="LiveInterviewBeta" component={LiveInterviewBeta} />
        <Stack.Screen name="PreviousInterview" component={PreviousInterview} />
        <Stack.Screen
          name="PreviousInterviewReport"
          component={PreviousInterviewReport}
        />
        <Stack.Screen name="PrepareWithAi" component={PrepareWithAi} />
        <Stack.Screen name="PrepareWithAi1" component={PrepareWithAi1} />
        <Stack.Screen name="AiCareerAdvisor" component={AiCareerAdvisor} />
        <Stack.Screen name="AiResumeBuilder" component={AiResumeBuilder} />
        <Stack.Screen name="AiSmartJobApply" component={AiSmartJobApply} />
        <Stack.Screen
          name="ConnectWithHiringManagers"
          component={ConnectWithHiringManagers}
        />
        <Stack.Screen name="GetDemo" component={GetDemo} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="VolkaiPremium" component={VolkaiPremium} />
        <Stack.Screen name="VolkaiPremium1" component={VolkaiPremium1} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
