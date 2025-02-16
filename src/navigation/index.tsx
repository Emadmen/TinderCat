import * as React from 'react';
import HomeScreen from '../screens/Home';
import ChatScreen from '../screens/Chat';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import User from '../res/svgs/user';
import Message from '../res/svgs/message';
import Cat from '../res/svgs/cat';
import { colors } from '../res/colors';

const Tab = createBottomTabNavigator();

const getIconColor = (isFocused: boolean) => {
  return isFocused ? colors.primary : colors.grey;
}

export const Navigation = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false, tabBarStyle: { elevation: 3, marginBottom: 40, width: 200, alignSelf: 'center', borderRadius: 36 } }}>
      <Tab.Screen
        name="Home"
        options={{
          tabBarShowLabel: false, tabBarIcon: ({ focused }) => {
            return (
              <Cat color={getIconColor(focused)} />
            );
          },
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="Chat"
        options={{
          tabBarShowLabel: false, tabBarIcon: ({ focused }) => {
            return (
              <Message color={getIconColor(focused)} />
            );
          },
        }}
        component={ChatScreen} />
      <Tab.Screen
        name="Profile"
        options={{
          tabBarShowLabel: false, tabBarIcon: ({ focused }) => {
            return (
              <User color={getIconColor(focused)} />
            );
          },
        }}
        component={HomeScreen} />
    </Tab.Navigator>
  );
}