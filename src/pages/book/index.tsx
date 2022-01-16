import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Button, FlatList, Text } from "react-native";

import styles from "./styles";


import { BookCard, BookProps } from "../../components/bookItem";

export function Book(): any {

  const navigation = useNavigation<any>();
  const Books : BookProps[] = require('../../json/index.json');

  function handlePageHome() {
    navigation.navigate("Home");
  }
  return (
    <View style={styles.container}>

      <Button
        onPress={() => handlePageHome()}
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      <FlatList
        data={Books}
        keyExtractor={(item) => item.title}
        renderItem={({item} ) => (
          <BookCard title={item.title} image={item.image} price={item.price}/>
        )}
      />
    </View>
  );

}


