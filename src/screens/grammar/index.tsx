import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export const GrammarScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Grammar</Text>
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
