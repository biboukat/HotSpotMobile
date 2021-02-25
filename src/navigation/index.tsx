import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {GrammarScreen, ListeningScreen, SpeakingScreen} from '../screens';

const Tab = createBottomTabNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBarOptions={{activeTintColor: 'tomato'}}>
        <Tab.Screen name={'Speaking'} component={SpeakingScreen} />
        <Tab.Screen name={'Grammar'} component={GrammarScreen} />
        <Tab.Screen name={'Listening'} component={ListeningScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
