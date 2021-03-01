import React from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {StackNavigationProp} from '@react-navigation/stack';
import {ListeningStackParamList} from '~/navigation';

type ListeningScreenProps = {
  navigation: StackNavigationProp<ListeningStackParamList, 'Listening'>;
};

export const ListeningScreen = ({navigation}: ListeningScreenProps) => {
  const openScreenWithWords = (weekNumber: string) => () => {
    navigation.navigate('ListeningWords', {weekNumber});
  };

  const openHardToLearnScreen = () => {
    navigation.navigate('HardToLearn');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <RectButton onPress={openHardToLearnScreen} style={styles.button}>
        <View accessible>
          <Text style={styles.buttonText}>{'Hard to learn'}</Text>
        </View>
      </RectButton>

      <RectButton onPress={openScreenWithWords('week6')} style={styles.button}>
        <View accessible>
          <Text style={styles.buttonText}>{'Week 6'}</Text>
        </View>
      </RectButton>

      <RectButton onPress={openScreenWithWords('week5')} style={styles.button}>
        <View accessible>
          <Text style={styles.buttonText}>{'Week 5'}</Text>
        </View>
      </RectButton>

      <RectButton onPress={openScreenWithWords('week2')} style={styles.button}>
        <View accessible>
          <Text style={styles.buttonText}>{'Week 2'}</Text>
        </View>
      </RectButton>

      <RectButton onPress={openScreenWithWords('week1')} style={styles.button}>
        <View accessible>
          <Text style={styles.buttonText}>{'Week 1'}</Text>
        </View>
      </RectButton>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
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
