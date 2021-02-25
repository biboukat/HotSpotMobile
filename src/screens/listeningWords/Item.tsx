import React, {useState} from 'react';
import {Text, StyleSheet, TouchableOpacity, View} from 'react-native';

import {IValabularyItem, LanguageEnum} from '~/data';

interface ItemProps {
  item: IValabularyItem;
  initialLanguage: LanguageEnum;
}

export const ListeningWordsItem = ({item, initialLanguage}: ItemProps) => {
  const from = initialLanguage === LanguageEnum.eng ? item.eng : item.rus;
  const to = initialLanguage === LanguageEnum.eng ? item.rus : item.eng;
  const [showTranslation, changeTranslationVisibility] = useState<boolean>(
    false,
  );
  const changeLanguagePress = (v: boolean) => () => {
    changeTranslationVisibility(v);
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPressOut={changeLanguagePress(false)}
      onLongPress={changeLanguagePress(true)}
      activeOpacity={1}>
      <Text style={styles.title}>{showTranslation ? from.vord : to.vord}</Text>

      <View style={styles.exampleContaniner}>
        {showTranslation
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
};

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