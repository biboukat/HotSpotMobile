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

type RootStackParamList = {
  Speaking: undefined;
  Grammar: undefined;
  Listening: undefined;
};

export type SpeakingStackParamList = {
  Listening: undefined;
  ListeningWords: {weekNumber: string};
};

const Tab = createBottomTabNavigator<RootStackParamList>();
const SpeakingStack = createStackNavigator<SpeakingStackParamList>();

const SpeakingStackNavigator = () => {
  return (
    <SpeakingStack.Navigator initialRouteName={'Listening'}>
      <SpeakingStack.Screen
        name={'Listening'}
        component={ListeningScreen}
        options={{headerShown: false}}
      />
      <SpeakingStack.Screen
        options={{
          title: 'Listening Words',
          headerBackTitleVisible: false,
        }}
        name={'ListeningWords'}
        component={ListeningWordsScreen}
        initialParams={{weekNumber: 'week1'}}
      />
    </SpeakingStack.Navigator>
  );
};

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBarOptions={{activeTintColor: 'tomato'}}>
        <Tab.Screen name={'Speaking'} component={SpeakingScreen} />
        <Tab.Screen name={'Grammar'} component={GrammarScreen} />
        <Tab.Screen name={'Listening'} component={SpeakingStackNavigator} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
