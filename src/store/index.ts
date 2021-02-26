import React from 'react';
import {ListeningStore} from './listening';

const storesContext = React.createContext({
  listeningStore: new ListeningStore(),
});

export const useStore = () => React.useContext(storesContext);
