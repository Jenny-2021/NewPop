import React from "react";
import { Image, View, Text } from "react-native";
import styles from "./styles";

export interface BookProps {
    title: string;
    image: string;
    price: number;
}

function BookCard({ title, image, price }: BookProps) {
    return (
        <View style={styles.container}>
            <View
                style={styles.separator}
            />
            <View style={styles.boxCard}>
                <Image
                    source={{ uri: image }}
                style={
                   {
                       width:100,
                       height:150
                   }

                }
                />

                <View style={styles.boxInfo}>
                    <Text style={styles.infoTitleBook}>{ title }</Text>
                    <Text style={styles.infoBook}>{ price }</Text>
                </View>
            </View>
        </View>
    );
}

export { BookCard }
