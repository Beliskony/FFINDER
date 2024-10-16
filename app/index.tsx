import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Inscription from '@/components/Inscription';

export default function Index (){
  return(
    <View style={styles.container}>
      <Inscription></Inscription>
    </View>
  )}

  const styles = StyleSheet.create({
    container:{
      backgroundColor:"white"
    }
  })