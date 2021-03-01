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
import {observer} from 'mobx-react';
import shuffle from 'lodash/shuffle';

import {ListeningStackParamList} from '~/navigation';
import {LanguageEnum} from '~/data';
import {ListeningWordsItem} from './Item';
import {useStore} from '~/store';

const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('screen').height;

type ListeningWordsScreenProps = {
  route: RouteProp<ListeningStackParamList, 'ListeningWords'>;
};

export const ListeningWordsScreen = observer(
  ({route}: ListeningWordsScreenProps) => {
    const {listeningStore} = useStore();

    const [data] = useState(
      shuffle(listeningStore.getWeekIds(route.params.weekNumber)),
    );
    const [currentWordIndex, setCurrentWordIndex] = useState<number>(0);

    const hardToLearnPress = (id: string) => () => {
      listeningStore.changeHardToLearnStatusByWordId(id);
    };

    const renderItem = ({item}: {item: string}) => {
      return (
        <ListeningWordsItem
          item={listeningStore.getWordById(item)}
          baseLnaguage={listeningStore.baseLnaguage}
          isSelected={listeningStore.hardToLearn[item]}
          hardToLearnPress={hardToLearnPress(item)}
        />
      );
    };

    const changeLanguage = () => {
      listeningStore.changeBaseLanguage();
    };
    console.log('bla ', listeningStore.hardToLearn);
    return (
      <>
        <Carousel<string>
          data={data}
          renderItem={renderItem}
          sliderWidth={windowWidth}
          sliderHeight={windowHeight}
          itemWidth={windowWidth}
          itemHeight={windowHeight}
          onSnapToItem={setCurrentWordIndex}
          extraData={[listeningStore.hardToLearn]}
        />

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={changeLanguage}>
            <Text style={styles.text}>
              {listeningStore.baseLnaguage === LanguageEnum.eng
                ? 'rus -> eng'
                : 'eng -> rus'}
            </Text>
          </TouchableOpacity>
        </View>

        {data.length > 0 ? (
          <Text style={styles.numbering}>{`${
            currentWordIndex + 1 > data.length
              ? data.length
              : currentWordIndex + 1
          }/${data.length}`}</Text>
        ) : null}
      </>
    );
  },
);

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
