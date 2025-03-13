import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

const stories = [
  { id: 1, username: 'your story', isUser: true },
  { id: 2, username: 'username' },
  { id: 3, username: 'username' },
  { id: 4, username: 'username' },
];

const InstagramClone = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.logo}>Instagram</Text>
        <View style={styles.icons}>
          <TouchableOpacity>
            <Text>♡</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>⋯</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Stories */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.storiesContainer}>
        {stories.map((story) => (
          <View key={story.id} style={styles.storyBubble}>
            <View style={styles.storyCircle}>
              <Text style={styles.storyText}>{story.username}</Text>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Post */}
      <View style={styles.postContainer}>
        <View style={styles.postHeader}>
          <Text style={styles.postUsername}>username</Text>
        </View>
        <View style={styles.postImage} />
        <Text style={styles.likes}>❤️ 10,547 likes</Text>
        <Text style={styles.caption}><Text style={{ fontWeight: 'bold' }}>username</Text> Lorem ipsum dolor sit amet, consectetur</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: { flexDirection: 'row', justifyContent: 'space-between', padding: 10 },
  logo: { fontSize: 24, fontWeight: 'bold' },
  icons: { flexDirection: 'row', gap: 15 },
  storiesContainer: { flexDirection: 'row', paddingVertical: 10 },
  storyBubble: { alignItems: 'center', marginRight: 10 },
  storyCircle: { width: 60, height: 60, borderRadius: 30, backgroundColor: '#ddd', justifyContent: 'center', alignItems: 'center' },
  storyText: { fontSize: 12 },
  postContainer: { padding: 10 },
  postHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 5 },
  postUsername: { fontWeight: 'bold' },
  postImage: { width: '100%', height: 300, backgroundColor: '#ddd' },
  likes: { fontWeight: 'bold', marginVertical: 5 },
  caption: { fontSize: 14 },
});

export default InstagramClone;