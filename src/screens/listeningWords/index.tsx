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
  const [currentWordIndex, setCurrentWordIndex] = useState<number>(0);

  const renderItem = ({item}: {item: IValabularyItem}) => {
    return <ListeningWordsItem item={item} initialLanguage={baseLnaguage} />;
  };

  const selectLanguage = () => {
    if (baseLnaguage === LanguageEnum.eng) {
      seBaseLanguage(LanguageEnum.rus);
    } else {
      seBaseLanguage(LanguageEnum.eng);
    }
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
        onSnapToItem={setCurrentWordIndex}
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button]} onPress={selectLanguage}>
          <Text style={styles.text}>
            {baseLnaguage === LanguageEnum.eng ? 'eng -> rus' : 'rus -> eng'}
          </Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.numbering}>{`${currentWordIndex + 1}/${
        data.length
      }`}</Text>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#cd1720',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
    alignItems: 'center',
  },
  buttonContainer: {
    marginBottom: 8,
    marginHorizontal: 16,
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
  },
  numbering: {
    position: 'absolute',
    top: 8,
    right: 16,
  },
});
