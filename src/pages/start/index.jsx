import React from "react";
import { View, ScrollView, Text, Image, StyleSheet } from "react-native";
import DefaultButton from "../../components/common/defaultButton";
import LifeStatus from "../../components/common/lifeStatus";
import { useNavigation } from "@react-navigation/native";
export default function Start(){
    const handleNavAppExplanation = () => {
        console.log("Testando o clique do botão")
    };

    return(
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{alignItems: "center"}}>
                    <Image style={styles.logo} source={require("../../assets/icons/logo3.png")}/>
                    <LifeStatus/>
                    <Text style={styles.description}>
                        Vamos transformar sua vida {"\n"} em jogo, buscando sempre {"\n"} o melhor nível.
                    </Text>
                    <DefaultButton 
                        buttonText={"Continuar"}
                        handlePress={handleNavAppExplanation}
                        width={250}
                        height={45}
                    />
                </View>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(21, 21, 21, 0.98)",
    },
    logo: {
        width: 300,
        height: 60,
        marginTop: 60,
        marginBottom: 20,
    },
    description: {
        color: "#FFFFFF",
        fontSize: 20,
        textAlign: "center",
        marginVertical: 60,
    }
})