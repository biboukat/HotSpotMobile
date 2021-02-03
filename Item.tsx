import * as React from 'react';
import {Text, View, StyleSheet, PlatformColor} from 'react-native';
import {IValabularyItem} from './data';

interface ItemProps {
  item: IValabularyItem;
}

const Item = ({item}: ItemProps) => {
  return (
    <View style={styles.container}>
      <Text>{item.eng}</Text>
    </View>
  );
};

export default Item;

const styles = StyleSheet.create({
  container: {
    margin: 32,
    backgroundColor: 'red',
  },
});
