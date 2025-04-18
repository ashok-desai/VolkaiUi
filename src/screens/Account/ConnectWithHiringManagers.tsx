import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const ConnectWithHiringManagers = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Coming Soon</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000', 
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff', 
  },
});

export default ConnectWithHiringManagers;
