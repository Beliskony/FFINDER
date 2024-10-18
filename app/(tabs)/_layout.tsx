import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>

<Tabs.Screen
    name="HomeScreen"
    options={{
      title: 'Home',
      tabBarIcon: ({ color, focused }) => (
        <Ionicons
          name={focused ? 'home' : 'home-outline'}
          color={color}
          size={24}
        />
      ),
    }}
  />

<Tabs.Screen
    name="MessagesScreen"
    options={{
      title: 'Messages',
      tabBarIcon: ({ color, focused }) => (
        <Ionicons
          name={focused ? 'chatbubble-ellipses' : 'chatbubble-ellipses-outline'}
          color={color}
          size={24}
        />
      ),
    }}
  />

<Tabs.Screen
    name="NotificationsScreen"
    options={{
      title: 'Notifications',
      tabBarIcon: ({ color, focused }) => (
        <Ionicons
          name={focused ? 'notifications' : 'notifications-outline'}
          color={color}
          size={24}
        />
      ),
    }}
  />

<Tabs.Screen
    name="StoriesScreen"
    options={{
      title: 'Story',
      tabBarIcon: ({ color, focused }) => (
        <Ionicons
          name={focused ? 'id-card' : 'id-card-outline'}
          color={color}
          size={24}
        />
      ),
    }}
  />
    </Tabs>
  );
}
