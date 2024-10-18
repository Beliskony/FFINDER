import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Switch, Alert } from 'react-native';
import { Text, ListItem, Avatar, Button } from '@rneui/themed';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

interface SettingsScreenProps {
  onLogout: () => void;
}

export default function SettingsScreen({ onLogout }: SettingsScreenProps) {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [privateAccount, setPrivateAccount] = useState(false);

  const handleLogout = () => {
    Alert.alert(
      "Déconnexion",
      "Êtes-vous sûr de vouloir vous déconnecter ?",
      [
        { text: "Annuler", style: "cancel" },
        { text: "Déconnexion", onPress: () => onLogout() }
      ]
    );
  };

  const handleEditInfo = () => {
    Alert.alert('Info', 'Fonctionnalité de modification des informations à implémenter');
  };

  const handleChangePassword = () => {
    Alert.alert('Info', 'Fonctionnalité de changement de mot de passe à implémenter');
  };

  const handleAddCard = () => {
    Alert.alert('Info', "Fonctionnalité d'ajout de carte à implémenter");
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.userInfo}>
          <Avatar
            size="large"
            rounded
            source={{ uri: 'https://static.wikia.nocookie.net/viacom4633/images/6/68/Eric_Cartman.png' }}
          />
          <Text h4 style={styles.username}>Profil Teste</Text>
          <Text style={styles.email}>testemail@example.com</Text>
        </View>

        <Text style={styles.sectionTitle}>Compte</Text>
        <ListItem bottomDivider onPress={handleEditInfo}>
          <Ionicons name="person-outline" size={24} color="gray" />
          <ListItem.Content>
            <ListItem.Title>Modifier les informations</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
        <ListItem bottomDivider onPress={handleChangePassword}>
          <Ionicons name="lock-closed-outline" size={24} color="gray" />
          <ListItem.Content>
            <ListItem.Title>Modifier le mot de passe</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
        <ListItem bottomDivider onPress={handleAddCard}>
          <Ionicons name="card-outline" size={24} color="gray" />
          <ListItem.Content>
            <ListItem.Title>Ajouter une carte</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>

        <Text style={styles.sectionTitle}>Préférences</Text>
        <ListItem bottomDivider>
          <ListItem.Content>
            <ListItem.Title>Notifications</ListItem.Title>
          </ListItem.Content>
          <Switch
            value={notifications}
            onValueChange={setNotifications}
          />
        </ListItem>
        <ListItem bottomDivider>
          <ListItem.Content>
            <ListItem.Title>Mode sombre</ListItem.Title>
          </ListItem.Content>
          <Switch
            value={darkMode}
            onValueChange={setDarkMode}
          />
        </ListItem>
        <ListItem bottomDivider>
          <ListItem.Content>
            <ListItem.Title>Compte privé</ListItem.Title>
          </ListItem.Content>
          <Switch
            value={privateAccount}
            onValueChange={setPrivateAccount}
          />
        </ListItem>

        <Text style={styles.sectionTitle}>Sécurité</Text>
        <ListItem bottomDivider onPress={() => Alert.alert('Info', 'Confidentialité')}>
          <Ionicons name="shield-outline" size={24} color="gray" />
          <ListItem.Content>
            <ListItem.Title>Confidentialité</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>

        <Button
          title="Déconnexion"
          onPress={handleLogout}
          buttonStyle={styles.logoutButton}
          titleStyle={styles.logoutButtonText}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  userInfo: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white',
  },
  username: {
    marginTop: 10,
    marginBottom: 5,
  },
  email: {
    color: 'gray',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    marginLeft: 15,
  },
  logoutButton: {
    backgroundColor: '#1da1f2',
    marginTop: 20,
    marginHorizontal: 20,
    marginBottom: 20,
  },
  logoutButtonText: {
    fontSize: 18,
  },
});