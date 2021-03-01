import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import {
  GrammarScreen,
  ListeningScreen,
  ListeningWordsScreen,
  SpeakingScreen,
} from '~/screens';
import {HardToLearnScreen} from '~/screens/hardToLearn';

type RootStackParamList = {
  Speaking: undefined;
  Grammar: undefined;
  Listening: undefined;
};

export type ListeningStackParamList = {
  Listening: undefined;
  ListeningWords: {weekNumber: string};
  HardToLearn: undefined;
};

const Tab = createBottomTabNavigator<RootStackParamList>();
const ListeningStack = createStackNavigator<ListeningStackParamList>();

const ListeningStackNavigator = () => {
  return (
    <ListeningStack.Navigator initialRouteName={'Listening'}>
      <ListeningStack.Screen
        name={'Listening'}
        component={ListeningScreen}
        options={{headerShown: false}}
      />
      <ListeningStack.Screen
        options={{
          title: 'Listening Words',
          headerBackTitleVisible: false,
        }}
        name={'ListeningWords'}
        component={ListeningWordsScreen}
        initialParams={{weekNumber: 'week1'}}
      />
      <ListeningStack.Screen
        options={{
          title: 'Hard to learn',
          headerBackTitleVisible: false,
        }}
        name={'HardToLearn'}
        component={HardToLearnScreen}
      />
    </ListeningStack.Navigator>
  );
};

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBarOptions={{activeTintColor: 'tomato'}}>
        <Tab.Screen name={'Speaking'} component={SpeakingScreen} />
        <Tab.Screen name={'Grammar'} component={GrammarScreen} />
        <Tab.Screen name={'Listening'} component={ListeningStackNavigator} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
