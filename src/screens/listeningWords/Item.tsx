import React, {PureComponent} from 'react';
import {Text, StyleSheet, TouchableOpacity, View} from 'react-native';

import {IValabularyItem, LanguageEnum} from '~/data';

interface ItemProps {
  item: IValabularyItem;
  baseLnaguage: LanguageEnum;
}

interface ItemState {
  showTranslation: boolean;
}

export class ListeningWordsItem extends PureComponent<ItemProps, ItemState> {
  state = {
    showTranslation: false,
  };

  changeLanguagePress = (v: boolean) => () => {
    this.setState({showTranslation: v});
  };

  render() {
    const {baseLnaguage, item} = this.props;
    const {showTranslation} = this.state;
    const from = baseLnaguage === LanguageEnum.eng ? item.eng : item.rus;
    const to = baseLnaguage === LanguageEnum.eng ? item.rus : item.eng;

    const word = showTranslation ? to.vord : from.vord;
    const example = showTranslation ? to.example : from.example;
    const partOfSpeach = showTranslation ? to.partOfSpeach : from.partOfSpeach;

    return (
      <TouchableOpacity
        style={styles.container}
        delayPressIn={100}
        onPressOut={this.changeLanguagePress(false)}
        onLongPress={this.changeLanguagePress(true)}
        activeOpacity={1}>
        <Text style={styles.title}>
          {word}
          {partOfSpeach ? (
            <Text
              style={styles.partOfSpeach}>{` (${item.eng.partOfSpeach})`}</Text>
          ) : null}
        </Text>

        <View style={styles.exampleContaniner}>
          {example?.map((v) => (
            <View key={v.id}>
              <Text style={styles.text}>{v.value}</Text>
            </View>
          ))}
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 32,
    backgroundColor: '#cd1720',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    padding: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#fff',
    textAlign: 'center',
  },
  text: {
    color: '#fff',
  },
  exampleContaniner: {
    marginTop: 24,
  },
  partOfSpeach: {
    fontStyle: 'italic',
  },
});
