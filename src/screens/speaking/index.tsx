import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export const SpeakingScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Speaking</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
