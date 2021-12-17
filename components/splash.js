import React from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../my-app/assets/logo-1.png')}/>
      <Text style={styles.text}>Medical App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 140,
    height: 130,
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 20,
  }
});
