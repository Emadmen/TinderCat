import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native';
import { } from 'react-native-gesture-handler';

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <View><Text>Tinder Cat..</Text></View>
  )
}

export const Navigation = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false, tabBarStyle: { elevation: 3, marginBottom: 40, width: 200, alignSelf: 'center', borderRadius: 36 } }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        name="Chat"
        component={HomeScreen} />
      <Tab.Screen
        name="Profile"
        component={HomeScreen} />
    </Tab.Navigator>
  );
}