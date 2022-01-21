import React from "react";
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image } from "react-native";

import styles from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";
export function Home() {
  const navigation =  useNavigation<any>();
  
  function handlePageBook(){
    navigation.navigate("Book");
  }

  return (
    <View style={styles.container}>
      <View style={styles.areaBox}>
      <Image
        style={styles.logo}
        source={require('../../assets/home/logo.jpg')}
      />
      <Text style={styles.title}>
      Bem Vindo(a)!
      </Text>
      <Text style={styles.text}>
      
        Olá,Eu sou a Pop-chan,
        sou a mascote da editora
        Newpop,hoje venho mostrar
        os destaques da nossa editora.
      
      </Text>
      <Text style={styles.guideText}>
        Clique no botão abaixo para saber mais!
      </Text>
      <Image
        style={styles.popChan}
        source={require('../../assets/home/pop-Chan.jpg')}
      />
      <TouchableOpacity style={styles.button} 
        onPress={() => handlePageBook()}>
        <Text>Saiba Mais!</Text>       
      </TouchableOpacity> 
      <View style={styles.separator}/>
      </View>
    </View>
  );

}

