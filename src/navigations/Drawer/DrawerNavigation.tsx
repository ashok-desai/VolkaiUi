import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '../../screens/Home/HomeScreen';
import CustomDrawerContent from './CustomDrawerContent';

const Drawer = createDrawerNavigator();


const DrawerNavigation = () => {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNavigation