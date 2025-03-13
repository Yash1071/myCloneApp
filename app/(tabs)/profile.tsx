import React from "react";
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={24} color="black" />
        <Text style={styles.username}>Unblast</Text>
        <Feather name="more-horizontal" size={40} color="black" />
      </View>

      {/* Profile Section */}
      <View style={styles.profileSection}>
        <Image source={{ uri: "https://via.placeholder.com/80" }} style={styles.profileImage} />
        <View style={styles.statsContainer}>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>371</Text>
            <Text style={styles.statLabel}>Posts</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>14.4K</Text>
            <Text style={styles.statLabel}>Followers</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>272</Text>
            <Text style={styles.statLabel}>Following</Text>
          </View>
        </View>
      </View>

      {/* Follow Button */}
      <TouchableOpacity style={styles.followButton}>
        <Text style={styles.followButtonText}>Follow</Text>
      </TouchableOpacity>

      {/* Bio Section */}
      <View style={styles.bio}>
        <Text style={styles.boldText}>Unblast</Text>
        <Text style={styles.lightText}>E-Commerce Website</Text>
        <Text>Selective free resources for designers @unblast.</Text>
        <Text style={styles.linkText}>Melbourne, Victoria, Australia</Text>
      </View>

      {/* Highlights */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.highlights}>
        {["Text 01", "Text 02", "Text 03", "Text 04"].map((item, index) => (
          <View key={index} style={styles.highlight}>
            <View style={styles.highlightCircle} />
            <Text style={styles.highlightText}>{item}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Directions Button */}
      <TouchableOpacity style={styles.directionsButton}>
        <Text style={styles.directionsButtonText}>Directions</Text>
      </TouchableOpacity>

      {/* Grid Section */}
      <View style={styles.grid}>
        {[...Array(6)].map((_, index) => (
          <View key={index} style={styles.gridItem} />
        ))}
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <Ionicons name="home-outline" size={40} color="black" />
        <Ionicons name="search-outline" size={24} color="black" />
        <Ionicons name="add-circle-outline" size={24} color="black" />
        <Ionicons name="heart-outline" size={24} color="black" />
        <Image source={{ uri: "https://via.placeholder.com/30" }} style={styles.bottomProfileImage} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
  header: { flexDirection: "row", justifyContent: "space-between", padding: 15, alignItems: "center" },
  username: { fontSize: 18, fontWeight: "bold" },
  profileSection: { flexDirection: "row", alignItems: "center", paddingHorizontal: 15 },
  profileImage: { width: 80, height: 80, borderRadius: 40 },
  statsContainer: { flexDirection: "row", flex: 1, justifyContent: "space-around" },
  stat: { alignItems: "center" },
  statNumber: { fontSize: 16, fontWeight: "bold" },
  statLabel: { fontSize: 12, color: "gray" },
  followButton: { backgroundColor: "#0095F6", margin: 15, paddingVertical: 8, alignItems: "center", borderRadius: 5 },
  followButtonText: { color: "white", fontWeight: "bold" },
  bio: { paddingHorizontal: 15 },
  boldText: { fontWeight: "bold" },
  lightText: { color: "gray" },
  linkText: { color: "#0095F6" },
  highlights: { flexDirection: "row", padding: 10 },
  highlight: { alignItems: "center", marginRight: 15 },
  highlightCircle: { width: 60, height: 60, borderRadius: 30, backgroundColor: "black" },
  highlightText: { fontSize: 12, marginTop: 5 },
  directionsButton: { alignItems: "center", paddingVertical: 5 },
  directionsButtonText: { color: "#0095F6", fontWeight: "bold" },
  grid: { flexDirection: "row", flexWrap: "wrap", marginHorizontal: 5 },
  gridItem: { width: "33%", height: 120, backgroundColor: "black", margin: 1 },
  bottomNav: { flexDirection: "row", justifyContent: "space-around", padding: 15, borderTopWidth: 1, borderColor: "#ddd" },
  bottomProfileImage: { width: 30, height: 50, borderRadius: 15 },
});

export default ProfileScreen;
