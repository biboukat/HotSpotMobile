import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {observer} from 'mobx-react';
import shuffle from 'lodash/shuffle';
import {StackNavigationProp} from '@react-navigation/stack';
import {RectButton} from 'react-native-gesture-handler';

import {LanguageEnum} from '~/data';
import {ListeningWordsItem} from '../listeningWords/Item';
import {useStore} from '~/store';
import {ListeningStackParamList} from '~/navigation';

const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('screen').height;

type HardToLearnScreenProps = {
  navigation: StackNavigationProp<ListeningStackParamList, 'Listening'>;
};

export const HardToLearnScreen = observer(
  ({navigation}: HardToLearnScreenProps) => {
    const {listeningStore} = useStore();

    const [data, setData] = useState(
      shuffle(listeningStore.getWeekIds('hardToLearn')),
    );
    const [currentWordIndex, setCurrentWordIndex] = useState<number>(0);

    const hardToLearnPress = (id: string) => () => {
      setData(data.filter((v) => v !== id));
      listeningStore.changeHardToLearnStatusByWordId(id);
    };

    const clearPress = () => {
      listeningStore.clearHardToLearn();
      navigation.goBack();
    };

    React.useLayoutEffect(() => {
      navigation.setOptions({
        headerRight: () => (
          <RectButton onPress={clearPress} style={styles.buttonHeader}>
            <View accessible>
              <Text style={styles.buttonText}>{'Remove all'}</Text>
            </View>
          </RectButton>
        ),
      });
    }, [navigation]);

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

  buttonHeader: {
    backgroundColor: 'tomato',
    marginRight: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    padding: 4,
  },
});
