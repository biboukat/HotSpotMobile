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
// import shuffle from 'lodash/shuffle';
// import intersection from 'lodash/intersection';

import {SpeakingStackParamList} from '~/navigation';
import {LanguageEnum} from '~/data';
import {ListeningWordsItem} from './Item';
import {useStore} from '~/store';

const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('screen').height;

type ListeningWordsScreenProps = {
  route: RouteProp<SpeakingStackParamList, 'ListeningWords'>;
};

export const ListeningWordsScreen = observer(
  ({route}: ListeningWordsScreenProps) => {
    const {listeningStore} = useStore();
    // const isFirstRender = useRef<boolean>(true);

    // const [data, setData] = useState(
    //   shuffle(listeningStore.getWeekIds(route.params.weekNumber)),
    // );
    const [currentWordIndex, setCurrentWordIndex] = useState<number>(0);

    // useEffect(() => {
    //   if (isFirstRender.current) {
    //     isFirstRender.current = false;
    //   } else {
    //     const newData = intersection(
    //       data,
    //       listeningStore.getWeekIds(route.params.weekNumber),
    //     );
    //     setData(newData);
    //   }
    //   // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [listeningStore.getWeekIds(route.params.weekNumber)]);

    const hardToLearnPress = (id: string) => () => {
      listeningStore.changeHardToLearnStatusByWordId(id);
    };

    const renderItem = ({item}: {item: string}) => {
      return (
        <View style={{width: windowWidth, height: windowHeight}}>
          <ListeningWordsItem
            item={listeningStore.getWordById(item)}
            baseLnaguage={listeningStore.baseLnaguage}
            isSelected={listeningStore.hardToLearn[item]}
            hardToLearnPress={hardToLearnPress(item)}
          />
        </View>
      );
    };

    const changeLanguage = () => {
      listeningStore.changeBaseLanguage();
    };
    const data = listeningStore.getWeekIds(route.params.weekNumber);
    return (
      <>
        <Carousel<string>
          data={data}
          renderItem={renderItem}
          sliderWidth={windowWidth}
          sliderHeight={400}
          itemWidth={windowWidth}
          itemHeight={400}
          onSnapToItem={setCurrentWordIndex}
          extraData={listeningStore.hardToLearn}
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
          <Text style={styles.numbering}>{`${currentWordIndex + 1}/${
            data.length
          }`}</Text>
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
    marginTop: 24,
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
