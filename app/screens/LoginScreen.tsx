import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { Input, Button, Text } from '@rneui/themed';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';

interface LoginScreenProps {
  onLogin: () => void;
}

export default function LoginScreen({ onLogin }: LoginScreenProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Ici, vous implémenteriez normalement une vérification réelle des identifiants
    if (email === 'user@example.com' && password === 'password') {
      onLogin();
    } else {
      Alert.alert('Erreur', 'Email ou mot de passe incorrect');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text h3 style={styles.title}>Bienvenue sur MonRéseau</Text>
      <Input
        placeholder="Email"
        leftIcon={{ type: 'ionicon', name: 'mail-outline' }}
        onChangeText={setEmail}
        value={email}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <Input
        placeholder="Mot de passe"
        leftIcon={{ type: 'ionicon', name: 'lock-closed-outline' }}
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      <Button title="Se connecter" onPress={handleLogin => router.replace("../(tabs)/Homescreens")} containerStyle={styles.button} />
      <Button 
        title="S'inscrire" 
        type="clear" 
        containerStyle={styles.button}
        onPress={() => router.back()}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#F5FCFF',
  },
  title: {
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    marginTop: 10,
  },
});