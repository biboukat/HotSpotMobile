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
import {observer} from 'mobx-react';

import {SpeakingStackParamList} from '~/navigation';
import {LanguageEnum} from '~/data';
import {ListeningWordsItem} from './Item';
import {useStore} from '~/store';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

type ListeningWordsScreenProps = {
  route: RouteProp<SpeakingStackParamList, 'ListeningWords'>;
};

export const ListeningWordsScreen = observer(
  ({route}: ListeningWordsScreenProps) => {
    const {listeningStore} = useStore();

    const [data] = useState(
      shuffle(listeningStore.getWeekIds(route.params.weekNumber)),
    );
    const [currentWordIndex, setCurrentWordIndex] = useState<number>(0);

    const renderItem = ({item}: {item: string}) => {
      console.log(`bla item ${item} ---> `, listeningStore.getWordById(item));

      return (
        <ListeningWordsItem
          item={listeningStore.getWordById(item)}
          baseLnaguage={listeningStore.baseLnaguage}
        />
      );
    };

    const changeLanguage = () => {
      listeningStore.changeBaseLanguage();
    };

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

        <Text style={styles.numbering}>{`${currentWordIndex + 1}/${
          data.length
        }`}</Text>
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
