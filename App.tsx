import React from 'react';
import {SafeAreaView, StatusBar, Dimensions} from 'react-native';
import Carousel from 'react-native-snap-carousel';

import {data, IValabularyItem} from './data';
import Item from './Item';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

declare const global: {HermesInternal: null | {}};

const App = () => {
  const renderItem = ({item}: {item: IValabularyItem}) => {
    return <Item item={item} />;
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />

      <SafeAreaView>
        <Carousel<IValabularyItem>
          data={data}
          renderItem={renderItem}
          sliderWidth={windowWidth}
          sliderHeight={windowHeight}
          itemWidth={windowWidth}
          itemHeight={windowHeight}
        />
      </SafeAreaView>
    </>
  );
};

export default App;
