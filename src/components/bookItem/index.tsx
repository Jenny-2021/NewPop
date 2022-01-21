import React from "react";
import { Image, View, Text, SafeAreaView } from "react-native";
import styles from "./styles";

export interface BookProps {
    title: string;
    image: string;
    price: number;
}


function BookCard({ title, image, price }: BookProps) {
    return (
        <SafeAreaView style={styles.container}>
            <View
                style={styles.separator}
            />
            <View style={styles.boxCard}>
                <Image
                    source={{ uri: image }}
                    
                    
                style={
                   {   
                       borderRadius:7,
                       width:100,
                       height:150,
                       margin:5,
                       
                   }
                   
                }
                />

                <View style={styles.boxInfo}>
                    <Text style={styles.infoTitleBook}>{ title }</Text>
                    <Text style={styles.infoBook}>{ price }</Text>
                </View>
            </View>
        </SafeAreaView>
    );
}

export { BookCard }
