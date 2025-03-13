import React from 'react';
import { View, Text, StyleSheet, Image, Alert, TouchableOpacity, ScrollView } from 'react-native';

export default function App() {
  const showAlert = () => {
    Alert.alert("Alert Button pressed");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header with Cover Photo */}
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIe-fqhwo9EUkg4JCkdP6_MxeQG06lPobKYg&s' }} // Replace with a cover photo URL
          style={styles.coverPhoto}
        />
        <View style={styles.profileImageWrapper}>
          <Image
            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDcXvMnb2wGYm-Sx41RZ1ncxwIqzzX4PQxMQ&s' }} // Replace with a profile photo URL
            style={styles.profileImage}
          />
        </View>
      </View>

      {/* Profile Info */}
      <Text style={styles.name}>John Smith</Text>
      <Text style={styles.subTitle}>Bio</Text>

      {/* Follow Button */}
      <TouchableOpacity style={styles.followButton}>
        <Text style={styles.followButtonText}>Follow</Text>
      </TouchableOpacity>

      {/* Stats and Links */}
      <Text style={styles.stats}>2.3M Followers</Text>
      <Text style={styles.role}>Content Creator</Text>
      <Text style={styles.link}>Stories</Text>

      {/* Story Highlights */}
      <View style={styles.storyHighlights}>
        <Image
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxUjuZXu2F86sca2cUjX-1LMcw9ABHh3f22g&s' }}
          style={styles.storyImage}
        />
        <Image
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuUtCLP8IZsvnEp9eZkfcYng53OTZtn8kDNQ&s' }}
          style={styles.storyImage}
        />
        <Image
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSWo8UA5AM-0F_JPwbXEc5KBrHnBSFE8YvCg&s' }}
          style={styles.storyImage}
        />
        <Image
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRioEI4ukddcJtBu_a_D5oMI49OLkLSBXPyNw&s' }}
          style={styles.storyImage}
        />
      </View>

      {/* Alert Button */}
      <TouchableOpacity style={styles.alertButton} onPress={showAlert}>
        <Text style={styles.alertButtonText}>Alert</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    marginTop: 50,
    padding: 8,
  },
  header: {
    width: '100%',
    height: 200,
  },
  coverPhoto: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  profileImageWrapper: {
    position: 'absolute',
    bottom: -50,
    left: '50%',
    transform: [{ translateX: -50 }],
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#fff',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 60,
    textAlign: 'center',
  },
  subTitle: {
    fontSize: 18,
    color: '#555',
    textAlign: 'center',
  },
  followButton: {
    backgroundColor: '#1877F2',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 5,
    marginTop: 10,
  },
  followButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  stats: {
    fontSize: 16,
    color: '#333',
    marginTop: 10,
    textAlign: 'center',
  },
  role: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
  },
  link: {
    fontSize: 17,
    color: '#1877F2',
    marginTop: 5,
    textAlign: 'center',
  },
  storyHighlights: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginVertical: 20,
  },
  storyImage: {
    width: 65,
    height: 65,
    borderRadius: 35,
    marginHorizontal: 5,
  },
  alertButton: {
    backgroundColor: '#ff5722',
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 5,
    marginTop: 20,
  },
  alertButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
