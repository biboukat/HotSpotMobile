import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import Carousel from 'react-native-snap-carousel';
import shuffle from 'lodash/shuffle';

import {SpeakingStackParamList} from '~/navigation';
import {
  IValabularyItem,
  LanguageEnum,
  listeningWeek1,
  listeningWeek2,
  listeningWeek5,
} from '~/data';
import {ListeningWordsItem} from './Item';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

type ListeningWordsScreenProps = {
  route: RouteProp<SpeakingStackParamList, 'ListeningWords'>;
};

const getDataByWeek = (week: string) => {
  switch (week) {
    case 'week1':
      return listeningWeek1;
    case 'week2':
      return listeningWeek2;
    case 'week3':
      return [];
    case 'week4':
      return [];
    case 'week5':
      return listeningWeek5;

    default:
      return [];
  }
};

export const ListeningWordsScreen = ({route}: ListeningWordsScreenProps) => {
  const [data] = useState(shuffle(getDataByWeek(route.params.weekNumber)));
  const [baseLnaguage, seBaseLanguage] = useState<LanguageEnum>(
    LanguageEnum.rus,
  );

  const renderItem = ({item}: {item: IValabularyItem}) => {
    return <ListeningWordsItem item={item} initialLanguage={baseLnaguage} />;
  };

  const selectLanguage = (lang: LanguageEnum) => () => {
    seBaseLanguage(lang);
  };

  return (
    <>
      <Carousel<IValabularyItem>
        data={data}
        renderItem={renderItem}
        sliderWidth={windowWidth}
        sliderHeight={windowHeight}
        itemWidth={windowWidth}
        itemHeight={windowHeight}
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[
            styles.button,
            baseLnaguage === LanguageEnum.eng ? styles.disabledButton : null,
          ]}
          onPress={selectLanguage(LanguageEnum.eng)}
          disabled={baseLnaguage === LanguageEnum.eng}>
          <Text style={styles.text}>{'rus -> eng'}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.button,
            baseLnaguage === LanguageEnum.rus ? styles.disabledButton : null,
          ]}
          onPress={selectLanguage(LanguageEnum.rus)}
          disabled={baseLnaguage === LanguageEnum.rus}>
          <Text style={styles.text}>{'eng -> rus'}</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#cd1720',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
  },
  disabledButton: {
    backgroundColor: '#cd5720',
  },
});
