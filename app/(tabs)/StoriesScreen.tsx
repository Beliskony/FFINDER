import React from 'react';
import { View, StyleSheet, FlatList, Image, TouchableOpacity, Dimensions } from 'react-native';
import { Text } from '@rneui/themed';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

interface Story {
  id: string;
  imageUrl: string;
  user: {
    id: string;
    username: string;
    avatar: string;
  };
}

const SCREEN_WIDTH = Dimensions.get('window').width;
const STORY_WIDTH = (SCREEN_WIDTH - 50) / 2; // espace en story
const STORY_HEIGHT = STORY_WIDTH * 1.5; // Rectangle de forme

const stories: Story[] = [
  {
    id: '1',
    imageUrl: 'https://picsum.photos/id/1011/300/450',
    user: { id: '1', username: 'John', avatar: 'https://randomuser.me/api/portraits/men/41.jpg' }
  },
  {
    id: '2',
    imageUrl: 'https://picsum.photos/id/1012/300/450',
    user: { id: '2', username: 'Emma', avatar: 'https://randomuser.me/api/portraits/women/42.jpg' }
  },
  {
    id: '3',
    imageUrl: 'https://picsum.photos/id/1013/300/450',
    user: { id: '3', username: 'Mike', avatar: 'https://randomuser.me/api/portraits/men/43.jpg' }
  },
  {
    id: '4',
    imageUrl: 'https://picsum.photos/id/1014/300/450',
    user: { id: '4', username: 'Sarah', avatar: 'https://randomuser.me/api/portraits/women/44.jpg' }
  },
  {
    id: '5',
    imageUrl: 'https://picsum.photos/id/1015/300/450',
    user: { id: '5', username: 'Alex', avatar: 'https://randomuser.me/api/portraits/men/45.jpg' }
  },
  {
    id: '6',
    imageUrl: 'https://picsum.photos/id/1016/300/450',
    user: { id: '6', username: 'Lisa', avatar: 'https://randomuser.me/api/portraits/women/46.jpg' }
  },
  {
    id: '7',
    imageUrl: 'https://picsum.photos/id/1017/300/450',
    user: { id: '7', username: 'Tom', avatar: 'https://randomuser.me/api/portraits/men/47.jpg' }
  },
];

export default function StoriesScreen() {
  const renderStoryItem = ({ item }: { item: Story }) => (
    <TouchableOpacity style={styles.storyItem}>
      <Image source={{ uri: item.imageUrl }} style={styles.storyImage} />
      <View style={styles.userInfo}>
        <Image source={{ uri: item.user.avatar }} style={styles.avatar} />
        <Text style={styles.username}>{item.user.username}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.header}>
        <Text h4 style={styles.headerTitle}>Stories</Text>
      </View>
      <FlatList
        data={stories}
        renderItem={renderStoryItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.storiesContainer}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  headerTitle: {
    color: '#fff',
  },
  storiesContainer: {
    padding: 10,
  },
  storyItem: {
    width: STORY_WIDTH,
    height: STORY_HEIGHT,
    marginBottom: 10,
    marginHorizontal: 5,
  },
  storyImage: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  userInfo: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 5,
  },
  username: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
});