import React from 'react';
import { Alert, StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Marta la subnormal</Text>
      <TouchableNativeFeedback onPress={() => Alert.alert('hemos tocao')}>
        <Text >Press me</Text>
      </TouchableNativeFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
