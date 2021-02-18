import React, {useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import shuffle from 'lodash/shuffle';

import Item from './Item';
import {listeningWeek1, IValabularyItem, LanguageEnum} from './data';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

declare const global: {HermesInternal: null | {}};

const shuffleData = shuffle(listeningWeek1);

const App = () => {
  const [baseLnaguage, seBaseLanguage] = useState<LanguageEnum>(
    LanguageEnum.rus,
  );

  const renderItem = ({item}: {item: IValabularyItem}) => {
    return <Item item={item} initialLanguage={baseLnaguage} />;
  };

  const selectLanguage = (lang: LanguageEnum) => () => {
    seBaseLanguage(lang);
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />

      <SafeAreaView style={styles.container}>
        <Carousel<IValabularyItem>
          data={shuffleData}
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
      </SafeAreaView>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
