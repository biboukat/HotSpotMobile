import React from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';

export const ListeningScreen = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <ScrollView contentContainerStyle={styles.container}>
        <RectButton onPress={() => {}} style={styles.button}>
          <View accessible>
            <Text style={styles.buttonText}>{'Week 1'}</Text>
          </View>
        </RectButton>

        <RectButton onPress={() => {}} style={styles.button}>
          <View accessible>
            <Text style={styles.buttonText}>{'Week 2'}</Text>
          </View>
        </RectButton>

        <RectButton onPress={() => {}} style={styles.button}>
          <View accessible>
            <Text style={styles.buttonText}>{'Week 5'}</Text>
          </View>
        </RectButton>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    justifyContent: 'center',
    flexGrow: 1,
    paddingHorizontal: 16,
  },
  button: {
    backgroundColor: 'tomato',
    padding: 16,
    alignItems: 'center',
    marginBottom: 16,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
