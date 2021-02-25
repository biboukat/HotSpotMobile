import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export const ListeningScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Listening</Text>
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
