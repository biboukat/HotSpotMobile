import React, {PureComponent} from 'react';
import {Text, StyleSheet, TouchableOpacity, View} from 'react-native';

import {IValabularyItem, LanguageEnum} from '~/data';

interface ItemProps {
  item: IValabularyItem;
  initialLanguage: LanguageEnum;
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
    const {initialLanguage, item} = this.props;
    const from = initialLanguage === LanguageEnum.eng ? item.eng : item.rus;
    const to = initialLanguage === LanguageEnum.eng ? item.rus : item.eng;
    return (
      <TouchableOpacity
        style={styles.container}
        onPressOut={this.changeLanguagePress(false)}
        onLongPress={this.changeLanguagePress(true)}
        activeOpacity={1}>
        <Text style={styles.title}>
          {this.state.showTranslation ? from.vord : to.vord}
        </Text>

        <View style={styles.exampleContaniner}>
          {this.state.showTranslation
            ? from.example?.map((v) => (
                <View key={v.id}>
                  <Text style={styles.text}>{v.value}</Text>
                </View>
              ))
            : to.example?.map((v) => (
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
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#fff',
  },
  text: {
    color: '#fff',
  },
  exampleContaniner: {
    marginTop: 24,
  },
});
