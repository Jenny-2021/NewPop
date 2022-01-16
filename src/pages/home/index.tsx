import React from "react";
import { useNavigation } from '@react-navigation/native';
import { View, Text, Button } from "react-native";

import styles from "./styles";

export function Home() {
  const navigation =  useNavigation<any>();
  
  function handlePageBook(){
    navigation.navigate("Book");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <Button
        onPress={() => handlePageBook()}
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );

}

