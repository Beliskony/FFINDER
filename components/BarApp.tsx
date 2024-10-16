import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function BarApp() {
  return (
    <View style={styles.container}>
      {/* Expo StatusBar */}
      <StatusBar style="light" backgroundColor="#1da1f2" />

      {/* Barre avec le nom et les icônes */}
      <View style={styles.appBar}>
        <Text style={styles.Name}>FFINDER</Text>

        <View style={styles.iconContainer}>
          
                <TouchableOpacity>
                    <Ionicons name="person-circle-outline" size={30} color="white" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.iconSpacing}>
                    <Ionicons name="settings" size={28} color="white" />
                </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1da1f2', // Fond de la barre d'en-tête
  },
  appBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  Name: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  iconContainer: {
    flexDirection: 'row',
  },
  iconSpacing: {
    marginLeft: 15,
  },
});