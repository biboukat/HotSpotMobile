import React from 'react';
import 'react-native-gesture-handler';

import {Navigation} from './src/navigation';

declare const global: {HermesInternal: null | {}};

const App = () => {
  return <Navigation />;
};

export default App;
