import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Routes } from './src/routes/routes';
 
export default function App() {
  return (
    <Routes/>
  );  
}
