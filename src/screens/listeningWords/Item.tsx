import React, {PureComponent} from 'react';
import {Text, StyleSheet, TouchableOpacity, View, Image} from 'react-native';

import {IValabularyItem, LanguageEnum} from '~/data';
const starIcon = require('../../../assets/images/star/star.png');
const starSelectedIcon = require('../../../assets/images/star/starSelected.png');

interface ItemProps {
  item: IValabularyItem;
  baseLnaguage: LanguageEnum;
  isSelected: boolean;
  hardToLearnPress: () => void;
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
    const {baseLnaguage, item, isSelected, hardToLearnPress} = this.props;
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

        <TouchableOpacity
          style={styles.starContainer}
          onPress={hardToLearnPress}>
          <Image
            source={isSelected ? starSelectedIcon : starIcon}
            style={styles.starIcon}
          />
        </TouchableOpacity>
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
    borderRadius: 14,
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
  starContainer: {
    padding: 16,
    position: 'absolute',
    top: 0,
    right: 0,
  },
  starIcon: {
    width: 45,
    height: 45,
    tintColor: 'gold',
  },
});
