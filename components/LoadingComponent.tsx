import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { Colors } from '../themes/Colors';

const LoadingComponent = () => (
  <View style={styles.container}>
    <ActivityIndicator size="large" color={Colors.orange} />
    <Text style={styles.text}>Fetching Data...</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    marginTop: 10,
  },
});

export default LoadingComponent;