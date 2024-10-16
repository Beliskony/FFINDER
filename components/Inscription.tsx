import { router } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function Inscription() {
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [datenaiss, setDateNaiss] = useState('');
  const [motDePasse, setMotDePasse] = useState('');

  const handleInscription = () => {
    // Ici, vous implémenteriez la logique d'inscription réelle
    // Par exemple, l'appel à une API ou l'enregistrement dans une base de données
    console.log('Inscription avec:', { nom, email, motDePasse });
    Alert.alert('Inscription réussie', 'Votre compte a été créé avec succès !');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titre}>Inscrivez-vous</Text>
      <TextInput
        style={styles.input}
        placeholder="Nom"
        placeholderTextColor={"black"}
        value={nom}
        onChangeText={setNom}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor={"black"}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Contact"
        placeholderTextColor={"black"}
        value={contact}
        onChangeText={setContact}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Date De Naissance 12/12/2000"
        placeholderTextColor={"black"}
        value={datenaiss}
        onChangeText={setDateNaiss}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Mot de passe"
        placeholderTextColor={"black"}
        value={motDePasse}
        onChangeText={setMotDePasse}
        secureTextEntry
      />
      <TouchableOpacity style={styles.bouton} onPress={handleInscription => router.replace("/(tabs)/HomeScreen")}>
        <Text style={styles.texteBouton}>S'inscrire</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.connec} onPress={ () => router.navigate("/screens/LoginScreen")}>
         <Text>Se connecter</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  connec:{
    alignSelf:"center",
    marginTop:10
  },
  container: {
    height:"95%",
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 60,
    marginHorizontal:20
  
  },
  titre: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#888',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  bouton: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  texteBouton: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});