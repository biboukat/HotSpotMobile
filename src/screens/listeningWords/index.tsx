import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {RouteProp} from '@react-navigation/native';

import {SpeakingStackParamList} from '~/navigation';

type ListeningWordsScreenProps = {
  route: RouteProp<SpeakingStackParamList, 'ListeningWords'>;
};

export const ListeningWordsScreen = ({route}: ListeningWordsScreenProps) => {
  return (
    <View style={styles.container}>
      <Text>ListeningWords</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});
