import React from "react";
import { ScrollView, Image, View, Text } from "react-native";
import styles from "./styles";
const bookList = require("/home/jenifer/projetos/newpop/src/components/bookList/index.json");
console.log(bookList);

export default function BookCard() {
    return ( 
        <View style={styles.container}>
            <Text style={styles.title}>Descubra:</Text>
            <View
                style={styles.separator}
            />
            <View style={styles.boxCard}>
                <Image
                    resizeMode="center"
                    source={require("/home/jenifer/projetos/newpop/src/assets/obras/soloLeveling1.jpg")}
                    style={{
                        width: 150,
                        height: 150,
                        marginVertical: 10,
                        borderRadius: 5,
                    }}
                />
                <View style={styles.boxInfo}>
                    <Text style={styles.infoTitleBook}></Text>
                    <Text style={styles.infoBook}>price</Text>
                </View>
            </View>
        </View>
    );
}
export { BookCard };
